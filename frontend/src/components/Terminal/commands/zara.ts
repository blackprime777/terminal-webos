export type ZaraResult = {
  handled: boolean;
  output: string[];
};

export function runZara(command: string): ZaraResult {
  const cmd = command.trim().toLowerCase();

  if (cmd !== "zara") {
    return {
      handled: false,
      output: [],
    };
  }

  return {
    handled: true,
    output: [
      "",
      "ZARA MODULE",
      "----------------------------",
      "Simulation Mode",
      "",
      "Step 1: Select wallet type",
      "Supported:",
      " • MetaMask",
      " • Trust Wallet",
      " • Coinbase Wallet",
      " • Phantom",
      "",
      "Enter wallet type to continue...",
      "",
    ],
  };
}
