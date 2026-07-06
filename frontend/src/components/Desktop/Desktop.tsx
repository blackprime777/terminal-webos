import { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import Terminal from "../Terminal/Terminal";

export default function Desktop() {
  const [terminalOpen, setTerminalOpen] = useState(false);

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
        position: "relative",
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

      {/* Applications */}
      {terminalOpen && <Terminal />}

      {/* Bottom Taskbar */}
      <Taskbar onOpenTerminal={() => setTerminalOpen(true)} />
    </div>
  );
}
