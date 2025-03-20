import React from "react";
import Slider from './Slider';


function App(){
    const[volume,setVolume]=React.useState();

    return(
        <main>
            <Slider 
                label="Volume"
                min={0}
                max={100}
                value={volume}
                onChange={(event)=>{setVolume(event.target.event)}}
            />
        </main>
    );
}

export default App;