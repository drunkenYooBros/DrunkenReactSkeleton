import { useEffect, useRef, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  let interval: any
  let size = useRef(0)
  let size2 = 0

  useEffect(() => {
    console.log("============================ start")
    interval = setInterval(() => {
      console.log("execute interval", size.current++)
      console.log("execute interva2", size2++)
    }, 1000)
    return () => {
      clearInterval(interval)
      console.log("============================ end")
    }
  }, [count])

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
