import React, {useState} from 'react';



const Display = ({ball, strike}) => {
    

    return(
        <div>
            <div className="strike">
                <h3 data-testid="strike">Strike</h3>
                <div>{strike}</div>
            </div>
            <div className="ball">
                <h3 data-testid="ball">Ball</h3>
                <div>{ball}</div>
            </div>        
        </div>
    )
}

export default Display;