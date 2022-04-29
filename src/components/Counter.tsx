import { useEffect, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setCount(count + 1)
    // setTimeout(() => {
    //   // setCount(count + 1)
    //   setCount((c) => c + 1)
    // })
  }, [])

  const increase = () => {
    setCount(count + 2)
    setCount(count + 1)
    setCount((c) => c + 2)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h3>count : {count}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default Counter
