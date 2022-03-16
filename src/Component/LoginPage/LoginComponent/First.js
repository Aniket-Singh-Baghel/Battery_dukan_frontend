import React, { useEffect, useRef, useState } from "react";
import styles from "../LoginCss/First.module.css";
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import Verification from '../InnerComponent/Verification'
import axios from '../../../Utils/AxiosConfig'
import { connect } from "react-redux";
import { loginUser } from '../../../Store/Actions'

function First(props) {
	console.log(props.auth);
	const initialformData = {
		contactNumber: "",
	  };
	  const initialError = {contactNumber: "",};
	
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
		alert.header = 'Something Went Wrong';
		alert.message = 'Please Enter Right Contact Number';
		alert.buttons = ['OK'];
	
		document.body.appendChild(alert);
		return alert.present();
	}

	function userNotFound() {
		const alert = document.createElement('ion-alert');
		alert.header = 'User Not Found';
		alert.message = 'Please Register First';
		alert.buttons = ['OK'];
	
		document.body.appendChild(alert);
		return alert.present();
	}

	useEffect(() => {
		
		inp.current.focus();
	}, []);

	

	
	
	  const onclickHandler = (e) => {
		e.preventDefault();
		if(formData.contactNumber.trim() === "" || formData.contactNumber.length < 10 || formData.contactNumber.length > 10){
			alert()
		} else {
            props.loginUser(formData);
	   };
	}

	if(props.auth.isAuthenticated === true){
		props.history.push('/otp');
	}

	

	  const inp = useRef();

	

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
							<h3>Please enter your Phone number to continue</h3>
							<div className={styles.inp}>
								<span></span>
								<input
									ref={inp}
									type="number"
									onChange={onFormChange} 
									name="contactNumber" 
									placeholder=" +91"
									maxLength={10}
								/>
							</div>
							<div className={styles.blue}>
								<a href="#">
								
									A 6 digit OTP will be sent via SMS to verify
									<br /> your mobile number!
								</a>
							</div>
							<div
								onClick={onclickHandler}
								className={styles.btn}
							>
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
	auth: state.auth
  });
  
  const mapDispatchToProps = {
	  loginUser: loginUser
  };

export default connect(mapStateToProps, mapDispatchToProps)(First);
