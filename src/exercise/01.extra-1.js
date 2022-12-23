import * as React from 'react'

function App() {
  return <Counter />
}

const countReducer = (count, change) => count + change

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(step)
  return <button onClick={increment}>{count}</button>
}

export default App
