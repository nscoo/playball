import React, {useState} from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Item from './item';
import Carousel from 'react-material-ui-carousel';
import styles from './home.module.css'
import Board from "./recruit/board";

const Home = () => {
    const items = [
        {
            name: '',
            description:
                '',
            src: '/images/carousel.png',
        },
        {
            name: '공지사항',
            description: 'PlayBall 서비스가 시작됩니다.',
            src: '/images/logo.png',
        },
    ];
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id || !password) {
            return alert('id와 password는 필수 입력 값입니다.');
        }
        //api 자리
    };

    const handleInputId = (e) => {
        setId(e.target.value);
    };

    const handleInputPw = (e) => {
        setPassword(e.target.value);
    };

    return(
        <>
            <Header />
            <body className={styles.content}>
                <section className={styles.content__top}>
                    <Carousel>
                        {items.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </Carousel>
                    <div className={styles.login}>
                        <form onSubmit={handleSubmit} className={styles.login__form}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <input
                                        className={styles.login__input}
                                        placeholder="아이디"
                                        name="id"
                                        type="id"
                                        onChange={handleInputId}
                                    />
                                </li>
                                <li className={styles.list}>
                                    <input
                                        className={styles.login__input}
                                        placeholder="비밀번호"
                                        name="password"
                                        type="password"
                                        onChange={handleInputPw}
                                    />
                                </li>
                                <li><p className={styles.join}>회원가입</p></li>
                            </ul>
                            <button className={styles.login__btn} type="submit">
                                    로그인
                            </button>
                        </form>
                    </div>
                    <Board />
                </section>
            </body>

            <Footer />
        </>
    )

}
export default Home;