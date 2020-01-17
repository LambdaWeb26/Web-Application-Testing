import React, { useState } from "react";
import Display from "./Display"
import {strikeClick, ballClick, foulClick, outClick, inningClick, homeRunsClick, awayRunsClick} from "../utils/count"

// export const resetBall= (ball) => {
//     return ball = 0
// }

// export const resetStrike = strike => {
//     return strike = 0
// }

const Dashboard = () => {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [out, setOut] = useState(0)
    const [inning, setInning] = useState(0)
    const [homeRuns, setHomeRuns] = useState(0)
    const [awayRuns, setAwayRuns] = useState(0)

    
    const hitClick = () => {
        const reset = setBall(0) + setStrike(0);
        return reset
  
    };

    return(
        <div>
            <h1 className="scoreboard">Baseball ScoreBoard</h1>
             <Display 
                ball={ball} 
                strike={strike} 
                out={out}
                inning = {inning}
                homeRuns ={homeRuns}
                awayRuns = {awayRuns} />
            <div>
                <button onClick={ () => {setStrike(strikeClick(strike))} }>Strike</button>
                <button onClick={ () => {setBall(ballClick(ball))} }>Ball</button>
                <button onClick={ () => {setStrike(foulClick(strike))} }>Foul</button>
                <button onClick={hitClick} >Hit</button>
                <button onClick={ () => {setOut(outClick(out))}} >Out</button>
                <button onClick={ () => {setInning(inningClick(inning))}} >Inning</button>
                <button onClick={ () => {setHomeRuns(homeRunsClick(homeRuns))}} >Home Runs</button>
                <button onClick={ () => {setAwayRuns(awayRunsClick(awayRuns))}} >Away Runs</button>

                
            </div>
        </div>
    )
}

export default Dashboard;