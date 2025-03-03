import React from "react";
import MegaBoost from './MegaBoost';

/*useCallback kullanılmadıgında her click me butonu tıklandıgında MegaBoost
fonksiyonu da tekrar oluşturuluyor ve bu ramda yer kaplaması demek birden
fazla gereksiz fonksiyonun. Bunun yerine normalde React.useMemo da kullanılabilir
ancak bir neden useCallback tercih ettik?  

const handleMegaBoost = React.useMemo(() => {
  return function() {
    setCount((currentValue) => currentValue + 1234);
  }
}, []); 

Yukarıdaki React.useMemo çözümü ancak burda önemli bir nokta bu işlem 
fonksiyon döndürüyor. Fazladan bir fonksiyon dha oluşturmuş olduk.
Ancak useCallback sadece deger ile işlem yapıp onu işleme alıyor.Ekstradan
bir fonksiyon alanı kaplamasına gerek yok mbu program içerisnde.

İlk yöntem olan React.memo ise hem ana sayfadaki buton hemde 
MegaBoost fonksiyonu aynı degişken(count) ile işlem yaptıkları için
count her degiştiginde yani her seferinde gerek olmasada fonksiyonu 
hafızada tekrar tekrar oluşturuyor.
*/

function App(){
    const[count, setCount]=React.useState(0);

    const handleMegaBoost=React.useCallback(()=>{
        setCount((currentValue)=>currentValue+1234);
    },[])

    return(
        <>
            Count:{count}
            <button 
                onClick={()=>{
                    setCount(count+1)
                }}
            >

                Click Me!
            </button>

            <MegaBoost handleClick={handleMegaBoost} />
        </>
    )
}

export default App;