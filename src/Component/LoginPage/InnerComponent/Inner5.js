import { IonContent } from '@ionic/react';
import React from 'react';
import styles from "../InnerCss/Inner5.module.css";

function Inner5(props) {

    const onclick = ()=>{
        props.history.push("/inner6")
    }

    return (
        <IonContent>

        <div className={styles.mainDiv}>
            <div className={styles.naver}>
                <h1>Smart Battery Finder</h1>
                <div className={styles.search}>
                    <input type="text"  placeholder="search" />
                    <input type="submit" />
                </div>
            </div>

            {/* card */}
            <div className={styles.card}>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                    <div id={styles.one}></div>
                    <div>Ford</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.two}></div>
                    <div>Skoda</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                <div className={styles.smCard}>
                <div id={styles.three}></div>
                    <div>Chevrolet</div>
                </div>
                
                
            </div>
            {/* button */}
            <div  onClick={onclick}  className={styles.btn}>
                <div className={styles.btnInner}>
                    <div>NEXT </div>
                    <div id={styles.nextIco}></div>
                </div>
            </div>
        </div>
        </IonContent>

    )
}

export default Inner5;
