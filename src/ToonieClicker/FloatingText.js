import React from "react";
import styles from './FloatingText.module.css';

function FloatingText({children}){
    return(
        <div key={children} className={styles.wrapper}>
            {children}
        </div>
    )
}

export default FloatingText;