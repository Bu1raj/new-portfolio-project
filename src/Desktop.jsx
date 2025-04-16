import { useState, useRef } from "react";
import AppWindow from "./components/AppWindow";

function Desktop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [origin, setOrigin] = useState(null);

  const buttonRef = useRef(null);

  const openWindow = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setOrigin({ x: rect.left, y: rect.top });
    setTimeout(() => {
      setIsVisible(true);          
      setTimeout(() => {
        setIsMinimized(false); 
      }, 10);
    }, 0);
  };

  const minimizeWindow = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setOrigin({ x: rect.left, y: rect.top });
    setIsMinimized(true);
  };

  return (
    <div className="h-screen w-screen bg-blossom bg-cover bg-no-repeat relative overflow-hidden">
      <button
        ref={buttonRef}
        onClick={openWindow}
        className="absolute top-[600px] left-[400px] px-4 py-2 bg-slate-600 rounded"
      >
        Open About Me
      </button>
      {isVisible && (
        <AppWindow
          onMinimize={minimizeWindow}
          isMinimized={isMinimized}
          origin={origin}
        />
      )}
    </div>
  );
}

export default Desktop;
