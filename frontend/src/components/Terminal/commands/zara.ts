import { ZaraResult } from "./types";
import { zaraLogs } from "./logs";
import { supportedWallets } from "./wallets";

export function runZara(command: string): ZaraResult {
  const cmd = command.trim().toLowerCase();

  if (cmd !== "zara") {
    return {
      handled: false,
      output: [],
    };
  }

  const walletList = supportedWallets.map(
    (wallet) => `• ${wallet.name} (${wallet.symbol})`
  );

  return {
    handled: true,
    output: [
      ...zaraLogs.boot,
      "Available Networks",
      "----------------------------",
      ...walletList,
      "",
      "Type a network name to continue.",
      "",
    ],
  };
}
