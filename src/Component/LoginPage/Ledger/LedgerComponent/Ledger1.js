import React, { useState } from "react";
import styles from "../LedgerCss/Ledger1.module.css";
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import calendar from "../../../../../src/Assets/Icons/calendar-icon.png";
import empty from "../../../../../src/Assets/Icons/empty-state-reports.png";
import { IonContent } from "@ionic/react";
import { withRouter } from "react-router";
import Ledger2 from "./Ledger2";

function Ledger1(props) {
  const [state, setstate] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setstate(e.target[0].value);
  };

  console.log(state.length);

  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <nav>
          <img onClick={() => props.history.goBack()} src={backarrow} alt="" />
          <h3>Ledger</h3>
        </nav>
        { (state.length > 0) ? <Ledger2 /> : <div className={styles.main}>
          <div className={styles.top}>
            <form onSubmit={onSubmitHandler}>
              <input
                type="text"
                placeholder="Search Party"
                name="SearchParty"
              />
            </form>
            <button>
              Current Fiscal Year - 01 Apr 2021 to 25 Oct 2021
              <img src={calendar} alt="" />
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>TRANSACTION TYPE</th>
                <th>TRANSACTION NO.</th>
                <th>CREDIT</th>
                <th>DEBIT</th>
              </tr>
            </thead>
          </table>
          <div className={styles.empty}>
            <img src={empty} alt="" />
            <h4>Select a Party first to see the reports</h4>
          </div>
        </div> 
        }
      </div>  
      </IonContent>
  );
}

export default withRouter(Ledger1);
