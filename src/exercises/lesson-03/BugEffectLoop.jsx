//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count);
  }, [count]);

  return <p>Bug 1 Count: {count + 1}</p>;
}

// Explanation:
// setCount function was set inside the useEffect so the count could cascade endlessly, added count to the dependency array and the + 1 to the return.
