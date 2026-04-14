import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const imageData = readFileSync(join(process.cwd(), "public/images/profilepic.png"));
  const base64 = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundImage: `url(${base64})`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            border: "2px solid rgba(59,130,246,0.5)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
