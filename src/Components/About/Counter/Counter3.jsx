import { useState, useEffect } from "react";
const Counter3 = () => {

    const [Counter, setCounter] = useState(1)
    useEffect(() => {
        if (Counter >= 3) return;
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        },200)

        return () => clearInterval(interval)
    }, [Counter])


    return (
        <div>
            <div className="text-40 lg:text-30 lh-13 fw-600">{Counter}M</div>
            <div className="text-14 lh-14 fw-bold mt-5">Happy customers</div>
        </div>
    )
}

export default Counter3
