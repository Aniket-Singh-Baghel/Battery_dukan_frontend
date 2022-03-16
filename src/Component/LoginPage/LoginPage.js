import { React, useEffect } from "react";
import styles from "./LoginPage.module.css";
import storeImage from "../../Assets/Image 1.png";
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import axios from "../../Utils/AxiosConfig2";

function LoginPage(props) {
  const newHandler = () => {
    props.history.push("/log2");
  };

  const goback = () => {
    props.history.goBack();
  };

  let rightComponent = <h1>loading...</h1>;
  if (props.match.url === "/log1") {
    rightComponent = (
      <div className={styles.card}>
        <h3>Choose an account</h3>
        <div className={styles.accounts}>
          {/* saved accounts */}
          <div className={styles.one}>
            <div className={styles.circle}></div>
            <div className={styles.dets}>
              <h5 className={styles.name}>Deepika Kumari</h5>
              <h6 className={styles.email}>deepika@somewhere.com</h6>
            </div>
          </div>
          <div className={styles.one}>
            <div className={styles.circle}></div>
            <div className={styles.dets}>
              <h5 className={styles.name}>Deepika Kumari</h5>
              <h6 className={styles.email}>deepika@somewhere.com</h6>
            </div>
          </div>
          <div className={styles.one}>
            <div className={styles.circle}></div>
            <div className={styles.dets}>
              <h5 className={styles.name}>Deepika Kumari</h5>
              <h6 className={styles.email}>deepika@somewhere.com</h6>
            </div>
          </div>
          {/* newlogin */}
          <div className={styles.one}>
            <div className={styles.circle} id={styles.userIcon}></div>
            <div className={styles.dets} id={styles.accountsDets}>
              Use Another Account
            </div>
          </div>
          <div className={styles.content}>
            To continue, Google will share your name, email address and profile
            picture with MyDukan
          </div>
          {/* button */}
          <div className={styles.btn} onClick={newHandler}>
            <div>NEXT </div>
            <div id={styles.nextIco}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <div className={styles.abouts}>
          <div className={styles.detsysu}>
            <span onClick={goback}></span>
            <h3>Account Login</h3>
          </div>
          <p>
            Select your prefered Google account to continue <br />
            with your Battery Dukan Account
          </p>
        </div>
        <div className={styles.child}>
          <div className={styles.left}>
            <img src={storeImage} alt="store" />
          </div>
          <div className={styles.right}>{rightComponent}</div>
        </div>
        <div className={styles.scroller}>
          <div className={styles.covered}></div>
        </div>
      </div>
    </IonContent>
  );
}

export default withRouter(LoginPage);
