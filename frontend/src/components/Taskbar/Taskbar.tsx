import { useState } from "react";
import StartMenu from "./StartMenu";

type TaskbarProps = {
  onOpenTerminal: () => void;
};

export default function Taskbar({ onOpenTerminal }: TaskbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <StartMenu
        isOpen={menuOpen}
        onOpenTerminal={() => {
          onOpenTerminal();
          setMenuOpen(false);
        }}
      />

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
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
    </>
  );
}
