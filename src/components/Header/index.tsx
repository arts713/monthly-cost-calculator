import * as React from "react";
import styles from "./index.module.scss";
import ExchangeRates from "./ui/ExchangeRates";
import Logo from "./ui/Logo";
import User from "./ui/User";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <ExchangeRates />
            <User />
        </header>
    );
};

export default Header;
