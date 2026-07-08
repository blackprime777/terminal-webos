import { useState } from "react";
import "./Terminal.css";
import { executeCommand } from "./commands";
import { runZara } from "./zara";           // add this
import { getWalletName } from "./wallets";  // add this
import { zaraLogs } from "./logs";          // add this

type TerminalProps = {
  onClose: () => void;
  onMinimize: () => void;
  onRootLogin: () => void;
};

export default function Terminal({
  onClose,
  onMinimize,
  onRootLogin,
}: TerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "Terminal WebOS v1.0",
    "Welcome.",
    "Type 'ls' to view available commands.",
    "Type 'root' to unlock Dashboard.",
    "Type 'zara' to launch Zara.",
    "",
  ]);

  const [command, setCommand] = useState("");
  const [sessionActive, setSessionActive] = useState(false);

  const handleSessionInput = (input: string) => {
    const network = input.trim();
    const walletName = getWalletName(network);

    if (!walletName) {
      setHistory((prev) => [
        ...prev,
        `$ ${input}`,
        "❌ Unknown network. Please use: Solana, BTC, ETH, or XMR",
        "",
      ]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      `$ ${input}`,
      `Session received: ${network}`,
      "",
      ...zaraLogs.boot,
      `✅ Connected to ${walletName} (${network.toUpperCase()})`,
      "Simulation started successfully.",
      "Type 'help' for available commands.",
      "",
    ]);

    setSessionActive(false);
  };

  const runCommand = () => {
    const input = command.trim();
    if (!input) return;

    if (sessionActive) {
      handleSessionInput(input);
      setCommand("");
      return;
    }

    const result = executeCommand(input);

    // Improved Zara launch
    if (input.toLowerCase() === "zara") {
      const zaraResult = runZara(input);
      setHistory((prev) => [...prev, `$ ${input}`, ...zaraResult.output]);
      setSessionActive(true);
      setCommand("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      `$ ${input}`,
      ...result.output,
    ]);

    if (result.root) {
      onRootLogin();
    }

    setCommand("");
  };

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
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <div className="terminal-input">
          <span>$ </span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand();
              }
            }}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
