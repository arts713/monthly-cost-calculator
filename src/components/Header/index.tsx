import * as React from 'react';
import styles from './index.module.css';
import ExchangeRate from './ui/ExchangeRates';
import Logo from './ui/Logo';
import User from './ui/User';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ExchangeRate />
      <User />
    </header>
  );
}

export default Header;

