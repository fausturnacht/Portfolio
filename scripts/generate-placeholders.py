"""Generate a neutral placeholder avatar and an empty resume PDF in /public."""
from PIL import Image, ImageDraw
import os, zlib, struct

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pub = os.path.join(root, "public")

size = 320
img = Image.new("RGB", (size, size), (0xEB, 0xEB, 0xEB))
d = ImageDraw.Draw(img)
cx, cy = size // 2, size // 2
d.ellipse((cx - 62, cy - 96, cx + 62, cy + 28), fill=(0xA8, 0xA8, 0xA8))
d.ellipse((cx - 104, cy + 34, cx + 104, cy + 232), fill=(0xA8, 0xA8, 0xA8))
img.save(os.path.join(pub, "avatar.jpg"), quality=88)

# Minimal one-page PDF placeholder.
content = b"""BT /F1 18 Tf 72 720 Td (Resume) Tj ET
BT /F1 11 Tf 72 690 Td (Replace public/resume.pdf with your own.) Tj ET
"""
objs = [
    b"<< /Type /Catalog /Pages 2 0 R >>",
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
    b"/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    b"<< /Length %d >>\nstream\n%s\nendstream" % (len(content), content),
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
]
out = bytearray(b"%PDF-1.4\n")
offsets = []
for i, o in enumerate(objs, start=1):
    offsets.append(len(out))
    out += b"%d 0 obj\n" % i + o + b"\nendobj\n"
xref = len(out)
out += b"xref\n0 %d\n" % (len(objs) + 1)
out += b"0000000000 65535 f \n"
for off in offsets:
    out += b"%010d 00000 n \n" % off
out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
    len(objs) + 1,
    xref,
)
with open(os.path.join(pub, "resume.pdf"), "wb") as f:
    f.write(bytes(out))

print("wrote avatar.jpg and resume.pdf")
