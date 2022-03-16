import React, { useEffect, useRef, useState } from "react";
import { IonContent } from "@ionic/react";
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import styles from "../SalesCss/SaleTwo.module.css";
import search from "../../../../Assets/drawable-xxxhdpi/search_3.png";
import triangle from "../../../../Assets/drawable-xxxhdpi/down_arrow.png";
import doc from "../../../../Assets/drawable-xxxhdpi/file_alt.png";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { GetBatteryModel, CreateSale } from "../../../../Store/Actions";

import cx from "classnames";
import { useSelector } from "react-redux";

function SaleTwo(props) {
  let searchQuery = useSelector((state) => state.search.batteryDesc);
  const [state, setstate] = useState("0");
  const [modelName, setmodelName] = useState(null);


  const [sale, setsale] = useState({
    modelName: "",
    modelBrand: "",
    "sell date": "",
    Quantity: "",
  });
  const batteryModel = useSelector((state) => state.BatteryModel.data);

  useEffect(() => {
    props.GetBatteryModel();
  }, []);

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
  // const listOpen = () => {
  //   if (condition) {
  //     fShow.current.style.display = "initial";
  //     condition = false;
  //   } else {
  //     fShow.current.style.display = "none";
  //     condition = true;
  //   }
  // };

  const selected = () => {
    sShow.current.style.display = "none";
    cond2 = true;
    // if (cond2) {
    //   sShow.current.style.display = "initial";
    //   cond2 = false;
    // } else {
     
    // }
  };

  let brandName;
  if (searchQuery) {
    brandName = searchQuery.map((data, i) => {
      return (
        <div key={i} className={styles.heads}>
          <h4>{data.brandName}</h4>
          <span>75 Models available </span>
        </div>
      );
    });
  }

  let UniqueSecondaryName;
  let filteredSecName;
  if (batteryModel) {
    UniqueSecondaryName = batteryModel.map((data, i) => {
      if (searchQuery[0].brandName === data.modelBrand) {
        return data;
      }
    });
    filteredSecName = UniqueSecondaryName.filter(
      (e) => typeof e !== "undefined"
    );
  }

  // function for removal
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
  if (filteredSecName) {
    uniqueSecNameArray = removeDuplicates(filteredSecName, "secondaryName");
  }

  

  let SecondaryName;
  if (uniqueSecNameArray) {
    SecondaryName = uniqueSecNameArray.map((data, i) => {
      return (
        <div key={i} onClick={(e) => showModelName(e)} className={styles.p1}>
          <span>
            <img src={triangle} alt="" />
          </span>
          {data.secondaryName}
        </div>
      );
    });
  }

  
  const showModelName = (e) => {    
    if(batteryModel) {
     let value = batteryModel.map((data, i) => {
        if(data.secondaryName === e.target.innerText && data.modelBrand === searchQuery[0].brandName){
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


  const ShowInvoice = (data) => {
    if (cond2) {
      sShow.current.style.display = "initial";
      cond2 = false;
    }
    setsale({modelName: data.modelName, modelBrand: data.modelBrand})
  }
  

  // Create Sale
  const OnCHangeHandler = (e) => {
    setsale({ ...sale, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.CreateSale(sale)
  }
  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <nav>
          <img onClick={() => props.history.goBack()} src={backarrow} alt="" />
          <h3>Product Details</h3>
        </nav>
        <div className={styles.main}>
          {brandName}
          {/* <div className={styles.heads}>
                    <h4>Exide</h4>
                    <span>75 Models available </span>
                </div> */}
          <h3>Choose Your Model</h3>
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
          <h3 >{sale.modelName} {sale.modelBrand}</h3>
          <div className={styles.dnqty}>
            <div>
              <h3>Sell Date</h3>
              <input name="sell date" onChange={OnCHangeHandler} type="date" />
            </div>
            <div>
              <h3>Quantity</h3>
              <div
                name="Quantity"
                id={styles.ranger}
              >
                <span onClick={minusf} id={styles.minus}>
                  -
                </span>
                {/* <input name="Quantity" className={styles.number} onChange={OnCHangeHandler}  type="number" value={state}/> */}
                <span className={styles.number} >{state}</span>
                <span onClick={plusf} id={styles.plus}>
                  +
                </span>
              </div>
            </div>
          </div>
          <div className={styles.serials}>
            <h3>Select Mobile</h3>
            <div className={cx(styles.flex, styles.sections)}>
              <h6>
                Stock: <span>3 Mobile</span>
              </h6>
              <h6>
                MOP:<span> 12,500</span>
              </h6>
              <h6>
                DP:<span>12,500</span>
              </h6>
            </div>
          </div>
          <div className={styles.selector}>
            <div className={cx(styles.flex, styles.rel)}>
              <div className={cx(styles.tag, styles.flex)}>
                <input type="radio" name="" id="" />
                <span>Select to Sale</span>
              </div>
              <img src={doc} alt="" />
            </div>
            <div className={cx(styles.flex, styles.sections)}>
              <h6>
                Serial:<span> 1234 5678 9012</span>
              </h6>
              <h6 id={styles.red}>20 days in stock</h6>
            </div>
            <div className={cx(styles.flex, styles.sections, styles.block)}>
              <h6>
                Invoice
                <span> 123456</span>
              </h6>
              <h6>
                Purchase Date
                <span> 18/05/2019</span>
              </h6>
              <h6>
                Distributor <span> Varun Kumar</span>
              </h6>
            </div>
          </div>
          <div className={styles.divider}>
            <hr />
            <div className={styles.or}>OR</div>
          </div>

          <h5>Add the Same Model with Different Date</h5>

          <div className={styles.btn}>
            <button onClick={selected}>CANCEL</button>
            <button onClick={onSubmit}>DONE</button>
          </div>
        </div>
      </div>
    </IonContent>
  );
}

const mapDispatchToProps = {
  GetBatteryModel,
  CreateSale
};

export default connect(null, mapDispatchToProps)(withRouter(SaleTwo));
