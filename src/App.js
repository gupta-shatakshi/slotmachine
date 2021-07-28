import {React, useState} from "react";
import Match from "./Match";
// import Count from "./Count";
const App = () => {
        let [state, setState] = useState(0);
        let [btnText, setBtnText] = useState("Start the Game");
        // let time;
        const Shuffle = () => {
                setState(prev => prev + 1);
                setBtnText("Shuffle again");
                console.log("state is increased");
                // time = new Date().getTime();
        
        }
      
        return(
                <>
                <div className="container">
                <h2 className="heading">Hello Player! Welcome to Slot Machine Game</h2>
                {state === 0 ?
                <div className="greetDiv"><h2 className="greet">Good Luck, Press The Button</h2></div> :  <Match /> }
                <div className="btnDiv">
                        <button className="btn" onClick={Shuffle}> {btnText} </button>
                </div>
                </div>
                </>
                )
}

export default App;