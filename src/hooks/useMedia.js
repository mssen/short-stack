// From https://usehooks.com/useMedia/
import { useEffect, useState } from 'react';

/**
 * Hook to get a column count based on the current window width.
 *
 * @param {number[]} queries media query breakpoints
 * @param {number[]} values column values
 * @param {number} defaultValue default column count
 */

export default function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
}
