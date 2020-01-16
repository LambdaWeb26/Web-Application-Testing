import React, { useState } from "react";
import Display from "./Display"


const Dashboard = () => {
    const [strike, setStrike] = useState();
    const [ball, setBall] = useState();

    return(
        <div>
             <Display />
            <div>
                <button>Strike</button>
                <button>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;