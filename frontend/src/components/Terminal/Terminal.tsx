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

  const handleSessionInput = (input: string) => {
    const network = input.trim();
    const walletName = getWalletName(network);

    if (!walletName) {
      setHistory((prev) => [
        ...prev,
        `$ ${input}`,
        "❌ Unknown network.",
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
      `✅ Connected to ${walletName}`,
      "Launching zer0one payload...",
      "",
    ]);

    setSessionActive(false);

    // ASCII Animation + Progress
    const asciiFrames = [
      " [  ZARA CORE v1.0  ] ",
      " [■□□□□] Connecting... ",
      " [■■□□□] Loading Neural ",
      " [■■■□□] Breaching Net  ",
      " [■■■■□] Injecting..... ",
      " [■■■■■] EXPLOIT ACTIVE ",
    ];

    let frameIndex = 0;
    const asciiInterval = setInterval(() => {
      if (frameIndex < asciiFrames.length) {
        setHistory((prev) => [...prev, asciiFrames[frameIndex]]);
        frameIndex++;
      } else {
        clearInterval(asciiInterval);
      }
    }, 600);

    // Parallel progress simulation
    runSimulation(
      payloadStages,
      14000,
      (step) => {
        setHistory((prev) => [...prev, `> ${step.progress}% ${step.message}`]);
      },
      () => {
        const zaraArt = `
   .-""""""-.
 .'          '.
(    Z A R A    )
 '.          .'
   '-......-'
     /  |  \\
    /___|___\\
   AI CYBER CORE
        `;

        setHistory((prev) => [
          ...prev,
          "",
          zaraArt,
          "",
          "🎉 EXPLOITATION SUCCESSFUL",
          `Target: ${walletName}`,
          "Zara AI Core fully active.",
          "",
        ]);
      }
    );
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
