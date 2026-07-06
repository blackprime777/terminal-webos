import "./Terminal.css";

export default function Terminal() {
  return (
    <div className="terminal-window">
      {/* Title Bar */}
      <div className="terminal-titlebar">
        <span>Terminal</span>

        <button className="terminal-close">
          ✕
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <p>Terminal WebOS v1.0</p>
        <p>Welcome.</p>
        <p>$ _</p>
      </div>
    </div>
  );
}
