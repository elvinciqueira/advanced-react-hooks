import * as React from 'react'

function App() {
  return <Counter />
}

const countReducer = (state, newState) => ({...state, ...newState})

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => setCount({count: count + step})
  return <button onClick={increment}>{count}</button>
}

export default App
