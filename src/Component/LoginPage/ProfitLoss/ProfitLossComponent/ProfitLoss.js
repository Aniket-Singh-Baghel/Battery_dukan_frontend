import { IonContent } from '@ionic/react'
import backarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import download from "../../../../Assets/Icons/download.png";
import excel from "../../../../Assets/Icons/icon-excel.png";
import print from "../../../../Assets/Icons/icon-print.png";
import calendar from "../../../../Assets/Icons/calendar-icon.png";
import styles from '../ProfitLossCss/ProfitLoss.module.css'
import React from 'react'

function ProfitLoss(props) {
  return (
    <IonContent>
      <div className={styles.mainDiv}>
        <nav>
          <img onClick={() => props.history.goBack()} src={backarrow} alt="" />
          <h3>Profit & Loss</h3>
        </nav>
        <div className={styles.main}>
         <div className={styles.top}>
         <button>Current Fiscal Year - 01 Apr 2021 to 25 Oct 2021 <img src={calendar} alt="" /></button>
         <div className={styles.right}>
            <button>
            Excel Download
            <img src={excel} alt="" />
            </button>
            <button>Download PDF <img src={download} alt="" /></button>
            <button>Print PDF <img src={print} alt="" /></button>
          </div>
         </div>
         <table>
           <thead>
             <tr>
               <th>PARTICULARS</th>
               <th>AMOUNT</th>
             </tr>
           </thead>
           <tr>
               <th>Sale(+)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Cr. Note/Sale Return(-)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Purchase(-)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Dr. Note/Purchase Return(+)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Tax Payable(-)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Tax Receivable(+)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Opening Stock(-)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Closing Stock(+)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Gross Profit</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Other Income(+)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Indirect Expenses(-)</th>
               <th>-</th>
             </tr>
             <tr>
               <th>Net Profit</th>
               <th>-</th>
             </tr>
         </table>
            
        </div>
      
        
      </div>
    </IonContent>
  )
}

export default ProfitLoss
