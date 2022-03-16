import { IonContent, IonHeader } from "@ionic/react";
import styles from "../InvoiceCss/InvoiceSetting.module.css";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import { connect } from 'react-redux'
import { CreateInvoiceSetting } from '../../../../Store/Actions'
import React, { useState } from "react";

function InvoiceSetting(props) {
  const [state, setstate] = useState({
		    "Series No": "",
				"Challan Serial No": "",
				"Business Phone Number": "",
				"T&C": "",
        "Account Holder Name": "",
        "Account No": "",
        "IFSC Code": "",
        "Bank Name": "",
        "Branch Name": "",
	});


	const OnCHangeHandler = e => {
		setstate({ ...state, [e.target.name]: e.target.value });
	};

  const onSubmit = e => {
    props.CreateInvoiceSetting(state);
    setstate({
        "Series No": "",
				"Challan Serial No": "",
				"Business Phone Number": "",
				"T&C": "",
        "Account Holder Name": "",
        "Account No": "",
        "IFSC Code": "",
        "Bank Name": "",
        "Branch Name": "",
    });
  };
  

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <IonHeader>
          <div className={styles.nav}>
            <img src={leftarrow} alt="" />
            <h6>Invoice Setting</h6>
          </div>
        </IonHeader>
        <div className={styles.main}>
          <div>
            <label>Series No : </label>
            <input
            onChange={OnCHangeHandler}
              type="Number"
              value={state["Series No"]}
              placeholder="Series No"
              name="Series No"
            />
          </div>
          <div>
            <label>Challan Serial No : </label>
            <input
            onChange={OnCHangeHandler}
              type="Number"
              value={state["Challan Serial No"]}
              placeholder="Challan Serial No"
              name="Challan Serial No"
            />
          </div>
          <div>
            <label>Business Phone Number : </label>
            <input onChange={OnCHangeHandler} value={state["Business Phone Number"]} type="Number" placeholder="Business Phone Number" name="Business Phone Number" />
          </div>
          <div>
            <label>T&C : </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state["T&C"]}
              placeholder="T&C"
              name="T&C"
            />
          </div>
          <h3>Bank Details</h3>
          &nbsp;
          <div>
            <label>Account Holder Name : </label>
            <input
            onChange={OnCHangeHandler}
            value={state["Account Holder Name"]}
              type="text"
              placeholder="Account Holder Name"
              name="Account Holder Name"
            />
          </div>
          <div>
            <label>Account No : </label>
            <input
            onChange={OnCHangeHandler}
              type="Number"
              value={state["Account No"]}
              placeholder="Account No"
              name="Account No"
            />
          </div>
          <div>
            <label>IFSC Code : </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state["IFSC Code"]}
              placeholder="IFSC Code"
              name="IFSC Code"
            />
          </div>
          <div>
            <label>Bank Name : </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state["Bank Name"]}
              placeholder="Bank Name"
              name="Bank Name"
            />
          </div>
          <div>
            <label>Branch Name : </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state["Branch Name"]}
              placeholder="Branch Name"
              name="Branch Name"
            />
          </div>
          <button onClick={onSubmit}>Save</button>
        </div>
      </div>
    </IonContent>
  );
}

const mapDispatchToProps = {
	CreateInvoiceSetting,
  };

export default connect(null, mapDispatchToProps)(InvoiceSetting);
