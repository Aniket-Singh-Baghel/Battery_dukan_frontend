import React, { useEffect, useState, useRef } from "react";
import styles from "../InnerCss/Verification.module.css";
import resend from "../../../Assets/drawable-xxxhdpi/reload.png";
import axios from "../../../Utils/AxiosConfig2";
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import { connect } from "react-redux";
import { loginUser } from "../../../Store/Actions";

function Verification(props) {
  console.log(props)
  let count = 1;
  let number;
  let valify_id;
  const [state] = useState({ val: [] });
  const [ValifyState, setValifyState] = useState(null);

  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  const inp5 = useRef();
  const inp6 = useRef();

  // otp work
  useEffect(() => {

    // let  number;
     
      // if (props.auth.data) {
      //   number = props.auth.data[0].contactNumber;
      //   console.log(props.auth.data[0].contactNumber)
      // }
  
    
    

    // sending otp
    if (number) {
      console.log(number)
      axios({
        method: "post",
        url: "/otp/send/v2?checkuser=true",
        data: {
          contactNumber: number.trim(),
        },
      }).then((res) => {
        valify_id = res.data.data.valify_id;
      });
    }

    inp1.current.focus();

  }, []);

  // otp verification
  const changeHAndler = (e) => {
    if (inp1.current.value) {
      count++;
      inp2.current.focus();
      if (inp2.current.value) {
        inp3.current.focus();
        if (inp3.current.value) {
          inp4.current.focus();
          if (inp4.current.value) {
            inp5.current.focus();
            if (inp5.current.value) {
              inp6.current.focus();
            }
          }
        }
      }
    }

    if (e.target.value) {
      state.val.push({ [e.target.name]: e.target.value });
    } else {
      return false;
    }

    let otp;
    if (state.val.length === 6) {
      otp = [
        state.val[0].one +
          state.val[1].two +
          state.val[2].three +
          state.val[3].four +
          state.val[4].five +
          state.val[5].six,
      ];
    }

    // otp verification
    if (otp) {
      axios({
        method: "post",
        url: "/otp/verify",
        data: {
          otp: otp[0],
          valifyId: valify_id,
        },
      })
        .then((res) => {
          if (res.data.message === "OTP verified successfully.") {
            props.history.push("/inner1");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // resending the otp
  const resendOtp = () => {
    if (number) {
      axios({
        method: "post",
        url: "/otp/send/v2?checkuser=true",
        data: {
          contactNumber: number.trim(),
        },
      }).then((res) => {
        valify_id = res.data.data.valify_id;
      });
    } else {
      // do{
      props.history.push("/");
      // number = prompt("enter your mobile number");
      // }while(number == null || number == "" );
    }
  };

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <h3>VERIFICATION CODE</h3>
        <section>
          Please type verification code sent <br />
          to {number}
        </section>
        <div id="inputLists">
          <input
            name="one"
            ref={inp1}
            type="number"
            id="1"
            onChange={changeHAndler}
            value={state.val.one}
          />
          <input
            name="two"
            ref={inp2}
            type="number"
            id="2"
            onChange={changeHAndler}
            value={state.val.two}
          />
          <input
            name="three"
            ref={inp3}
            type="number"
            id="3"
            onChange={changeHAndler}
            value={state.val.three}
          />
          <input
            name="four"
            ref={inp4}
            type="number"
            id="4"
            onChange={changeHAndler}
            value={state.val.four}
          />
          <input
            name="five"
            ref={inp5}
            type="number"
            id="5"
            onChange={changeHAndler}
            value={state.val.five}
          />
          <input
            name="six"
            ref={inp6}
            type="number"
            id="6"
            onChange={changeHAndler}
            value={state.val.six}
          />
        </div>
        <h4 onClick={resendOtp}>
          Resend OTP <img src={resend} alt="" />{" "}
        </h4>
      </div>
    </IonContent>
  );
}

const mapStateToProps = (state) => ({
  register: state.register,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(withRouter(Verification));

// const mapStateToProps = (state) => ({
//   register: state.register,
//   auth: state.auth
// });
// export default connect(mapStateToProps, null)(withRouter(Verification));
