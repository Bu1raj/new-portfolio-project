import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function AppWindow({ isOpen, onClose, origin, dragRoot }) {
  const [constraints, setConstraints] = useState(null);
  const appWindowRef = useRef(null);

  useEffect(() => {
    if (isOpen && appWindowRef.current) {
      requestAnimationFrame(() => {
        const { width, height, x, y } =
          appWindowRef.current.getBoundingClientRect();
        console.log(width, height, x, y);
        setConstraints({
          top: -height - 20,
          left: -width - 20,
          right: window.innerWidth - x - width,
          bottom: window.innerHeight - y - height,
        });
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={appWindowRef}
          drag
          dragConstraints={constraints}
          dragElastic={0.0}
          dragMomentum={false}
          className="w-96 h-96 bg-slate-700 rounded-lg shadow-lg absolute"
          style={{
            top: origin.y,
            left: origin.x,
          }}
          initial={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0, top: 80, left: 80 }}
          exit={{
            opacity: 0,
            scale: 0.2,
            x: "-50%",
            y: "-50%",
            top: origin.y,
            left: origin.x,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-slate-600 rounded-t-lg flex items-center justify-center px-4 py-2">
            <div className="flex space-x-2 absolute left-4">
              <button
                className="bg-red-500 text-white rounded-full w-3 h-3"
                onClick={onClose}
              ></button>
              <button className="bg-yellow-500 text-white rounded-full w-3 h-3"></button>
              <button className="bg-green-500 text-white rounded-full w-3 h-3"></button>
            </div>
            <span className="text-center text-sm font-medium text-gray-300">
              About me
            </span>
          </div>
          <div className="p-4">
            <h1 className="text-xl font-bold">App Window</h1>
            <p className="mt-2">This is a sample app window.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
