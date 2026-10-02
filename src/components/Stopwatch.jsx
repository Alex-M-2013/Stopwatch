import "../styles/Stopwatch.css";
import { useState, useRef, useEffect } from "react";

const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(time / (1000 * 60 * 60));

    const ms = String(milliseconds).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const h = String(hours).padStart(2, "0");

    return `${h}:${m}:${s}.${ms}`;
};

export const Stopwatch = () => {
    const intervalRef = useRef(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const start = () => {
        if (intervalRef.current !== null) return;

        clearInterval(intervalRef.current);

        const startTime = Date.now() - elapsedTime;

        intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTime);
        }, 10);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        stop();
        setElapsedTime(0);
    };

    return (
        <>
            <h1 id="timer">{formatTime(elapsedTime)}</h1>

            <div id="buttons-grid">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
};
