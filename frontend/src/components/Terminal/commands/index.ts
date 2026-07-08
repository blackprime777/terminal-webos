import { runRoot } from "./root";
import { runLs } from "./ls";

export type CommandResult = {
  handled: boolean;
  output: string[];
  root?: boolean;
};

export function executeCommand(command: string): CommandResult {
  const root = runRoot(command);

  if (root.handled) {
    return {
      handled: true,
      output: root.output,
      root: root.root,
    };
  }

  const ls = runLs(command);

  if (ls.handled) {
    return {
      handled: true,
      output: ls.output,
    };
  }

  return {
    handled: false,
    output: [
      `Unknown command: ${command}`,
      "Type 'ls' to view available commands.",
      "",
    ],
  };
}
