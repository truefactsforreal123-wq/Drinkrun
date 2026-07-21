import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      textAlign: "center",
      padding: "24px",
      background: "var(--cream)",
    }}>
      <span style={{ fontSize: "80px", lineHeight: "1" }}>404</span>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", margin: 0 }}>Wrong turn</h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: "400px" }}>This page doesn't exist. Probably our fault. Let's get you back somewhere nice.</p>
      <Link href="/" style={{
        padding: "12px 24px",
        background: "var(--coral)",
        color: "white",
        borderRadius: "99px",
        fontWeight: 800,
        fontSize: "13px",
      }}>Back to Drink Run</Link>
    </main>
  );
}
