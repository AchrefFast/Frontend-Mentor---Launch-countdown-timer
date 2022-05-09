import { useEffect, useState } from "react";
import classes from "./Segment.module.scss";


const Segment = ({ value, type }) => {
  const [toggleClass, setToggleClass] = useState(false);
  const [counter, setCounter] = useState(value);


  useEffect(() => {

    setToggleClass(true);
    setCounter(value);
    let timer = setTimeout(() => {
      setToggleClass(false);
    }, 900);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  var limit = 59;

  switch (type) {
    case 'seconds': limit = 59; break;
    case 'minutes': limit = 59; break;
    case 'hours': limit = 23; break;
    case 'days': limit = false; break;
    default: limit = 59;
  }


  const oldNumber = counter === limit ? 0 : counter + 1;
  const oldDigits = ("" + oldNumber).length === 1 ? "0" + oldNumber : oldNumber;
  const newDigits = ("" + counter).length === 1 ? "0" + counter : counter;

  // console.log(toggleClass);

  return (
    <div className={classes.segment}>
      <span
        className={`${classes.count} ${classes.top} ${toggleClass ? classes.flipTop : ""
          }`}
      >
        {oldDigits}
      </span>
      <span className={`${classes.count} ${classes.top}`}>{newDigits}</span>
      <span className={classes.middle}></span>
      <span className={`${classes.count} ${classes.bottom}`}>{oldDigits}</span>
      <span
        className={`${classes.count} ${classes.bottom} ${toggleClass ? classes.flipBottom : ""
          }`}
      >
        {newDigits}
      </span>
    </div>
  );
};

export default Segment;
