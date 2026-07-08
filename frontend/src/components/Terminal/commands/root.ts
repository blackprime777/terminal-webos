export type RootResult = {
  handled: boolean;
  output: string[];
  root: boolean;
};

export function runRoot(command: string): RootResult {
  const cmd = command.trim().toLowerCase();

  if (cmd !== "root") {
    return {
      handled: false,
      output: [],
      root: false,
    };
  }

  return {
    handled: true,
    root: true,
    output: [
      "",
      "Initializing root environment...",
      "Authenticating...",
      "Loading secure modules...",
      "Granting privileges...",
      "",
      "ROOT SESSION ACTIVE",
      "",
    ],
  };
}
