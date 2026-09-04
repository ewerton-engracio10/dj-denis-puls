"use client";

import { useEffect } from "react";

export default function HeaderMobileEnhancer() {
  useEffect(() => {
    const button = document.querySelector(".topbar .btn.primary.small");
    if (!button) return;

    button.href = "https://wa.me/5551981650442";
    button.target = "_blank";
    button.rel = "noreferrer";
    button.setAttribute("aria-label", "WhatsApp do DJ Denis Puls");
    button.setAttribute("title", "WhatsApp do DJ Denis Puls");
  }, []);

  return null;
}
