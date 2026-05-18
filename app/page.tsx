export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "24px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{fontSize: "32px", fontWeight: "bold"}}>
        Smart Credit Flow
      </h1>

      <p style={{marginTop: "12px", opacity: 0.8}}>
        Mini app quản lý thẻ tín dụng và dòng tiền cá nhân.
      </p>

      <div style={{
        marginTop: "32px",
        padding: "24px",
        borderRadius: "24px",
        background: "#1e293b"
      }}>
        <h2>Tổng dư nợ</h2>
        <h3 style={{fontSize: "42px"}}>45,000,000đ</h3>
      </div>
    </main>
  );
}
