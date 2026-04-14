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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blue glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Gold glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

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
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(59,130,246,0.5)",
              boxShadow: "0 0 40px rgba(59,130,246,0.3)",
              flexShrink: 0,
            }}
          >
            <img
              src={base64}
              alt="Jason Salazar"
              width={220}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
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
                fontSize: "28px",
                color: "#888",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              Developer · Creator · Entrepreneur
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#555",
                marginTop: "4px",
              }}
            >
              📍 Las Vegas, NV
            </div>

            {/* Divider pill */}
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "999px",
                  padding: "6px 20px",
                  fontSize: "18px",
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
