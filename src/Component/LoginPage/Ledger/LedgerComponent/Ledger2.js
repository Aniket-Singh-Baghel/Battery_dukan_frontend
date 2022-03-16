import React from "react";
import styles from "../LedgerCss/Ledger2.module.css";
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import { IonContent } from "@ionic/react";
import calendar from '../../../../Assets/Icons/calendar-icon.png';
import { withRouter } from "react-router";

function Ledger2(props) {
  return (
       
        <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <input type="text" placeholder="Search Party" />
            <button>Current Fiscal Year - 01 Apr 2021 to 25 Oct 2021
            <img src={calendar} alt="" />
            </button>
          </div>
          <div className={styles.right}>
            <button>Excel Download</button>
            <button>Download PDF</button>
            <button>Print PDF</button>
            <button>whatsapp</button>
          </div>
        </div>
        <div className={styles.mid}>
          <div className={styles.PartyName}>
              <h4>Party Name: <span >Cash Sale</span></h4>
          </div>
          <div className={styles.balance}>
              <h4>Closing Balance: <span >0</span></h4>
              <h4>Opening Balance: <span >0</span></h4>&nbsp;
          </div>
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
          <tbody>
          <tr>
              <th>-</th>
              <th>Opening Balance</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
            </tr>
            <tr>
              <th>-</th>
              <th>Closing Balance</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
            </tr>
            </tbody>
        </table>
        </div>
  );
}

export default withRouter(Ledger2);
