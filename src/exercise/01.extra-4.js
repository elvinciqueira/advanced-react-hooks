import * as React from 'react'

function App() {
  return <Counter />
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {...state, count: state.count + action.step}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [count, dispatch] = React.useReducer(countReducer, initialCount)
  const increment = () => dispatch({type: 'increment', step})
  return <button onClick={increment}>{count}</button>
}

export default App
