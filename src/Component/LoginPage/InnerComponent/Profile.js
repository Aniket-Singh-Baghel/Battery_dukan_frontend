import React from 'react';
import { IonContent } from '@ionic/react';
import styles from "../../../Component/LoginPage/InnerCss/Profile.module.css";
import Circularimg from "../../../Assets/drawable-xxxhdpi/adult_business_bussinesman_32976.png";
import skoda from "../../../Assets/skoda.png";
import logo from "../../../Assets/drawable-xxxhdpi/my_dukan_white.png";
import cx from "classnames";
import { useSelector, useDispatch, connect } from "react-redux";


function Profile() {
    const user = useSelector(state => state.auth.users)
    console.log(user)
    return (
        <IonContent>
            <div className={styles.mainDiv}>
                <div className={cx(styles.div1, styles.flex)}>
                    <div>
                        <span className={styles.flex}>+</span>
                        <img src={Circularimg} alt="" />
                    </div>
                    <h3>{user.sub}</h3>

                    <h5>{user.userType} | Tech Batteries, Rourkela</h5>
                    <span className={styles.flex}><img src={skoda} alt="" /></span>
                    <h6>Gst Number : 1245loo5566</h6>
                    <img src={logo} alt="" />
                </div>
            </div>
        </IonContent>
    )
}

export default Profile;
