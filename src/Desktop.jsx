import { useState, useRef } from "react";
import AppWindow from "./components/AppWindow";

function Desktop() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const openWindow = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setOrigin({
      x: rect.left,
      y: rect.top,
    });
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="w-screen h-screen bg-cover bg-blossom bg-center relative overflow-hidden">
      <button
        ref={buttonRef}
        onClick={openWindow}
        className="absolute top-[400px] left-[400px] bg-slate-700 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Open "About Me"
      </button>
      <AppWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        origin={origin}
        dragRoot={containerRef}
      />
    </div>
  );
}

export default Desktop;
