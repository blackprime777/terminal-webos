import { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import Terminal from "../Terminal/Terminal";
import "./Desktop.css";

export default function Desktop() {
  const [terminalOpen, setTerminalOpen] = useState(false);

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
      {terminalOpen && (
        <Terminal onClose={() => setTerminalOpen(false)} />
      )}

      {/* Bottom Taskbar */}
      <Taskbar onOpenTerminal={() => setTerminalOpen(true)} />
    </div>
  );
}
