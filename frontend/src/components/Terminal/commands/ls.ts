export type LsResult = {
  handled: boolean;
  output: string[];
};

export function runLs(command: string): LsResult {
  const cmd = command.trim().toLowerCase();

  if (cmd !== "ls") {
    return {
      handled: false,
      output: [],
    };
  }

  return {
    handled: true,
    output: [
      "",
      "Available Modules",
      "----------------------------",
      "root",
      "zara",
      "dashboard",
      "settings",
      "",
    ],
  };
}
