export type ZaraStage =
  | "boot"
  | "wallet"
  | "address"
  | "payload"
  | "complete";

export type ZaraSession = {
  stage: ZaraStage;
  wallet: string | null;
  address: string | null;
  progress: number;
  running: boolean;
};

export type ZaraResult = {
  handled: boolean;
  output: string[];
  session?: ZaraSession;
};
