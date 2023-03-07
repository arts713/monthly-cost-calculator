import * as React from "react";

import styles from "./index.module.scss";

const ExchangeRate = () => {
    return (
        <div className={styles.exchangeRates}>
            <ul className={styles.exchangeRates__list}>
                <li className={styles.exchangeRates__item}>
                    USD<span>37</span>
                </li>
                <li className={styles.exchangeRates__item}>
                    CHF<span>41</span>
                </li>
            </ul>
        </div>
    );
};

export default ExchangeRate;
