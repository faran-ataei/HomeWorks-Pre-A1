import { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  return (
  <>

  <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
  <button onClick={() => setCount(0)} style={{marginLeft: '10px'}}>Reset</button><br />
  </>
);
}

export default Counter;