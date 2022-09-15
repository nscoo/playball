import React from "react";
import styles from './footer.module.css'

const Footer = () => {

    return(
            <footer>
                <p className={styles.title}>
                    서울 영등포구 버드나루로 12길 8 &nbsp; 대표번호 : 010 - 3921 - 1681 &nbsp;&nbsp;&nbsp;&nbsp; Copyright ⓒPlayBall All rights
                    reserved
                </p>
            </footer>
    )

}
export default Footer;