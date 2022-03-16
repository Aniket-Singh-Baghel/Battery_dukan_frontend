import React from "react";
import { withRouter } from "react-router";
import styles from "../LoginCss/BussinessType.module.css";
import storeImage from "../../../Assets/Image 1.png";
import { IonContent } from "@ionic/react";


function BussinessType(props) {


  const onclickHandler =()=>{
    props.history.push("/log3")
  }

  const goback =()=>{
    props.history.goBack();
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
          
            <div className={styles.right}>
              <div className={styles.card}>
                <h3>Select Business Type</h3>
                <div className={styles.accounts}>
                  {/* saved accounts */}
                  <div className={styles.one}>
                    <div>
                      <form>
                        <input
                          type="checkbox"
                          id="fruit4"
                          name="fruit-4"
                          value="Strawberry"
                        ></input>
                        <label htmlFor="fruit4"></label>
                      </form>
                    </div>
                    <div className={styles.dets}>
                      <h5 className={styles.name}>Garage Owner</h5>
                    </div>
                  </div>
                  {/* two */}
                  <div className={styles.one}>
                    <div>
                      <form>
                        <input
                          type="checkbox"
                          id="fruit"
                          name="fruit"
                          value="Strawberry"
                        ></input>
                        <label htmlFor="fruit"></label>
                      </form>
                    </div>
                    <div className={styles.dets}>
                      <h5 className={styles.name}>Retailer</h5>
                    </div>
                  </div>
                  <div className={styles.one}>
                    <div>
                      <form>
                        <input
                          type="checkbox"
                          id="frui-34"
                          name="fruit--3"
                          value="Strawberry"
                        ></input>
                        <label htmlFor="frui-34"></label>
                      </form>
                    </div>
                    <div className={styles.dets}>
                      <h5 className={styles.name}>Distributor</h5>
                    </div>
                  </div>
                  <div className={styles.one}>
                    <div>
                      <form>
                        <input
                          type="checkbox"
                          id="fruit3"
                          name="fruit3"
                          value="Strawberry"
                        ></input>
                        <label htmlFor="fruit3"></label>
                      </form>
                    </div>
                    <div className={styles.dets}>
                      <h5 className={styles.name}>Company Representative</h5>
                    </div>
                  </div>

                  {/* button */}
                  <div onClick={onclickHandler} className={styles.btn}>
                    <button> NEXT </button>
                    <div id={styles.nextIco}></div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        <div className={styles.scroller}>
          <div className={styles.covered}></div>
        </div>
      </div>
    </IonContent>
  );
}

export default withRouter(BussinessType);
