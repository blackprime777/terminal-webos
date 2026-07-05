export default function Terminal() {
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "80px",
        width: "700px",
        height: "450px",
        background: "#000",
        border: "1px solid #00ff66",
        color: "#00ff66",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 20px rgba(0,255,102,0.3)",
      }}
    >
      {/* Title Bar */}
      <div
        style={{
          height: "40px",
          background: "#111",
          borderBottom: "1px solid #00ff66",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          fontWeight: "bold",
        }}
      >
        <span>Terminal</span>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#ff5555",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ✕
        </button>
      </div>

      {/* Terminal Body */}
      <div
        style={{
          flex: 1,
          padding: "15px",
          overflow: "auto",
        }}
      >
        <p>Terminal WebOS v1.0</p>
        <p>Welcome.</p>
        <p>$ _</p>
      </div>
    </div>
  );
}
