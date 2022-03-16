import React,{useRef , useEffect, useState } from 'react';

import { IonContent, IonHeader } from '@ionic/react';
import styles from "../Css/Invoice1.module.css";
import backarrow from "../../../../Assets/drawable-xxxhdpi/next_arrow.png";
import mask from "../../../../Assets/drawable-xxxhdpi/mask_group_131.png";
import edit from "../../../../Assets/drawable-xxxhdpi/mask_group_139.png";
import LoginAxios from '../../../../Utils/AxiosConfig';
import axios from 'axios'

import cx from 'classnames';

function Invoice1() {
	const AddPaymentPop = useRef();
    const lastPop = useRef();
    
    
    const show1 = () =>{
        console.log("show1");
        AddPaymentPop.current.style.display = "initial"; 
    }
    const cancel =()=>{
        console.log("cancel");
        AddPaymentPop.current.style.display = "none";
    }
    const shw2 =()=>{
        console.log("show2");
        lastPop.current.style.display = "initial";  
    }  
    //   console.log(authstate)

    return (
        <IonContent className={styles.main}>
            <IonHeader>
                <div className={styles.ionpadding}>
                    <div className={styles.one}>
                        <img src={backarrow} alt="arrow"/>
                        <h2>Sales Invoices</h2>
                    </div>
                    <div>
                        {/* <img src={search} alt="" /> */}
                        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(255,255,255,1)"/></svg>
                        <img src={mask} alt="" />
                    </div>
                </div>
            </IonHeader>
            <div className={styles.content}>
                <div className={styles.fl}>
                    <h4>Recent Invoices</h4>
                    <h5  className={cx(styles.fl, styles.up)}>
                        Update Logo/Shop Name 
                        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(38,144,255,1)"/></svg>
                    </h5>    
                </div>
                <div id={styles.card} className={styles.p}>
                    <div id={styles.first} className={styles.fl}>
                        <h5 id={styles.f}>Invoice No. - <span></span></h5>
                        <h4>02-02-20</h4>
                    </div>
                    <div id={styles.second} className={styles.fl}>
                        <div className={styles.pt}>
                            <h4>Customer Name</h4>
                            <h3>Prem Dayapule</h3>
                        </div>
                        <div className={styles.pt}>
                            <h4>Model <span>( 2 More )</span></h4>
                            <h3>Xiaomi Redmi note 8 pro</h3>
                        </div>
                    </div>
                    <div id={styles.third} className={styles.fl}>
                        <div className={styles.pt}>
                            <h4>IMEI/Serial No.</h4>
                            <h3 className={styles.fl}>
                                123456789012345
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                            </h3>
                        </div>
                        <div className={styles.pt}>
                            <h4>Qty</h4>
                            <h3>10</h3>
                        </div>
                        <div className={styles.pt}>
                            <h4>Total amount</h4>
                            <h3 className={styles.red}>10,000</h3>
                        </div>
                    </div>
                    <div id={styles.fourth} className={cx(styles.matop, styles.padd)} >
                        <div  className={cx(styles.fl,styles.mb)}>
                            <h4 className={styles.fonts} >Payment Tracker</h4>
                            <button onClick={()=>show1()} className={cx(styles.button)}>Add Payment</button>
                        </div>
                        <div id={styles.fsecond} className={cx(styles.matop, styles.flx)}>
                            <div className={cx(styles.bright,styles.pd)}>
                                <h4>Total Paid</h4>
                                <h3>10,000</h3>
                            </div>
                            <div  className={cx(styles.bright,styles.pd)}>
                                <h4>Date</h4>
                                <h3>02-02-20</h3>
                            </div>
                            <div  className={cx(styles.bright,styles.pd)}>
                                <h4>Pending Amt</h4>
                                <h3 className={styles.red}>00</h3>
                            </div>
                            <div  className={cx(styles.bright,styles.pd)}>
                                <h4>Mode</h4>
                                <h3 className={styles.green}>Cash</h3>
                            </div>
                        </div>
                        <div id={styles.linkdown} className={cx(styles.fl,styles.up, styles.pt1)}>
                            Previous Payments
                            <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(38,144,255,1)"/></svg>
                        </div>
                    </div>
                    <div id={styles.sq} className={cx(styles.button, styles.pt1, styles.flx)}>
                        View PDF
                    </div>
                </div>

                <div className={cx(styles.add,styles.flx)}>
                    +
                </div>
            </div>
                
            {/* on click in add payment */}
            <div ref={AddPaymentPop} className={cx(styles.payment)}>
                <div className={cx(styles.fl, styles.bold)}>
                    <h3>Add Payment</h3>
                    <h4 className={styles.fonts, styles.ls}>1234567890</h4>
                </div>
                <div className={cx(styles.matop, styles.fla)}>
                            <div className={cx(styles.extra)}>
                                <h4 className={styles.h4}>Total Amount</h4>
                                <h3 className={styles.h3}>10,000</h3>
                            </div>
                            <div className={styles.bright}></div>
                            <div  className={cx(styles.extra)}>
                                <h4 className={styles.h4}>Paid Amount</h4>
                                <h3 className={styles.h3}>5,000</h3>
                            </div>
                            <div className={styles.bright}></div>
                            <div  className={cx(styles.extra)}>
                                <h4 className={styles.h4}>Pending Amt</h4>
                                <h3 className={cx(styles.h3, styles.red)}>5,000</h3>
                            </div>
                           
                           
                        </div>
                <div className={styles.amount}> 
                    <h2>Amount</h2>
                    <input type="number" placeholder="₹"/>
                </div>
                <div className={styles.mode}>
                    <h2>Mode of Payment</h2>
                    <div className={styles.radio}>
                        <div>
                            <input type="radio" name="mode" id="" />
                            <label htmlFor="">Cash</label>
                        </div>
                        <div>
                            <input type="radio" name="mode" id="" />
                            <label htmlFor="">Credit</label>
                        </div>
                        <div>
                            <input type="radio" name="mode" id="" />
                            <label htmlFor="">Cheque</label>
                        </div>
                        <div>
                            <input type="radio" name="mode" id="" />
                            <label htmlFor="">Debit Card</label>
                        </div>
                        <div>
                            <input type="radio" name="mode" id="" />
                            <label htmlFor="">NEFT/IMPS/Banking</label>
                        </div>   
                    </div>
                </div>
                <div className={styles.btnholder}>
                    <button onClick={()=>cancel()} id={styles.redish}>Cancel</button>
                    <button onClick={()=>shw2()} id={styles.blu}>Continue</button>
                </div>
            </div>

            {/* onclick in continue after payment */}
            <div ref={lastPop} className={styles.continue}>
                <div  className={cx(styles.tl, styles.fl, styles.pd)}>
                    <h5>Date</h5>
                    <div className={styles.bright}></div>
                    <h5>Paid</h5>
                    <div className={styles.bright}></div>
                    <h5>Mode</h5>
                    <div className={styles.bright}></div>
                    <h5>Pending</h5>
                </div>
                <div className={cx(styles.details,styles.pd, styles.matop)}>
                    <div className={cx(styles.fl, styles.fonts)}>
                        <h4 className={styles.date}>20-01-20</h4>
                        <h3 className={styles.amt}>₹ 5000</h3>
                        <h5 className={styles.cash}>Cash</h5>
                        <h3 className={cx(styles.amt, styles.reds)}>
                            ₹ 5000 
                            <img className={styles.icon} src={edit} alt="edit-icon"/>
                        </h3>
        
                    </div>
                </div>
                <div className={cx(styles.details,styles.pd, styles.matop)}>
                    <div className={cx(styles.fl, styles.fonts)}>
                        <h4 className={styles.date}>20-01-20</h4>
                        <h3 className={styles.amt}>₹ 5000</h3>
                        <h5 className={styles.cash}>Cash</h5>
                        <h3 className={cx(styles.amt, styles.reds)}>
                            ₹ 5000 
                            <img className={styles.icon} src={edit} alt="edit-icon"/>
                        </h3>
        
                    </div>
                </div>
                <div className={cx(styles.details,styles.pd, styles.matop)}>
                    <div className={cx(styles.fl, styles.fonts)}>
                        <h4 className={styles.date}>20-01-20</h4>
                        <h3 className={styles.amt}>₹ 5000</h3>
                        <h5 className={styles.cash}>Cash</h5>
                        <h3 className={cx(styles.amt, styles.reds)}>
                            ₹ 5000 
                            <img className={styles.icon} src={edit} alt="edit-icon"/>
                        </h3>
                    </div>
                </div>
                <div className={cx(styles.fl,styles.up, styles.pt1)} id={styles.last} >
                    Add Payment
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(38,144,255,1)"/></svg>
                </div>
            </div>   
        </IonContent>
    )
}

export default Invoice1;