import React, { useEffect, useRef, useState } from "react";
import { IonContent } from "@ionic/react";
import { connect } from "react-redux";
import styles from "../InnerCss/Otp.module.css";
import { userOtp } from '../../../Store/Actions'

function Otp(props) {
    const initialformData = {
		otp: "",
	  };
	  const initialError = {otp: "",};
	
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
		alert.header = 'Wrong OTP Number';
		alert.message = 'Please Check OTP';
		alert.buttons = ['OK'];
	
		document.body.appendChild(alert);
		return alert.present();
	}

	useEffect(() => {
		
		inp.current.focus();
	}, []);
	
	  const onclickHandler = (e) => {
		e.preventDefault();
		props.userOtp(formData);
	  };

	  if(props.Otp.otpVerifide === true){
		props.history.push('/inner1')
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
							<h3>Please enter Six Digit OTP</h3>
							<div className={styles.inp}>
								<input
									ref={inp}
									type="number"
									onChange={onFormChange} 
									name="otp" 
									placeholder="OTP"
                                    min={6}
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

  )
}

const mapStateToProps = (state) => ({
	Otp: state.Otp
  });
  
  const mapDispatchToProps = {
	userOtp,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Otp)