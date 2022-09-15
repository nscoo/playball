import React from 'react';
import styles from './home.module.css';

const Item = (props) => {
    return (
        <section className={styles.carousel}>
      <span className={styles.carousel__right}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </span>
            <span className={styles.carousel__left}>
        <img src={props.item.src} alt="logo" style={{ height: '10em' }}></img>
      </span>
        </section>
    );
};

export default Item;
