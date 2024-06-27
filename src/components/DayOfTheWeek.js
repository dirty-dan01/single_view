import React from 'react'

const DayOfTheWeek = () => {
    const  time = new Date();
    const day = time.toLocaleString("en-us", {weekday: "long"});
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

    if (day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    }else if (day.toLowerCase() === "tuesday") {
        dayMessage = dayMessage = `Happy ${day}`;
    }else if (day.toLowerCase() === "wednesday") {
        dayMessage = dayMessage = `Happy ${day}`;
    }else if (day.toLowerCase() === "thursday") {
        dayMessage = dayMessage = `Happy ${day}`;
    }else if (day.toLowerCase() === "friday") {
        dayMessage = dayMessage = `Happy ${day}`;
    }else {
        dayMessage = "Stay cool it's the weekday"
    }
    
    return (
        <div>      
            <h1>{dayMessage}</h1>
            {morning? <h2>Breakfast time</h2>: ""}
        </div>
    )
}

export default DayOfTheWeek