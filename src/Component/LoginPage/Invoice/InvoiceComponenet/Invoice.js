import React, { useEffect, useState } from "react";
import { IonContent, IonHeader } from "@ionic/react";
import styles from "../InvoiceCss/Invoice.module.css";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import { connect } from 'react-redux'
import { CreateInvoice, GetInvoiceSetting } from '../../../../Store/Actions'

function Invoice(props) {
  console.log(props)
  const [state, setstate] = useState({
		    invoiceNumber: "",
				invoicedate: "",
        "purchaseDate": "",
				customerName: "",
				"modelName": "",
				quantity: "", 
        "serialNumber": "",
        "Amount": "",
        "Hsn": "",
        "accountNumber": "",
        "ifscCode": "",
        "bank&Branch": "",
        "TotalAmount": "",
        "PaidAmount": "",
        "PendingAmount": "",
        "ModeOfPayment": "",
	});


	const OnCHangeHandler = e => {
		setstate({ ...state, [e.target.name]: e.target.value });
	};

  const onSubmit = e => {
    props.CreateInvoice(state);
    setstate({
      invoiceNumber: "",
				invoicedate: "",
        "purchaseDate": "",
				customerName: "",
				"modelName": "",
				quantity: "", 
        "serialNumber": "",
        "Amount": "",
        "Hsn": "",
        "accountNumber": "",
        "ifscCode": "",
        "bank&Branch": "",
        "TotalAmount": "",
        "PaidAmount": "",
        "PendingAmount": "",
        "ModeOfPayment": "",
    })
  }
  
  useEffect(() => {
    props.GetInvoiceSetting();
  }, [])
  
  let AccountNo;
  if(props.InvoiceSetting.data) {
    AccountNo = props.InvoiceSetting.data.map((data) => {
          return <option key={data.id} value={data["Account No"]}>{data["Account No"]}</option>
      })
  }

  let ifscCode;
  if(props.InvoiceSetting.data) {
    ifscCode = props.InvoiceSetting.data.map((data) => {
          return <option key={data.id} value={data["IFSC Code"]}>{data["IFSC Code"]}</option>
      })
  }

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <IonHeader>
          <div className={styles.nav}>
            <img src={leftarrow} alt="" />
            <h6>Create Invoice</h6>
          </div>
        </IonHeader>
        <div className={styles.main}>
          <div>
            <label>Customer Name: </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state.customerName}
              placeholder="Customer Name"
              name="customerName"
            />
          </div>
          <div>
            <label>Invoice Number: </label>
            <input
            onChange={OnCHangeHandler}
              type="Number"
              value={state.invoiceNumber}
              placeholder="Invoice Number"
              name="invoiceNumber"
            />
          </div>
          <div>
            <label>Invoice Date: </label>
            <input
            value={state.invoicedate}
            onChange={OnCHangeHandler} type="Date" name="invoicedate"/>
          </div>
          <div>
            <label>Purchase Date: </label>
            <input
            value={state.purchaseDate}
            onChange={OnCHangeHandler} type="Date" name="purchaseDate"/>
          </div>
          <div className={styles.workingDetails}>
            <table>
              <tr>
                <th className={styles.tableHead}>S.no</th>
                <th className={styles.tableHead}>Model Name</th>
                <th className={styles.tableHead}>QTY</th>
                <th className={styles.tableHead}>Hsn</th>
                <th className={styles.tableHead}>Rate</th>
                <th className={styles.tableHead}>Amount</th>
              </tr>
              <tr className={styles.productDetail}>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.serialNumber} type="Number" name="serialNumber" placeholder="Serial No" />
                </td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.modelName} type="text" name="modelName" placeholder="Modal Name" />
                </td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.quantity} type="Number" name="quantity" placeholder="QTY" />
                </td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.Hsn} type="Number" name="Hsn" placeholder="Hsn" />
                </td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.Amount} type="Number" placeholder="Rate" />
                </td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.Amount} type="Number" name="Amount" placeholder="Amount" />
                </td>
              </tr>
              <tr className={styles.total}>
                <th colSpan="2">total</th>
                <td>
                  <input
                  onChange={OnCHangeHandler} type="Number" placeholder="Total QTY" />
                </td>
                <td></td>
                <td></td>
                <td>
                  <input
                  onChange={OnCHangeHandler} value={state.TotalAmount} type="Number" name="TotalAmount" placeholder="Total Amount" />
                </td>
              </tr>
            </table>
          </div>
          <div>
            <label>Account Number: </label>
            <select onChange={OnCHangeHandler} value={state.accountNumber} type="text" placeholder="Account Number" name="accountNumber">
              {AccountNo}
            </select>
            {/* <input
            onChange={OnCHangeHandler}
              type="text"
              placeholder="Account Number"
              name="accountNumber"
            /> */}
          </div>
          <div>
            <label>IFSC Code: </label>
            <select onChange={OnCHangeHandler} value={state.ifscCode} type="text" placeholder="IFSC Code" name="ifscCode">
              {ifscCode}
            </select>
            {/* <input
            onChange={OnCHangeHandler} type="text" placeholder="IFSC Code" name="ifscCode" /> */}
          </div>
          <div>
            <label>Bank & Branch: </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state["bank&Branch"]}
              placeholder="Bank & Branch"
              name="bank&Branch"
            />
          </div>
          <div>
            <label>Paid Amount: </label>
            <input
            onChange={OnCHangeHandler} value={state.PaidAmount} type="Number" placeholder="Paid Amount" name="PaidAmount" />
          </div>
          <div>
            <label>Pending Amount: </label>
            <input
            onChange={OnCHangeHandler}
              type="Number"
              value={state.PendingAmount}
              placeholder="Pending Amount"
              name="PendingAmount"
            />
          </div>
          <div>
            <label>ModeOfPayment: </label>
            <input
            onChange={OnCHangeHandler}
              type="text"
              value={state.ModeOfPayment}
              placeholder="Mode Of Payment"
              name="ModeOfPayment"
            />
          </div>
          <button onClick={onSubmit} className={styles.button}>Submit</button>
        </div>
      </div>
    </IonContent>
  );
}

const mapStateToProps = (state) => ({
	InvoiceSetting: state.InvoiceSetting
})

const mapDispatchToProps = {
	CreateInvoice: CreateInvoice,
  GetInvoiceSetting,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
