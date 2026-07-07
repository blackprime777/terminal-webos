import { useState } from "react";
import StartMenu from "./StartMenu";
import "./Taskbar.css";

type TaskbarProps = {
  onOpenTerminal: () => void;
  onOpenDashboard: () => void;
  terminalVisible: boolean;
  dashboardVisible: boolean;
};

export default function Taskbar({
  onOpenTerminal,
  onOpenDashboard,
  terminalVisible,
  dashboardVisible,
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
        onOpenDashboard={() => {
          onOpenDashboard();
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
              🖥 Terminal
            </span>
          )}

          {dashboardVisible && (
            <span
              style={{ cursor: "pointer" }}
              onClick={onOpenDashboard}
            >
              📊 Dashboard
            </span>
          )}

          <span>⚙️ Settings</span>
        </div>

        <div className="taskbar-time">{currentTime}</div>
      </div>
    </>
  );
}
