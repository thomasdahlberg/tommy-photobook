import React from 'react';
import styles from '../styles/header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.container}>
            <h1>Photobook</h1>
            <nav className={styles.nav}>
                <button>{'<'}</button>
                <button>{'>'}</button>
            </nav>
        </header>
    )
}

export default Header;