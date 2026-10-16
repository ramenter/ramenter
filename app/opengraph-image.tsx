import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ram Enterprises: trusted residential real estate in Bhopal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logo, photo] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-mark.png"), "base64"),
    readFile(join(process.cwd(), "public/sn-krishna/clubhouse.jpg"), "base64"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fbf6e8",
        borderBottom: "16px solid #e0a526",
        color: "#1c1710",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
        }}
      >
        <img src={`data:image/png;base64,${logo}`} height={120} alt="" />
        <div style={{ marginTop: 40, fontSize: 22, letterSpacing: 6, color: "#8f6a06" }}>
          RESIDENTIAL REAL ESTATE · BHOPAL
        </div>
        <div style={{ marginTop: 16, fontSize: 64, fontWeight: 700 }}>Ram Enterprises</div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#6b6352" }}>
          30+ years of trust · SN Krishna, Kolar Road
        </div>
      </div>
      <img
        src={`data:image/jpeg;base64,${photo}`}
        width={400}
        height={614}
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>,
    size,
  );
}
