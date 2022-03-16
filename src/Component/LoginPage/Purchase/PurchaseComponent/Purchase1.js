import React, { useEffect, useRef, useState } from "react";
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import styles from "../PurchseCss/Purchase1.module.css";
import search from "../../../../Assets/drawable-xxxhdpi/search_3.png";
import triangle from "../../../../Assets/drawable-xxxhdpi/down_arrow.png";
import scan from "../../../../Assets/drawable-xxxhdpi/group_474.png";
import LoginAxios from "../../../../Utils/AxiosConfig";
import axios from "axios";
import { connect } from "react-redux";
import { GetBatteryBrand, GetBatteryModel, CreatePurchase } from '../../../../Store/Actions'
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";

function Purchase1(props) {
  const [state, setstate] = useState("0");
  const [name, setname] = useState(null)
  const [purchase, setpurchase] = useState({
    modelName: "",
    modelBrand: "",
    purchaseDate: "",
    Quantity: "",
    "Serial Number": "",
    Old: ""
  })
  const [modelName, setmodelName] = useState(null);

  const fShow = useRef();
  const sShow = useRef();

  const minusf = () => {
    if (state <= "0") {
      return false;
    } else {
      setstate(Number(state) - 1);
    }
  };

  const plusf = () => {
    setstate(Number(state) + 1);
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.history.push("/inner6");
    }
  };

  let condition = true;
  let cond2 = true;
  const listOpen = () => {
    if (condition) {
      fShow.current.style.display = "initial";
      condition = false;
    } else {
      fShow.current.style.display = "none";
      condition = true;
    }
  };

  const selected = () => {
    sShow.current.style.display = "none";
      cond2 = true;
    // if (cond2) {
    //   sShow.current.style.display = "initial";
    //   cond2 = false;
    // } else {
    //   sShow.current.style.display = "none";
    //   cond2 = true;
    // }
  };

  useEffect(() => {
    props.GetBatteryBrand()
    props.GetBatteryModel()
  }, [])

  var filtered;
  var brandNameValue;
  let value;
  let showSecName = (e) => {
    brandNameValue = e.target.innerHTML.toLowerCase()
    value = props.BatteryModel.data.filter((data) => {
      if(brandNameValue === data.modelBrand.toLowerCase()){
        return data
      };
    })
    
    filtered = value.filter(e => typeof e !== "undefined");
    setname(filtered)
  }
  
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  let uniqueSecNameArray;
  if (name) {
    uniqueSecNameArray = removeDuplicates(name, "secondaryName");
  }

  let SecondaryName;
  if (uniqueSecNameArray) {
    SecondaryName = uniqueSecNameArray.map((data, i) => {
      return (
        <div>
        <div key={i} onClick={(e) => showModelName(e)} className={styles.p1}>
          <span>
            <img src={triangle} alt="" />
          </span>
          {data.secondaryName}
        </div>
      </div>
      );
    });
  }
  
  const showModelName = (e) => {    
    if(props.BatteryModel.data) {
     let value = props.BatteryModel.data.map((data, i) => {
        if(data.secondaryName === e.target.innerText){
          return data
        }
      })
      let filtered = value.filter(e => typeof e !== "undefined");
      setmodelName(filtered)
    }
  }

  let ModelName;
  if(modelName){
    if (condition) {
      fShow.current.style.display = "initial";
      condition = false;
    } else {
      fShow.current.style.display = "none";
      condition = true;
    }
    ModelName = modelName.map((data, i) => {
      return (
        <div key={i} onClick={() => ShowInvoice(data)} className={styles.extras}>
                <input name="radio" value={data.modelName} type="radio" />
                <label htmlFor="radio">{data.modelName}</label>
        </div>
      )
    })
  }

  let brandName;
  if(props.BatteryBrand.data){
    brandName = props.BatteryBrand.data.map((data, i) => {
          return ( 
            <div key={i} onClick={e => showSecName(e)} >
            <h5 >{data.brandName}</h5>
          </div>
          )
    })
  }

  const ShowInvoice = (data) => {
    if (cond2) {
        sShow.current.style.display = "initial";
        cond2 = false;
      }
    setpurchase({modelName: data.modelName, modelBrand: data.modelBrand})
  }

  // Create Purchase
  const OnCHangeHandler = (e) => {
    setpurchase({ ...purchase, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.history.push({
      pathname: '/purchase2',
        data: purchase // your data array of objects
    })
  }

  console.log(purchase)
  
  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <nav>
          <img onClick={() => props.history.goBack()} src={backarrow} alt="" />
          <h3>Product Details</h3>
        </nav>
        <div className={styles.main}>
          <h3>Choose Your Model</h3>
          <div className={styles.scrl}>
            {brandName}
          </div>
          <h4>75 Models available</h4>
          <div className={styles.search}>
            <span>
              <img src={search} alt="" />
            </span>
            <input
              onKeyDown={_handleKeyDown}
              type="text"
              placeholder="Search for model"
            />
          </div>

          <div className={styles.pholder}>   
            {/* with onclick */}
            {SecondaryName}
            {/* radio buttons left */}
            <div className={styles.extrasHolder} ref={fShow}>
             {ModelName}
            </div>
          </div>
        </div>

        {/* after the selection */}
        <div className={styles.AfterSelection} ref={sShow}>
          {purchase ? <h3>{purchase.modelName} {purchase.modelBrand}</h3>: <h3>NA</h3>}
          <div className={styles.dnqty}>
            <div>
              <h3>Purchase Date</h3>
              <input name="purchaseDate" onChange={OnCHangeHandler} type="date" />
            </div>
            <div>
              <h3>Quantity</h3>
              <div id={styles.ranger}>
                <span onClick={minusf} id={styles.minus}>
                  -
                </span>
                <span name="Quantity" onChange={OnCHangeHandler} className={styles.number}>{state}</span>
                <span onClick={plusf} id={styles.plus}>
                  +
                </span>
              </div>
            </div>
          </div>
          <div className={styles.serials}>
            <h3>Serial Number</h3>
            <input type="text" name="Serial Number" onChange={OnCHangeHandler} placeholder="Enter 12 Digit Serial No." />
          </div>

          <div className={styles.divider}>
            <hr />
            <div className={styles.or}>OR</div>
          </div>
          <div className={styles.serials} id={styles.scan}>
            <input type="text" placeholder="Scan Serial No." />
            <span>
              <img src={scan} alt="" />
            </span>
          </div>

          <div className={styles.btn}>
            <button onClick={selected}>CANCEL</button>
            <button onClick={onSubmit}>
              DONE
            </button>
          </div>
        </div>
      </div>
    </IonContent>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
	BatteryBrand: state.Batteries,
  BatteryModel: state.BatteryModel
});

const mapDispatchToProps = {
	GetBatteryBrand,
  GetBatteryModel,
  CreatePurchase
  };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Purchase1));
