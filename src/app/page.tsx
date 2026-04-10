"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
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
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            background: "#D4880A",
            color: "#141425",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: status === "loading" ? "default" : "pointer",
            userSelect: "none",
            opacity: status === "loading" ? 0.7 : 1,
            border: "none",
            fontFamily: "inherit",
          }}
        >
          {status === "loading" ? "Sending..." : "Get early access"}
        </button>
      </div>
      {status === "success" && (
        <p
          style={{
            color: "#D4880A",
            fontSize: "14px",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          You&apos;re on the list.
        </p>
      )}
      {status === "error" && (
        <p
          style={{
            color: "#E8E4DE",
            fontSize: "14px",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          {errorMessage}
        </p>
      )}
    </main>
  );
}
