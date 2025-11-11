import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    // Hilangkan kursor bawaan
    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
      a, button, [role="button"], input, textarea { cursor: none !important; }
    `;
    document.head.appendChild(style);

    // Elemen kursor
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.top = "0";
    cursor.style.left = "0";
    cursor.style.width = "24px";
    cursor.style.height = "24px";
    cursor.style.background = "url('/cursor.png') no-repeat center / contain";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.willChange = "transform";
    cursor.style.transition = "transform 0.02s linear";
    cursor.style.boxShadow = "0 0 3px rgba(255, 215, 0, 0.4)"; // bayangan ringan
    document.body.appendChild(cursor);

    // Posisi awal
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    // Update posisi ultra cepat (GPU)
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    // Klik kecil
    const click = () => {
      cursor.animate(
        [
          { transform: `translate3d(${x}px, ${y}px, 0) scale(1)` },
          { transform: `translate3d(${x}px, ${y}px, 0) scale(0.8)` },
          { transform: `translate3d(${x}px, ${y}px, 0) scale(1)` },
        ],
        { duration: 120, easing: "ease-out" }
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("click", click, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
      cursor.remove();
      style.remove();
    };
  }, []);

  return null;
}
