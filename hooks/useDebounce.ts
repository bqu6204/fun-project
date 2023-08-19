import { useState, useEffect } from "react";

function useDebounce<R>(
  callback: () => R,
  delayMs: number
): [R | null, () => void] {
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
  const [result, setResult] = useState<R | null>(null);
  const [istriggered, setIstriggered] = useState<boolean>(false);

  function refreshDelay() {
    if (!istriggered) setIstriggered(true);

    if (currentTimeout) clearTimeout(currentTimeout);
    const newTimeout = setTimeout(
      () => setShouldUpdate((prev) => !prev),
      delayMs
    );
    setCurrentTimeout(newTimeout);
  }

  useEffect(() => {
    if (!istriggered) return;

    const result = callback();
    setResult(result);
  }, [shouldUpdate]);

  return [result, refreshDelay];
}

export { useDebounce };
