import React, { useLayoutEffect, useRef, useState } from 'react';

export const UseLayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    // Measure BEFORE browser paints
    const measuredWidth = divRef.current.offsetWidth;
    setWidth(measuredWidth);
    // User never sees the wrong size
  }, []);

  return <div ref={divRef}>Width: {width}px</div>;
}