export default function Taskbar() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        background: "#111",
        borderTop: "1px solid #00ff66",
        color: "#00ff66",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 15px",
        boxSizing: "border-box",
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          style={{
            background: "#00ff66",
            color: "#000",
            border: "none",
            padding: "6px 14px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Start
        </button>

        <span>Terminal</span>
        <span>Dashboard</span>
        <span>Settings</span>
      </div>

      <div>{currentTime}</div>
    </div>
  );
}
