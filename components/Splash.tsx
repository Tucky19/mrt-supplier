import { useEffect, useState } from "react";

export default function Splash() {
  const fullText = "Welcome to MRT Supplier";
  const [shown, setShown] = useState(true);
  const [typed, setTyped] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!doneTyping) return;
    const t = setTimeout(() => setShown(false), 3000);
    return () => clearTimeout(t);
  }, [doneTyping]);

  const [removed, setRemoved] = useState(false);
  useEffect(() => {
    if (!shown) {
      const t = setTimeout(() => setRemoved(true), 600);
      return () => clearTimeout(t);
    }
  }, [shown]);

  if (removed) return null;

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-opacity duration-500 ${shown ? "opacity-100" : "opacity-0"}`}>
      <div className="text-center px-6">
        <div className="text-4xl font-extrabold tracking-wider">
          <span className="text-[var(--brand)]">MRT</span>
        </div>
        <div className="mt-3 text-lg md:text-2xl font-medium text-gray-800 type-caret">{typed}</div>
      </div>
    </div>
  );
}
