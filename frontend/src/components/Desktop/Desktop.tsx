import Taskbar from "../Taskbar/Taskbar";

export default function Desktop() {
  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "#00ff66",
        width: "100%",
        height: "100vh",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: "45px",
          background: "#111",
          borderBottom: "1px solid #00ff66",
          display: "flex",
          alignItems: "center",
          padding: "0 15px",
          fontWeight: "bold",
        }}
      >
        Terminal WebOS
      </div>

      {/* Desktop Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
        }}
      >
        Welcome to Terminal WebOS
      </div>

      {/* Bottom Taskbar */}
      <Taskbar />
    </div>
  );
}
