import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(NaN);
  useEffect(() => {
    const handleWindowWidth = () => setWindowWidth(window.innerWidth);
    handleWindowWidth();

    window.addEventListener("resize", handleWindowWidth);
    return () => window.removeEventListener("resize", handleWindowWidth);
  }, []);

  return [windowWidth];
}

export { useWindowWidth };
