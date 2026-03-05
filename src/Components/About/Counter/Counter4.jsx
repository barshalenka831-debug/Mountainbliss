import { useState, useEffect } from "react"

const Counter4 = () => {
  const [counter, setCounter] = useState(0)
  const target = 574974
  const duration = 2000 // total animation time (2 seconds)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16) // smooth animation
    const interval = setInterval(() => {
      start += increment

      if (start >= target) {
        setCounter(target)
        clearInterval(interval)
      } else {
        setCounter(Math.floor(start))
      }
    }, 16) // 60fps

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="text-40 lg:text-30 lh-13 fw-600">
        {counter.toLocaleString()}
      </div>
      <div className="text-14 lh-14 fw-bold mt-5">
        Our Volunteers
      </div>
    </div>
  )
}

export default Counter4 