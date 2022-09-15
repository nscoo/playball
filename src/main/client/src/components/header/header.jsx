import React from "react";
import styles from './header.module.css'

const Header = () => {

    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}><img className={styles.logo__image} src='/images/logo.png'/></div>
            <ul className={styles.menu}>
                <li className={styles.menu__list}>모집</li>
                <li className={styles.menu__list}>리그</li>
                <li className={styles.menu__list}>팀</li>
                <li className={styles.menu__list}>선수</li>
            </ul>
            <div ><input className={styles.menu__input} placeholder='팀/리그/선수 검색' /></div>
        </nav>
        <hr />
        </>
    )

}
export default Header;