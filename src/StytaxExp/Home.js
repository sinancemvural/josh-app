import React from "react";
import Sidebar from "./Sidebar";
import {FavoriteSizeContext} from "./App"
function Home(){

    const size=React.useContext(FavoriteSizeContext);
    return(
        <div className="home">
            <Sidebar />
            <main>
                <h1 style={{fontSize:size}}>This is a placeholder for a corporate slogan</h1>
                <p>This almost looks like a real website!</p>
            </main>
        </div>
    );
}

export  default Home;