import React from 'react';
import { Wrapper } from '../styledComponents/StyledDisplay';


const Display = ({ball, strike, out, homeRuns, awayRuns,inning}) => {
    

    return(
        <>  
            <Wrapper className="teams">
                <div className="home">
                    
                    <div className="runs">
                        <h3 data-testid="runs">Home</h3>
                        <div className="number">{homeRuns}</div>
                    </div>
                </div>
                <div className="inning">
                    <div className="runs">
                        <h3 data-testid="strike">Inning</h3>
                        <div className="number">{inning}</div>
                    </div>
                        
                </div>
                <div className="away">
                
                    <div className="runs">
                        <h3 data-testid="runs">Away</h3>
                        <div className="number">{awayRuns}</div>
                    </div>
                </div>
            </Wrapper>

        <Wrapper>
            <div className="strike">
                <div className="runs">
                    <h3 data-testid="strike">Strike</h3>
                    <div className="number">{strike}</div>
                </div>
              
            </div>
            <div className="ball">
                <div className="runs">
                    <h3 data-testid="ball">Ball</h3>
                    <div className="number">{ball}</div>
                </div>
            </div>
            <div className="out">
                <div className="runs">
                    <h3 data-testid="out">Out</h3>
                    <div className="number">{out}</div>
                </div>
            </div>                
        </Wrapper>
    </>
    )
}

export default Display;