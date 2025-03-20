import React from "react";
import Home from './Home';
import Deneme from './Deneme';

export const FavouriteColorContext=React.createContext();
export const FavoriteSizeContext=React.createContext();

function App(){
     // eslint-disable-next-line
    const[
        favouriteColor,
        setFavouriteColor
    ]=React.useState('#1BDEF2');

     // eslint-disable-next-line
    const[
        size,
        setSize
    ]=React.useState(22);

    const value={
        favouriteColor,
        setFavouriteColor,
    }

    return(
        <main>
            <FavouriteColorContext.Provider value={value}>
                <Home />
            </FavouriteColorContext.Provider>
            <FavoriteSizeContext.Provider value={size}>
                <Deneme />
            </FavoriteSizeContext.Provider>
        </main>
    );
}

export default App;

/*Context oluşturuyoruz ve bu bir radyo yayını gibi çalışıyor. Yani 
ne demek bu braoadcast yayını yapıyor Provider sarmalı içindeki etiketlere
ve mesela burda Home sayfasına gidip bu radyo yayınını yakalayıp arka plan
olarak kullanacagız. Ve burdaki color degiştikçe bu sarmalın içindeki
bütün sayfalarda bu renk degişecek ve bunu ordan oraya parametre kullanarak
yapmayacagız. Ancak mesela aynı durum Deneme sayfası için gerçekleşmiyor
Çünkü sarmalın dışında tanımlanmış.Yani renk oraya taşınmıyor.

Oluştururken createContext ile çagırırken ilgili sayfada useContext ile
kullanıyoruz.*/