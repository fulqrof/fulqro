"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#141425",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="FULQRO"
        style={{ width: "400px", height: "auto" }}
      />
      <p
        style={{
          color: "#E8E4DE",
          fontSize: "14px",
          marginTop: "32px",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Launching soon. Be first to know.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            background: "transparent",
            border: "1px solid #D4880A",
            color: "#E8E4DE",
            padding: "10px 14px",
            fontSize: "14px",
            outline: "none",
            minWidth: "240px",
          }}
        />
        <div
          onClick={handleSubmit}
          style={{
            background: "#D4880A",
            color: "#141425",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          Get early access
        </div>
      </div>
    </main>
  );
}
