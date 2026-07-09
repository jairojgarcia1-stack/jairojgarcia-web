import { ImageResponse } from "next/og";
import { AUTHOR_NAME } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0908 0%, #201d18 100%)",
          color: "#f7f4ee",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#cfa85d",
            marginBottom: 24,
          }}
        >
          Author · Speaker · Coach
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, textAlign: "center", padding: "0 60px" }}>
          {AUTHOR_NAME}
        </div>
        <div style={{ fontSize: 32, color: "#a79c89", marginTop: 28 }}>
          Identity · Purpose · Transformation
        </div>
      </div>
    ),
    { ...size }
  );
}
