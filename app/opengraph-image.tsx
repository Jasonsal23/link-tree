import { ImageResponse } from "next/og";

export const alt = "Jason Salazar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "6px",
            height: "100%",
            background: "linear-gradient(to bottom, #3b82f6, #c9a84c)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Monogram */}
          <div
            style={{
              display: "flex",
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background: "rgba(59,130,246,0.12)",
              border: "2px solid rgba(59,130,246,0.4)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: "800",
              color: "#3b82f6",
              letterSpacing: "-1px",
            }}
          >
            JS
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: "80px",
              fontWeight: "800",
              color: "#f5f5f5",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Jason Salazar
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#666666",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            Developer · Creator · Entrepreneur
          </div>

          {/* Domain pill */}
          <div
            style={{
              display: "flex",
              marginTop: "8px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "999px",
              padding: "10px 32px",
              fontSize: "22px",
              color: "#3b82f6",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            jasonsalazar.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
