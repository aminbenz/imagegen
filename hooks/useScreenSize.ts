import { useState, useEffect } from "react";

export default function useScreenSize(): boolean {
  const [isGreaterThanHD, setIsGreaterThanHD] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsGreaterThanHD(innerWidth >= 1600);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Check on first render
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isGreaterThanHD;
}
