import { IonContent ,IonHeader } from '@ionic/react';
import React from 'react';
import styles from "../StockCss/SecondStock.module.css";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import search from "../../../../Assets/drawable-xxxhdpi/search_3.png";
import amaron from "../../../../Assets/drawable-xxxhdpi/amaron.png";
import arrow from "../../../../Assets/drawable-xxxhdpi/arrow.png";
import sf_sonic from "../../../../Assets/drawable-xxxhdpi/sf_sonic.png";
import exide from "../../../../Assets/drawable-xxxhdpi/exide.png";
import luminous from "../../../../Assets/drawable-xxxhdpi/luminous.png";
import tata_batteries from "../../../../Assets/drawable-xxxhdpi/tata_batteries.png";
import okaya from "../../../../Assets/drawable-xxxhdpi/okaya.png";

import cx from "classnames";



function SecondStock() {
    return (
        <IonContent>
        <div className={styles.mainDiv}>
            <IonHeader>
                <div className={styles.nav}>
                    <img src={leftarrow} alt="" />
                    <h6>My Stocks</h6>
                </div>
            </IonHeader>
            <div className={styles.card}>
                <div className={cx(styles.flex , styles.cardOne)}>
                    <span><img src={search} alt="" /></span>
                    <input type="text" placeholder="Search for brand" />
                </div>
                <div className={cx(styles.sections,styles.flex)}>
                    <h6>Inventory</h6>
                    <h6>Stocks &gt; 30 Days</h6>
                </div>
                {/* pallette starts here */}
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={amaron} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={sf_sonic} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={exide} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={luminous} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={tata_batteries} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={okaya} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={okaya} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
                    <div className={cx(styles.pallette,styles.flex)}>
                        <img src={okaya} alt="" />
                        <span className={styles.flex} >75 Batteries <img src={arrow} alt="" /></span>
                    </div>
            </div>
        </div>
        </IonContent>
    )
}

export default SecondStock;
