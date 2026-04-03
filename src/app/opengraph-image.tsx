import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const alt = `${SITE_NAME} | Utah Luxury Real Estate`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2D1B4E 0%, #1a0f30 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#C9A96E",
            marginBottom: "32px",
            borderRadius: "2px",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            color: "#C9A96E",
            fontSize: "22px",
            letterSpacing: "10px",
            textTransform: "uppercase",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          CHILDS REAL ESTATE
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Utah Luxury Real Estate
        </div>

        {/* Subheadline */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "26px",
            textAlign: "center",
            maxWidth: "750px",
            lineHeight: 1.5,
            marginBottom: "40px",
            display: "flex",
          }}
        >
          {SITE_DESCRIPTION}
        </div>

        {/* Gold accent bar */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#C9A96E",
            borderRadius: "2px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
