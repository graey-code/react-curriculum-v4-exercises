import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onAction={increment} />
    </div>
  );
}

// Parent needed to pass a function to the child: onAction={increment} so that the child could implement the
// function itself.
