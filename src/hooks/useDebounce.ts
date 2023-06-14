import { useEffect, useState } from "react";
import { TValueTypes } from "../types/types";

export function useDebounce(value: TValueTypes, delay = 400): TValueTypes {
  const [debouncedValue, setDebouncedValue] = useState<TValueTypes>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
