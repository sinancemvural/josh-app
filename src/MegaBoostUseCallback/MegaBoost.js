import React from "react";

function MegaBoost({handleClick}){
    console.log('Render MesagBoost');

    return(
        <button 
            className="mega-boost-button"
            onClick={handleClick}
        >
            MEGA BOOST!
        </button>
    )
}

export default  React.memo(MegaBoost);