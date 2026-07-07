import { useState } from "react";
import StartMenu from "./StartMenu";
import "./Taskbar.css";

type TaskbarProps = {
  onOpenTerminal: () => void;
  terminalVisible: boolean;
};

export default function Taskbar({
  onOpenTerminal,
  terminalVisible,
}: TaskbarProps) {
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

      <div className="taskbar">
        <div className="taskbar-left">
          <button
            className="start-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Start
          </button>

          {terminalVisible && (
            <span
              style={{ cursor: "pointer" }}
              onClick={onOpenTerminal}
            >
              Terminal
            </span>
          )}

          <span>Dashboard</span>
          <span>Settings</span>
        </div>

        <div className="taskbar-time">{currentTime}</div>
      </div>
    </>
  );
}
