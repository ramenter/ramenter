"use client";

import { useEffect, useState } from "react";

export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1800, 1);
      setN(Math.round(to * (1 - (1 - p) ** 3))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}
