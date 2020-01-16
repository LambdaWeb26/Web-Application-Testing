import React, { useState } from "react";
import Display from "./Display"
import {strikeClick, ballClick, foulClick} from "../utils/count"

const Dashboard = () => {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    
    const hitClick = () => {
        const reset = setBall(0) + setStrike(0);
        return reset
  
    };

    return(
        <div>
             <Display ball={ball} strike={strike} />
            <div>
                <button onClick={ () => {setStrike(strikeClick(strike))} }>Strike</button>
                <button onClick={ () => {setBall(ballClick(ball))} }>Ball</button>
                <button onClick={ () => {setStrike(foulClick(strike))} }>Foul</button>
                <button onClick={hitClick}>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;