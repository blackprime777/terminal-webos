import { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import Terminal from "../Terminal/Terminal";
import "./Desktop.css";

export default function Desktop() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalMinimized, setTerminalMinimized] = useState(false);

  const openTerminal = () => {
    setTerminalOpen(true);
    setTerminalMinimized(false);
  };

  const closeTerminal = () => {
    setTerminalOpen(false);
    setTerminalMinimized(false);
  };

  const minimizeTerminal = () => {
    setTerminalMinimized(true);
  };

  return (
    <div className="desktop">
      {/* Top Bar */}
      <div className="desktop-topbar">
        Terminal WebOS
      </div>

      {/* Desktop Area */}
      <div className="desktop-area">
        Welcome to Terminal WebOS
      </div>

      {/* Applications */}
      {terminalOpen && !terminalMinimized && (
        <Terminal
          onClose={closeTerminal}
          onMinimize={minimizeTerminal}
        />
      )}

      {/* Bottom Taskbar */}
      <Taskbar
        onOpenTerminal={openTerminal}
        terminalVisible={terminalOpen}
      />
    </div>
  );
}
