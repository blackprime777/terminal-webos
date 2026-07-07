import { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import Terminal from "../Terminal/Terminal";
import Dashboard from "../Dashboard/Dashboard";
import "./Desktop.css";

export default function Desktop() {
  // Terminal
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalMinimized, setTerminalMinimized] = useState(false);

  // Dashboard
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [dashboardMinimized, setDashboardMinimized] =
    useState(false);

  // Root Session
  const [isRoot, setIsRoot] = useState(false);

  // ---------- Terminal ----------
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

  // Called when the Terminal executes the "root" command
  const activateRoot = () => {
    setIsRoot(true);
  };

  // ---------- Dashboard ----------
  const openDashboard = () => {
    setDashboardOpen(true);
    setDashboardMinimized(false);
  };

  const closeDashboard = () => {
    setDashboardOpen(false);
    setDashboardMinimized(false);
  };

  const minimizeDashboard = () => {
    setDashboardMinimized(true);
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

      {/* Terminal */}
      {terminalOpen && !terminalMinimized && (
        <Terminal
          onClose={closeTerminal}
          onMinimize={minimizeTerminal}
          onRootLogin={activateRoot}
        />
      )}

      {/* Dashboard */}
      {dashboardOpen && !dashboardMinimized && (
        <Dashboard
          isRoot={isRoot}
          onClose={closeDashboard}
          onMinimize={minimizeDashboard}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        onOpenTerminal={openTerminal}
        onOpenDashboard={openDashboard}
        terminalVisible={terminalOpen}
        dashboardVisible={dashboardOpen}
      />
    </div>
  );
}
