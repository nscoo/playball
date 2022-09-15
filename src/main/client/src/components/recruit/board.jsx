import React from "react";
import styles from "./board.module.css";

const Board = () => {
    return(
        <section className={styles.tables}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.title}>번호</th>
                    <th className={styles.title}>제목</th>
                    <th className={styles.title}>작성자</th>
                    <th className={styles.title}>작성일시</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                {/*{posts &&*/}
                {/*    posts*/}
                {/*        .filter((post) => post.deleted !== 'Y')*/}
                {/*        .map(*/}
                {/*            (post, i) =>*/}
                {/*                post.deleted === 'N' && (*/}
                {/*                    <Post key={post.post_no} post={{ post, i, page }} />*/}
                {/*                )*/}
                {/*        )}*/}
                </tbody>
            </table>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.title}>번호</th>
                    <th className={styles.title}>제목</th>
                    <th className={styles.title}>작성자</th>
                    <th className={styles.title}>작성일시</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        노상초리 넘 귀여보요
                    </td>
                    <td>이뚜띤</td>
                    <td>2022-09-14</td>
                </tr>
                {/*{posts &&*/}
                {/*    posts*/}
                {/*        .filter((post) => post.deleted !== 'Y')*/}
                {/*        .map(*/}
                {/*            (post, i) =>*/}
                {/*                post.deleted === 'N' && (*/}
                {/*                    <Post key={post.post_no} post={{ post, i, page }} />*/}
                {/*                )*/}
                {/*        )}*/}
                </tbody>
            </table>
        </section>
    )

}

export default Board;