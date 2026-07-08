export type TimerStep = {
  progress: number;
  message: string;
};

export function runSimulation(
  steps: TimerStep[],
  durationMs: number,
  onUpdate: (step: TimerStep) => void,
  onComplete: () => void
) {
  if (steps.length === 0) {
    onComplete();
    return;
  }

  const interval = durationMs / steps.length;
  let index = 0;

  const timer = setInterval(() => {
    onUpdate(steps[index]);
    index++;

    if (index >= steps.length) {
      clearInterval(timer);
      onComplete();
    }
  }, interval);

  return () => clearInterval(timer);
}
