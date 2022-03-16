import React, { useState } from 'react';
import styles from "../PurchseCss/Purchase2.module.css";
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import { IonContent } from '@ionic/react';
import user_circle from "../../../../Assets/drawable-xxxhdpi/user_circle.png";
import phone from "../../../../Assets/drawable-xxxhdpi/phone.png";
import file_alt from "../../../../Assets/drawable-xxxhdpi/file_alt.png";
import file_upload_alt from "../../../../Assets/drawable-xxxhdpi/file_upload_alt.png";
import { withRouter } from 'react-router';
import { CreatePurchase } from '../../../../Store/Actions';
import { connect } from "react-redux";






function Purchase2(props) {
    console.log(props)

    const [purchase, setpurchase] = useState({
        modelName: props.history.location.data.modelName,
        modelBrand: props.history.location.data.modelBrand,
        purchaseDate: props.history.location.data.purchaseDate,
        Quantity: "",
        "Serial Number": props.history.location.data["Serial Number"],
        Old: "",
        "Distributor Name" : "",
        "Distributor Number" : "",
        "Invoice Number" : "",
        "Invoice Image" : ""
      })

      console.log(purchase)

    const goBack = ()=>{
        props.history.push("/purchase1")
    }

     // Create Purchase
  const OnCHangeHandler = (e) => {
    setpurchase({ ...purchase, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.CreatePurchase(purchase)
  }

    return (
        <IonContent>
            <div className={styles.mainDiv}>
                <nav>
                    <img onClick={goBack} src={backarrow} alt=""/>
                    <h3>Upload Invoice</h3>
                </nav>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <div>
                            <img src={user_circle} alt="" />
                        </div>
                        <div>
                            <h4>Distributor Name</h4>
                            <input onChange={OnCHangeHandler} name="Distributor Name" type="text" placeholder="Name"/>
                        </div>
                    </div>
                    <div className={styles.header}>
                        <div>
                            <img src={phone} alt="" />
                        </div>
                        <div>
                            <h4>Distributor's Number</h4>
                            <input onChange={OnCHangeHandler} name="Distributor Number" type="text" placeholder="Enter the Mobile number"/>
                        </div>
                    </div>
                    <div className={styles.header}>
                        <div>
                            <img src={file_alt} alt="" />
                        </div>
                        <div>
                            <h4>Invoice Number</h4>
                            <input onChange={OnCHangeHandler} name="Invoice Number" type="text" placeholder="Enter the invoice number"/>
                        </div>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.nav}>
                        <img src={file_upload_alt} alt="" />
                        Upload Invoice
                    </div>
                    <div className={styles.nav2} >
                        <input type="file"/>
                        <div>+</div>
                    </div>
                </div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </IonContent>
        
    )
}

const mapDispatchToProps = {
  CreatePurchase
  };

export default connect(null, mapDispatchToProps)(withRouter(Purchase2));
