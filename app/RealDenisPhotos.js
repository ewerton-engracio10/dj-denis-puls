"use client";

import { useEffect, useState } from "react";

const files = [
  "/assets/denis-gallery-01.jpg.b64",
  "/assets/denis-gallery-02.jpg.b64",
  "/assets/denis-gallery-03.jpg.b64",
];

export default function RealDenisPhoto({ index, className = "photoSlot photoFilled", ariaLabel }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let active = true;
    fetch(files[index])
      .then((r) => r.text())
      .then((b64) => {
        if (active) setSrc(`data:image/jpeg;base64,${b64.trim()}`);
      });
    return () => { active = false; };
  }, [index]);

  return (
    <div
      className={className}
      role="img"
      aria-label={ariaLabel}
      style={src ? {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } : undefined}
    />
  );
}
