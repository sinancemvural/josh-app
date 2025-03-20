import React from "react";
import styles from './Slider.module.css'


/** props olarak ...delegation kullandık.Sebebi ise App içerisinden gelen 
 * parametre sayısını sınırlı tutmak yerine ve her birini tek tek props
 * olarak yazmak yerine bunu bir dizi olarak bu tarafa alıyoruz ve bunların
 * hepsini input etiketleri içerisinde gösteriyoruz.Örnegin App içerisnde 
 * buraya min max geliyor evet bunları tek tek de yazabiliriz ancak
 * programı degiştirip oraya bir de step özelliği eklersek bunun UI tarafında
 * bir karşışlıgı olmuyor çünkü burdaki input içerisnde onu tanımlamamıştık
 * Şimdi ise hangi propslar eklenirde hepsi ilgili alana otomatik olarak
 * ekleniyor.
*/
function Slider({label,...delegation})
{
    const id=React.useId;
    return(
        <div className={styles.wrapper}>
            <label 
                htmlFor={id}
                className={styles.label}
            >
                {label}
            </label>
            <input
            type="range"
            id={id}
            {...delegation} //<-----Props Delegation
            />
        </div>
    );
}

export default Slider;