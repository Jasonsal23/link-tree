import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Jason Salazar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const imageData = readFileSync(join(process.cwd(), "public/images/profilepic.png"));
  const base64 = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Content row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
            padding: "0 80px",
          }}
        >
          {/* Profile photo */}
          <div
            style={{
              display: "flex",
              width: "220px",
              height: "220px",
              borderRadius: "24px",
              backgroundImage: `url(${base64})`,
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
              flexShrink: 0,
            }}
          />

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: "800",
                color: "#f5f5f5",
                letterSpacing: "-2px",
                lineHeight: 1.1,
              }}
            >
              Jason Salazar
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                color: "#888888",
                fontWeight: "500",
              }}
            >
              Developer · Creator · Entrepreneur
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                color: "#555555",
              }}
            >
              📍 Las Vegas, NV
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.35)",
                  borderRadius: "999px",
                  padding: "6px 22px",
                  fontSize: "20px",
                  color: "#3b82f6",
                  fontWeight: "600",
                }}
              >
                jasonsalazar.com
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
