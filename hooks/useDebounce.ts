import { useState, useEffect } from "react";

function useDebounce<R>(
  callback: () => R | Promise<R>,
  delayMs: number
): [R | null, boolean, () => void, unknown] {
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
  const [result, setResult] = useState<R | null>(null);
  const [error, setError] = useState<unknown>(null);
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
    if (callback.constructor.name === "AsyncFunction") {
      (callback() as Promise<R>)
        .then((data) => setResult(data))
        .catch((error) => setError(error))
        .finally(() => setIsPending(false));
    } else {
      const result = callback();
      if (result) setResult(result as R);
      setIsPending(false);
    }
  }, [shouldUpdate]);

  return [result, isPending, refreshDelay, error];
}

export { useDebounce };
