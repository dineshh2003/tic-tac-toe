import React ,{useState, useEffect} from 'react'

const TimerComp = () => {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const TimerComp = setInterval(() => setTime(time+1), 1000);
        return function() {
            clearInterval(TimerComp);
        }
    }, [time]);
  return (
    <div>
        <h1>Timer</h1>
       <h4>the current time is {time}</h4>
    </div>
  )
}

export default TimerComp;

