import { useState } from 'react';
import './App.css';
import { Num } from '@new-mono/pkg1';
import React from 'react';

export function App() {
  const [count, setCount] = useState(0)
  console.log(new Num(5).add(new Num(6)).val() === 11)
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
