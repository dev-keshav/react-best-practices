import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // handleTime();
        return () => clearInterval(id.current);
    }, []);

    let id = useRef();

    function handleTime(){
        id.current = setInterval(() => {
            setTime((prev) => prev+1);
            console.log(time);
        }, 1000)
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={() => handleTime()}>Start</button>
            <button onClick={() => clearInterval(id.current)}>Stop</button>
            <button onClick={() => {
                clearInterval(id.current)
                setTime(0)
            }}>Restart</button>
        </div>
    )
}

export default StopWatch;