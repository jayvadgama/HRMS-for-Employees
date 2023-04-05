import { useEffect, useState } from "react";

function Clock(props){
    const [currentDate,setCurrentDate]=useState(new Date());
    const name =""
    useEffect(()=>{
        const timerID=setInterval(()=>setCurrentDate(new Date()),1000)

        return () => clearInterval(timerID);
    },[props.continent])

    const continent=props.continent;
    const city=props.city;
    const tz=`${continent}/${city}`
    return (
        <div>
            <h1> In {continent}, {city.replace('_',' ')}</h1>
            <h1>It is {currentDate.toLocaleString('en-US',{timeZone: tz})}</h1>
        </div>
    )
}


export default Clock