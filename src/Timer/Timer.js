import Segment from "./Segment";
import classes from "./Timer.module.scss";
import { useState, useEffect } from "react";
// const PLANNED_DATE = new Date("2022-05-30").getTime();
const PLANNED_DATE = 773790000 + new Date().getTime();

const Timer = (props) => {
    const [counter, setCounter] = useState(
        new Date(PLANNED_DATE - new Date().getTime())
    );

    useEffect(() => {
        let timer = setTimeout(() => {
            setCounter(new Date(PLANNED_DATE - new Date().getTime()));
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [counter]);

    const seconds = counter.getSeconds();
    const minutes = counter.getMinutes();
    const hours = counter.getHours();
    const days = Math.ceil(
        (counter.getTime() - (hours * 3600 + minutes * 60 + seconds) * 1000) /
        86400000
    );

    return (
        <div className={classes.timer}>
            <div className={classes.segment}>
                <Segment value={days} type='days' />
                <p>Days</p>
            </div>
            <div className={classes.segment}>
                <Segment value={hours} type='hours' />
                <p>Hours</p>
            </div>
            <div className={classes.segment}>
                <Segment value={minutes} type='minutes' />
                <p>Minutes</p>
            </div>
            <div className={classes.segment}>
                <Segment value={seconds} type='seconds' />
                <p>Seconds</p>
            </div>
        </div>
    );
};

export default Timer;
