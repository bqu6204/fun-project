import { useState, useEffect } from "react";

function useDebounce<R>(
  callback: () => R,
  delayMs: number
): [R | null, boolean, () => void] {
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
  const [result, setResult] = useState<R | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  function refreshDelay() {
    if (!isPending) setIsPending(true);

    if (currentTimeout) clearTimeout(currentTimeout);
    const newTimeout = setTimeout(
      () => setShouldUpdate((prev) => !prev),
      delayMs
    );
    setCurrentTimeout(newTimeout);
  }

  useEffect(() => {
    if (!isPending) return;

    const result = callback();
    if (result) setResult(result);
    setIsPending(false);
  }, [shouldUpdate]);

  return [result, isPending, refreshDelay];
}

export { useDebounce };
