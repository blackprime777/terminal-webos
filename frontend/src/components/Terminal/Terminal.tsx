import { useState } from "react";
import "./Terminal.css";
import { executeCommand } from "./commands";
import { runZara } from "./commands/zara";
import { getWalletName } from "./commands/wallets";
import { zaraLogs } from "./commands/logs";
import { payloadStages } from "./commands/payloads";
import { runSimulation } from "./commands/timers";

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
  const [zaraStage, setZaraStage] = useState<"idle" | "network" | "address" | "key" | "complete">("idle");

  const handleSessionInput = (input: string) => {
    const trimmed = input.trim();

    // Network selection
    if (zaraStage === "network") {
      const walletName = getWalletName(trimmed);
      if (!walletName) {
        setHistory((prev) => [...prev, `$ ${trimmed}`, "❌ Unknown network. Try BTC, SOL, etc."]);
        return;
      }

      setHistory((prev) => [
        ...prev,
        `$ ${trimmed}`,
        `Session received: ${trimmed}`,
        "",
        ...zaraLogs.boot,
        `✅ Connected to ${walletName}`,
        "",
        "Enter your BTC wallet address:",
        "",
      ]);
      setZaraStage("address");
      return;
    }

    // BTC Address stage
    if (zaraStage === "address") {
      setHistory((prev) => [
        ...prev,
        `$ ${trimmed}`,
        "BTC Address received. Validating...",
        "",
        "Enter licensed key to unlock full module:",
        "",
      ]);
      setZaraStage("key");
      return;
    }

    // License Key stage
    if (zaraStage === "key") {
      if (trimmed === "jpc0p514") {
        setHistory((prev) => [
          ...prev,
          `$ ${trimmed}`,
          "✅ Triangle verified.",
          "",
          "wallet plugin = Y2l0eSBhZGQgdHJ1Y2sgaG9vZCBwb2VtIHZhc3Qgc3R1ZGVudCByb21hbmNlIHJlbWluZCBjb21wYW55IGV4aXQga2l3aQ==",
          "",
          "Type 'root' to access dashboard",
          "",
        ]);
        setZaraStage("complete");
      } else {
        setHistory((prev) => [...prev, `$ ${trimmed}`, "❌ Invalid license key."]);
      }
      return;
    }

    // Initial network selection after zara
    const walletName = getWalletName(trimmed);
    if (walletName) {
      setHistory((prev) => [
        ...prev,
        `$ ${trimmed}`,
        `Session received: ${trimmed}`,
        "",
        ...zaraLogs.boot,
        `✅ Connected to ${walletName}`,
        "Starting long-term zer0one payload (3 minutes)...",
        "",
      ]);

      // 3 minute simulation
      runSimulation(
        payloadStages,
        180000, // 3 minutes
        (step) => {
          setHistory((prev) => [...prev, `> ${step.progress}% ${step.message}`]);
        },
        () => {
          setHistory((prev) => [
            ...prev,
            "",
            "Payload stabilization complete.",
            "Enter BTC wallet address to continue.",
            "",
          ]);
          setZaraStage("address");
        }
      );
      return;
    }
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

    if (input.toLowerCase() === "zara") {
      const zaraResult = runZara(input);
      setHistory((prev) => [...prev, `$ ${input}`, ...zaraResult.output]);
      setSessionActive(true);
      setZaraStage("network");
      setCommand("");
      return;
    }

    setHistory((prev) => [...prev, `$ ${input}`, ...result.output]);

    if (result.root) {
      onRootLogin();
    }

    setCommand("");
  };

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <span>Terminal</span>
        <div>
          <button className="terminal-close" onClick={onMinimize} title="Minimize">🗕</button>
          <button className="terminal-close" onClick={onClose} title="Close">✕</button>
        </div>
      </div>

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
