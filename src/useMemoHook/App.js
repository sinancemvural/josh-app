import React from 'react';
import format from 'date-fns/format';

import useTime from './use-time';
/*Bu programda trigger efekti gören iki adet işlem var. Birisi 
kullanıcı her yeni sayı girdiginde asal sayıları bulan işlem 
bir digeri ise zamanı gösteren timer. Fakat kullanıcı yeni
sayı girişi yapmasa da her saniye herşeyi tekrar tekrar render eden
timer yüzünden çok fazla hafıza kullanılıyor ve asal sayı bulma fonksiyonu 
gereksiz yere çalışıyor. bunun önüne geçmek için useMemo Hook 
kullanılıyor ve allPrimes=React.useMemo() ile bu alan ve buna baglı
fonksiyonlar sadece kullanıcı sayı girişi yaptıgında çalıştırılıyor. 
Timer ın burayı tekrar tekrar tetiklemesi engelleniyor.
React.memo ile arasındaki fark ise memo bir componentin propsları 
degişmedikçe çalışmasını engellerken React.useMemo işlemin sonucunu 
aklında tutar ve sadece o degiştiginde yenileme yapar.

(CHAPTER 3 MEMOIZATION)

*/
function App(){
    const[selectedNum,setSelectedNum]=React.useState(100);
    const time=useTime();

    const allPrimes=React.useMemo(()=>{
        const result=[];

        for(let counter=2;counter<=selectedNum;counter++)
        {
            if(isPrime(counter))
            {
                result.push(counter);
            }
        }

        return result;
    },[selectedNum]);

    return(
        <>
            <p className='clock'>{format(time,'hh:mm:ss a')}</p>
            <form>
                <label htmlFor='num'>Your Number:</label>
                <input
                id='num'
                type='number'
                value={selectedNum}
                onChange={(event)=>{
                    let num = Math.min(100_000,Number(event.target.value));
                    setSelectedNum(num);
                }} 
                />
            </form>

            <p>
                There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
                {' '}
                <span className='prime-list'>
                    {allPrimes.join(',')}
                </span>
            </p>
        </>
    )

}

function isPrime(n){
    const max=Math.ceil(Math.sqrt(n));

    if(n===2)
    {
        return true;
    }

    for(let counter=2;counter<=max;counter++)
    {
        if(n % counter===0)
        {return false;}
    }

    return true;
}
export default App;