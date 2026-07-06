import { useEffect, useState } from "react";
import "./BootScreen.css";

const bootMessages = [
  "Initializing Kernel...",
  "Loading System Modules...",
  "Starting Network Services...",
  "Checking Security Policies...",
  "Mounting Virtual File System...",
  "Loading Desktop Environment...",
  "Terminal WebOS Ready.",
];

export default function BootScreen() {
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line < bootMessages.length - 1) {
      const timer = setTimeout(() => {
        setLine((prev) => prev + 1);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [line]);

  return (
    <div className="boot-screen">
      <h2>Terminal WebOS v1.0</h2>

      <br />

      {bootMessages.slice(0, line + 1).map((message, index) => (
        <p key={index}>
          {">"} {message}
        </p>
      ))}
    </div>
  );
}
