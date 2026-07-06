import "./Terminal.css";

type TerminalProps = {
  onClose: () => void;
};

export default function Terminal({ onClose }: TerminalProps) {
  return (
    <div className="terminal-window">
      {/* Title Bar */}
      <div className="terminal-titlebar">
        <span>Terminal</span>

        <button
          className="terminal-close"
          onClick={onClose}
        >
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
