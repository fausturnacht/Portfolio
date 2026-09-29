import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ededed",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, color: "#8f8f8f", letterSpacing: 2 }}>
        {siteConfig.role.toUpperCase()}
      </div>
      <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, marginTop: 16 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 34, color: "#a1a1a1", marginTop: 24 }}>
        {siteConfig.tagline}
      </div>
    </div>,
    size,
  );
}
