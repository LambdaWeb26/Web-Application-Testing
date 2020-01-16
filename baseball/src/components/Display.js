import React from 'react';



function Display () {


    return(
        <div>
            <div className="strike">
                <h3 data-testid="strike">Strike</h3>
                <div>number of strikes</div>
            </div>
            <div className="ball">
                <h3 data-testid="ball">Ball</h3>
                <div>number of Balls</div>
            </div>        
        </div>
    )
}

export default Display