import React, { useState } from "react";
// import NewArr from "./DataArray";

let Match = () => {
    const array = [
        //      "🎀", "🎂", "🎶"
        {img: "https://www.seekpng.com/png/full/417-4178774_casino-dice-red-casino-marketing-photograph.png"},
        {img: "https://image.flaticon.com/icons/png/512/321/321641.png"},
        {img: "https://icon-library.com/images/casino-icon/casino-icon-3.jpg"},
    ];
    const len = array.length;
    let Data = [array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)]];
    // const [Data, setData] = useState([array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)]]);
    // let [count, setCount] = useState(0);
    let timerId;
    let count = 0;
    let newArr;
    setTimeout(
    timerId = setInterval(function()
    {
        count++;
    //    setCount((prevValue) => prevValue + 1);
        console.log("Hello " + count);
        newArr = [array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)]];
        console.log(newArr);
        // setData((prev) => prev = [array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)], array[Math.floor(Math.random()*len)]]);
        if(count === 10){
        clearInterval(timerId);
        }
    },200
    ), 2000);
    
    if(Data[0].img === Data[1].img && Data[1].img === Data[2].img)
    {
        return(
                <>
                <span>
                <img src = {Data[0].img} alt="First"></img>
                <img src = {Data[1].img} alt="Second"></img>
                <img src = {Data[2].img} alt="Third"></img>
                </span>
                <h2 className="resultWin">It is matching, You won! 😁</h2>
                <h2 className="resultWin">Congratulations</h2>
                </>
                )         
     }else{
        return(
                <>
                <span>
                <img src = {Data[0].img} alt="First"></img>
                <img src = {Data[1].img} alt="Second"></img>
                <img src = {Data[2].img} alt="Third"></img>
                </span>
                <h2 className="resultLoose">It is not matching, You lose! 😞 </h2>,
                <h2 className="resultLoose">Better Luck Next Time</h2>
                </>
                )
            }
}

export default Match;