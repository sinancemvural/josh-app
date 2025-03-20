import React from "react";
import {X as Close} from 'react-feather';//Iconlar için gerekli kütüphane
import FocusLock from 'react-focus-lock';//Modal açılınca ana odagın onda kalmasını saglayan kütüphane
import {RemoveScroll} from 'react-remove-scroll';//Arka planda kalan ekranın scroll özelliğini iptal eden kütüphane

import VisuallyHidden from "./VisuallyHidden";
import styles from './Modal.module.css';

function Modal({title,handleDismiss,children}){

    const closeBtnRef=React.useRef();

    React.useEffect(()=>{
        const currentlyFocusedElem=document.activeElement;
//Modal sayfasına geçmeden önce focus hangi element üzerindeyse onun bilgisini alır.
        closeBtnRef.current.focus();
//Modal üzerindeki Close butonuna focus yapar ve Space vb. tuşlar ile modal kapatılabilir
        return()=>{
            currentlyFocusedElem?.focus();
        }
//Modal kapandıktan sonra en ana sayfada en son nerde ise focus özelliği tekrar oraya döner.
    },[]);

    React.useEffect(()=>{
        function handleKeyDown(event){
            if(event.code === 'Escape'){
                handleDismiss();
            }
      }
//ESC tuşuna basınca çıış işlemi yapılmasını saglayn fonksiyon
        window.addEventListener("keydown",handleKeyDown);
//Sürekli basılan tuşları dinleyen bir Event Listener oluturduk ki ESC basılınca haberimiz olsun
        return()=>{
            window.removeEventListener("keydown",handleKeyDown);
        };
//Modal kapandıgında da bu ListeneR'ı sildik ki programı bpş yere mesgul etmesin.
    },[handleDismiss]);
    


    return(
        <FocusLock> 
            <RemoveScroll>
                <div className={styles.wrapper}>
                    <div className={styles.backdrop} onClick={handleDismiss}>
                        <div 
                            className={styles.dialog}
                            role="dialog"
                            aria-modal='true'
                            aria-label={title}
                        >
                            <button 
                                ref={closeBtnRef}
                                className={styles.closeBtn}
                                onClick={handleDismiss}>
                                    <Close />
                                    <VisuallyHidden>
                                        Dismiss Modal
                                    </VisuallyHidden>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            </RemoveScroll>
        </FocusLock>
    )
}

export default Modal;