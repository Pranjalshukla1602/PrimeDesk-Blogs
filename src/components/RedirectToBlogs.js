"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Used by root `page` and `not-found` so unknown routes land on `/blogs/`. */
export default function RedirectToBlogs() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/blogs/");
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#475569",
        background: "#f7f9fc",
      }}
    >
      <p style={{ fontSize: "15px" }}>Redirecting to blog…</p>
    </div>
  );
}
