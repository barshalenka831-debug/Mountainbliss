import { useState, useEffect } from 'react'
const RatingCounter = () => {
    const [Counter, setCounter] = useState(0);
    useEffect(() => {
        if (Counter >= 13) return;
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        },500)
        return () => clearInterval(interval)
    }, [Counter])


    return (
      
            <div className="col-sm-5 col-6">
                <div className="text-30 lh-15 fw-600"> {Counter}m+</div>
                <div className="text-light-1 lh-15">Happy People <em/>
                    <i className="fa-solid fa-face-smile"></i>
                </div>
            </div>
     
    )
}

export default RatingCounter
