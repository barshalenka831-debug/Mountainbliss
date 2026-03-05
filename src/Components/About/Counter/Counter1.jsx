import React from 'react'
import { useState, useEffect } from 'react'
const Counter1 = () => {
    const [Counter, setCounter] = useState(0);
    useEffect(() => {
        if (Counter >= 4958) return;
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, )
        return () => clearInterval(interval)
    }, [Counter])

    return (
        <div>
            <div className="text-40 lg:text-30 lh-13 fw-600">{Counter}+</div>
            <div className="text-14 lh-14 fw-bold mt-5">Destinations</div>

        </div>
    )
}

export default Counter1
