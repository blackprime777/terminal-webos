import "./Terminal.css";

type TerminalProps = {
  onClose: () => void;
  onMinimize: () => void;
};

export default function Terminal({
  onClose,
  onMinimize,
}: TerminalProps) {
  return (
    <div className="terminal-window">
      {/* Title Bar */}
      <div className="terminal-titlebar">
        <span>Terminal</span>

        <div>
          <button
            className="terminal-close"
            onClick={onMinimize}
            title="Minimize"
          >
            🗕
          </button>

          <button
            className="terminal-close"
            onClick={onClose}
            title="Close"
          >
            ✕
          </button>
        </div>
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
