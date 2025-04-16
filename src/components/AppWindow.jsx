import React, { useState, useEffect, useRef } from "react";

export default function AppWindow({
  onMinimize,
  isMinimized,
  origin,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!ref.current) return;
    console.log("inside: ", origin)
    if (isMinimized) {
      setStyle({
        transform: `translate(${origin.x}px, ${origin.y}px) scale(0.2)`,
        opacity: 0,
      });
    } else {
      setStyle({
        transform: `translate(50vw, 50vh) translate(-50%, -50%) scale(1)`,
        opacity: 1,
      });
    }
  }, [isMinimized, origin]);

  return (
    <div
      ref={ref}
      className="absolute w-96 h-96 bg-slate-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      style={style}
    >
      <div className="bg-slate-600 rounded-t-lg flex items-center justify-center px-4 py-2 cursor-default">
        <div className="flex space-x-2 absolute left-4">
          <button
            className="bg-yellow-400 rounded-full w-3 h-3"
            onClick={onMinimize}
          />
          <button className="bg-green-500 rounded-full w-3 h-3" />
        </div>
        <span className="text-center text-sm font-medium text-gray-300">
          About Me
        </span>
      </div>

      <div className="p-4 text-white">
        <h1 className="text-xl font-bold">Your Name</h1>
        <p className="mt-2 text-sm text-gray-200">
          Retro-styled dev building cool experiences 🎮
        </p>
      </div>
    </div>
  );
}
