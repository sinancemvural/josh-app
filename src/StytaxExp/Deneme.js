import React from "react";
import { FavouriteColorContext, FavoriteSizeContext } from "./App";

function Deneme(){
    const favoriteSize=React.useContext(FavoriteSizeContext);
    const favoriteColor=React.useContext(FavouriteColorContext);


    return(
        <aside style={{backgroundColor:favoriteColor}}>
            <h1 style={{fontSize:favoriteSize}}>Deneme Sayfası</h1>
        </aside>
    )
}

export default Deneme;