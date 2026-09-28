import { useEffect, useState } from "react";

// Cycles through a list of words, sliding each one up into place.
export default function WordRotator({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block h-[1.3em] overflow-hidden align-bottom">
      <span
        key={words[index]}
        className="inline-block animate-word-in border-b-2 border-accent text-brand"
      >
        {words[index]}
      </span>
    </span>
  );
}
