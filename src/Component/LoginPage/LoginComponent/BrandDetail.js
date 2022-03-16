import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styles from "../LoginCss/BrandDetail.module.css";
import storeImage from "../../../Assets/lead-acid-batteries.jpg";
import { IonContent } from "@ionic/react";
import axios from 'axios'


function BrandDetail(props) {
  const [authstate, authSetstate] = useState(null)

  const goback =()=>{
    props.history.goBack();
  }

  const onCLickHandler =()=>{
    props.history.push('/inner2');
  }

  useEffect(() => {
		axios({
			method: "POST",
			url: " http://prod.v1.mydukan.org/mydukan-onboarding/mobile/login",
			headers: {
				"x-api-key":
					"eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTM2NTkwMzMsImV4cCI6MTU0NTE5NTAzMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IndlYiIsIlN1cm5hbWUiOiJXRUIiLCJFbWFpbCI6IndlYkBleGFtcGxlLmNvbSJ9",
			},
			data: { contactNumber: "9340372281" },
		}).then(data => {
			authSetstate(data.data.users[0].accessToken);
			// console.log(data.data.users[0].accessToken);
		});
	}, []);

	const instance = axios.create({
		baseURL: "https://prod.v1.mydukan.org:8443/generic-invoicing",
		headers: {
			Authorization: authstate,
		},
	});

	if (authstate) {
		console.log(authstate);
        instance({
            url:"/product",
            method:"GET",
        })
        .then(newData =>{
            console.log(newData);
        })
	}

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <div className={styles.abouts}>
        <div className={styles.detsysu}>
          <span onClick={goback} ></span>
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
                <h3>Company or Brand Details</h3>
                <div className={styles.accounts}>
              
                  <div className={styles.one}>
                    <h4>SELECT YOUR COMPANY</h4>
                    <select name="" className={styles.selection}>
                        <option value="Exide" defaultValue>EXIDE</option>
                        <option value="Amaron">AMARON</option>
                    </select>
                  </div>
                  <div className={styles.one}>
                    <h4>Role</h4>
                    <select name="" className={styles.selection}>
                        <option value="Exide" defaultValue>SALES MANAGER</option>
                        <option value="Amaron">REPRESENTATIVE</option>
                    </select>
                  </div>
                  <div className={styles.one}>
                    <h4>DESIGNATION</h4>
                    <input className={styles.inp} type="text" />
                  </div>
                  

                  {/* button */}
                  <div onClick={onCLickHandler} className={styles.btn}>
                    <div>NEXT</div>
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

export default withRouter(BrandDetail);
