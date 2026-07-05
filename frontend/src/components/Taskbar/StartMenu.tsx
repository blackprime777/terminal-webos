type StartMenuProps = {
  isOpen: boolean;
};

export default function StartMenu({ isOpen }: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "55px",
        left: "15px",
        width: "240px",
        background: "#111",
        border: "1px solid #00ff66",
        color: "#00ff66",
        fontFamily: "monospace",
        padding: "10px",
        boxShadow: "0 0 15px rgba(0,255,102,0.3)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          borderBottom: "1px solid #00ff66",
          paddingBottom: "8px",
        }}
      >
        Terminal WebOS
      </h3>

      <div style={{ padding: "8px 0", cursor: "pointer" }}>
        🖥️ Terminal
      </div>

      <div style={{ padding: "8px 0", cursor: "pointer" }}>
        📊 Dashboard
      </div>

      <div style={{ padding: "8px 0", cursor: "pointer" }}>
        ⚙️ Settings
      </div>

      <div style={{ padding: "8px 0", cursor: "pointer", color: "#ff5555" }}>
        🚪 Logout
      </div>
    </div>
  );
}
