import React, { useMemo } from 'react';

export const UseMemoExample = ({ a, b }) => {
  console.log('Component rendering...');
  
  const result = useMemo(() => {
    console.log('Calculating... (expensive!)');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) { // Heavy computation!
      sum += a * b;
    }
    return sum;
  }, [a, b]); // Only recalculates if a or b changes
  
  return <div>Result: {result}</div>;
}