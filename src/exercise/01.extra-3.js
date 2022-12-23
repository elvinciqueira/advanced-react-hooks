import * as React from 'react'

function App() {
  return <Counter />
}

const countReducer = (state, action) => ({
  ...state,
  ...(isFunction(action) ? action(state) : action),
})

const isFunction = value => typeof value === 'function'

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () =>
    setCount(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

export default App
