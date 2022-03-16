import React,{useEffect, useRef, useState} from 'react';
import styles from "../InnerCss/Inner7.module.css";
import backarrow from "../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import tabs from "../../../Assets/tabs.png";
import { useSelector , connect } from "react-redux";
import {  GetBatteryModel } from "../../../Store/Actions";
import { withRouter } from 'react-router';
import { IonContent } from '@ionic/react';
import axios from 'axios';


function Inner7(props) {

    

    useEffect(() => {
        props.GetBatteryModel()
     }, [])
     const state = useSelector(state => state.search.batteryDesc)
     console.log(state)

    // console.log(state)
    let desc;
    if(state){
        desc = state.map((dat,i)=>{
            let name;
            let one = dat.modelName.split(" ");

            if(one.length > 1 || dat["brandName"] === one[0]){
                name = dat["modelBrand"] +" "+ one[1];
            }else name = dat["modelBrand"] +" "+ dat.modelName;


            let searched = String(name).length > 29 ? name.substring(0,29) + ".." : name = name;

                return(
                    <div key={i} className={styles.battery}>
                        <div className={styles.one}>
                            <img src={dat.modelIcon} alt="battery" />
                            <div className={styles.one1}>
                                <h3>{searched}</h3>
                                <div className={styles.dash}></div>
                                <h5>Capacity: {dat["currentCapaCity (value)"] +" "+ "Ah"}</h5>
                                <h5>Warranty: {dat["warranty (value)"] +" "+ "Months"}</h5>
                            </div>
                        </div>
                        <div className={styles.desc}>
                            <div className={styles.first}>
                                <h4>MRP</h4>
                                <h5>{"Rs" +" "+ dat["mrp (value)"]}</h5>
                            </div>
                            <div className={styles.first}>
                                <h4>NLC</h4>
                                <h5>{dat["nlc (value)"]}</h5>
                            </div>
                            <div id={styles.t} className={styles.first}>
                                <h4>DP</h4>
                                <h5>{"Rs" +" "+ dat["dp (value)"]}</h5>
                            </div>
                        </div>
                    </div>
                )
        })
    }

    const hide = useRef();
    let condition = true;
    const unhide =()=>{
        if(condition){
            hide.current.style.display = "initial";
            condition = false;
        }
        else{
            hide.current.style.display = "none";
            condition = true;
        }
    }

    return (
        <IonContent>

        <div className={styles.mainDiv}>
            <nav>
                <img onClick={()=> props.history.goBack() } src={backarrow} alt=""/>
                <h3>Product Details</h3>
            </nav>
            <main>
                {desc}
                <div className={styles.dets1}>
                    <h2>Description</h2>
                    <p>Exide Xplore, the only zero-maintenance VRLA motorcycle battery with the X Factor. Built with world class Calcium Effects Technology, it delivers a power packed performance and endures tough Indian road conditions. Xplore comes with a 48-month (24 months free of cost + 24 months pro rata) warranty.</p>
                </div>
                <div className={styles.dets1}>
                    <h2>Features</h2>
                    <ul>
                        <li> High Cranking Power</li>
                        <li> Maintenance Free</li>
                        <li>High Heat Tolerance & Vibration Resistance</li>
                        <li> Patented BIC vents for enhanced safety</li>
                        <li>Long Life</li>
                        <li>Fully sealed & tested</li>
                        <li>Factory Charged – Ready to Use</li>
                    </ul>
                </div>
                <div className={styles.recommendation}>
                    <h3>Recommended for</h3>
                    <div className={styles.palletteDiv}>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span onClick={unhide} ><img src={tabs} alt="" /></span></p>
                        </div>
                        <div ref={hide}  id={styles.detsing} className={styles.dets1}>
                                <ul>
                                    <li>High Cranking Power</li>
                                    <li>Maintenance Free</li>
                                    <li>High Heat Tolerance & Vibration Resistance</li>
                                    <li> Patented BIC vents for enhanced safety</li>
                                    <li>Long Life</li>
                                    <li>Fully sealed & tested</li>
                                    <li>Factory Charged – Ready to Use</li>
                                </ul>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                        <div className={styles.pallette}>
                            <h4>Maruti</h4>
                            <p>Show models<span><img src={tabs} alt="" /></span></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </IonContent>

    )
}

const mapDispatchToProps = {
	GetBatteryModel: GetBatteryModel
}

export default connect(null, mapDispatchToProps)(withRouter(Inner7));
