import { useState, useRef, useEffect } from "react";

export default function useOverflowed() {
  const [overflowed, setOverflowed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { scrollWidth, clientWidth } = ref.current;
      setOverflowed(scrollWidth > clientWidth);
    }
  }, []);

  return [ref, overflowed] as const;
}
