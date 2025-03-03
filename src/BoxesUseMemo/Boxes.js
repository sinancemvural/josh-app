import React  from "react";

function Boxes({boxes}){
    return(
        <div className="boxes-wrapper">
            {
            boxes.map((boxStyle,index)=>(
                <div
                key={index}
                className="box"
                style={boxStyle} 
                />
            ))
            }
        </div>
    );
}

export default Boxes;