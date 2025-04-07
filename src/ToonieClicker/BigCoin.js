import React from "react";

import VisuallyHidden from "./VisuallyHidden";
import styles from './BigCoin.module.css'

function BigCoin({handleClickCoin}){
    return(
        <div className={styles.coinwrapper}>
            <button
              className={styles.coin}
              onClick={handleClickCoin}
            >
                <VisuallyHidden>
                    Add 2 coins
                </VisuallyHidden>
                <img
                    alt=""
                    className={styles.coinImage}
                    src="https://sandpack-bundler.vercel.app/img/toonie.png" />
            </button>
        </div>
    )
}

export default BigCoin;