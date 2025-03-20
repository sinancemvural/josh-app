import React from "react";
import { FavouriteColorContext } from "./App";

function Sidebar(){
   
    const id=React.useId();
    const {
        favouriteColor,
        setFavouriteColor
    }=React.useContext(FavouriteColorContext);


    return(

        <aside style={{backgroundColor:favouriteColor}}>
            <a href='/'>Logo Here</a>
            <nav>
                <ol>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Gallery</a>
                    </li>
                    <li>
                        <a href="/">Other Stuff</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ol>
            </nav>

            <label htmlFor={id}>
                Select Color:
            </label>
            <input 
                id={id}
                type="color"
                value={favouriteColor}
                onChange={(event)=>
                    {setFavouriteColor(event.target.value);}
                }
            />
        </aside>
    );
}

export default Sidebar;