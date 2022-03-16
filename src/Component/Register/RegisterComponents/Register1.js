import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import styles from "../RegisterCss/Register1.module.css";
import { registerUser } from "../../../Store/Actions";
import axios from "../../../Utils/AxiosConfig";

function Register1(props) {
  const initialformData = {
    name: "",
    contactNumber: "",
    email: "",
  };
  const initialError = { name: "", contactNumber: "", email: ""};

  const [formData, setformData] = useState(initialformData);
  const [error, setError] = useState(initialError);

  const onFormChange = (e) => {
    e.persist();
    setformData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  function alert() {
		const alert = document.createElement('ion-alert');
		alert.header = 'Somthing Went Wrong';
		alert.message = 'No input field must empty!';
		alert.buttons = ['OK'];
	
		document.body.appendChild(alert);
		return alert.present();
	}

  const onRegister = (e) => {
    e.preventDefault();
    if(
      formData.name.trim() === "" ||
      formData.contactNumber.trim() === "" ||
      formData.email.trim() === ""
    ){
			alert()
		} else {
      props.registerUser(formData);
    }
  };

  console.log(props)
  if(props.register.isAuthenticated == true) {
		props.history.push('/inner1')
	}

  console.log(formData);

  return (
    <IonContent>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.abouts}>
            <nav>
              <div>WELCOME TO BATTERY DUKAN</div>
              <div className={styles.logo2}>
                <div></div>
              </div>
              <div>
                <select name="" id="">
                  <option value="" defaultValue>
                    English
                  </option>
                  <option value="">Hindi</option>
                </select>
              </div>
            </nav>
            <div className={styles.logo}>
              <div></div>
            </div>
            <div className={styles.holder}>
              <div className={styles.card}>
                <h3>Please enter your Details</h3>
                <div className={styles.inp}>
                  <input
                    onChange={onFormChange}
                    name="name"
                    type="text"
                    placeholder=" Name"
                  />
                  <br />
                  <input
                    onChange={onFormChange}
                    name="contactNumber"
                    type="number"
                    placeholder=" contact"
                  />
                  <br />
                  <input
                    onChange={onFormChange}
                    name="email"
                    type="text"
                    placeholder=" Email"
                  />
                </div>
                <div className={styles.blue}>
                  <a href="/">Already have an account? login</a>
                </div>
                <div onClick={onRegister} className={styles.btn}>
                  <div>NEXT</div>
                  <div id={styles.nextIco}></div>
                </div>
              </div>
            </div>
            <div className={styles.dets}>
              <div>
                By Continuing, you agree to <a>T&Cs</a>
              </div>
              <div className={styles.whtsapp}></div>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
}

const mapStateToProps = (state) => ({
  register: state.register,
});

const mapDispatchToProps = {
  registerUser: registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register1);
