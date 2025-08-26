import React from 'react'

function CounterButton({count, setCount}) {
  return (
    <button onClick={() => setCount(count + 1)}>
        Increment Count </button>
  )
}

export default CounterButton
{count, setCount}