// src/components/Twemoji.jsx
import { useEffect, useRef } from "react";
import twemoji from "twemoji";

/**
 * Renders child content with Twemoji SVG icons.
 */
export default function Twemoji({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      twemoji.parse(ref.current, {
        folder: "svg",
        ext: ".svg",
        className: "emoji", // Ensure emoji class for styling
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
      });
    }
  }, []);

  return <span ref={ref}>{children}</span>;
}
