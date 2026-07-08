export const supportedWallets = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
  },
  {
    id: "xmr",
    name: "Monero",
    symbol: "XMR",
  },
];

export function isSupportedWallet(input: string): boolean {
  const value = input.trim().toLowerCase();

  return supportedWallets.some(
    (wallet) =>
      wallet.id === value ||
      wallet.name.toLowerCase() === value ||
      wallet.symbol.toLowerCase() === value
  );
}

export function getWalletName(input: string): string | null {
  const value = input.trim().toLowerCase();

  const wallet = supportedWallets.find(
    (wallet) =>
      wallet.id === value ||
      wallet.name.toLowerCase() === value ||
      wallet.symbol.toLowerCase() === value
  );

  return wallet ? wallet.name : null;
}
