import React,{useEffect, useState} from 'react';
import { withRouter } from 'react-router';
import styling from "../InnerCss/Inner3.module.css";
import { useSelector , useDispatch, connect } from "react-redux";
import { IonContent } from '@ionic/react';
import { Add_Battey_desc, GetOemModel } from "../../../Store/Actions";

function Inner3(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        props.GetOemModel()
    }, [])

    let mainState = useSelector(state => state)
    // let mainStatebattery = mainState.batteries.batteries;
    // let displayedState = mainState.search.opt[0];
    let OemModel = useSelector(state => state)
    console.log(OemModel.OemModel)
    let mainStatebattery = OemModel.OemModel.data;
    let displayedState = OemModel.search.opt[0];

    const inner4 = ()=>{
        props.history.push("/inner4")
    }

    


    // const onclick = (e)=>{
    //     if(e){
    //         if(state){
    //             if(state[e.target.textContent]){
    //                 setstate((prevstate) => ({
    //                     ...prevstate,
    //                     [e.target.textContent]: null
    //                   }));
    //                 e.target.style.border = '1px solid #d4d4d4';
    //             }
    //             else{
    //                 e.target.style.border = '1px solid blue';
    //                 setstate((prevstate) => ({
    //                     ...prevstate,
    //                     [e.target.textContent]: e.target.className
    //                   }));                
    //             }
    //         }
            
    //         else{
    //             e.target.style.border = '1px solid blue';
    //             setstate((prevstate) => ({
    //                 ...prevstate,
    //                 [e.target.textContent]: e.target.className
    //               }));                
    //         }
    //     }
    
    // }


    let realData = mainStatebattery.map((data,i)=>{
        if(data["OEM-Model Name"] === displayedState){
            return (
                data
            )
        }
    })

    const inner7  =(e) =>{
        console.log(e)
        props.history.push("/inner7");
        dispatch(Add_Battey_desc(e))
    }

    let d =(realData.filter(e => typeof e !== 'undefined'));
    console.log(d);
    let n;
    if(d){
        n = d.map((e, i) => {
            console.log(d)
                return(
                    <div onClick={()=>inner7(e)} key={i} id={styling.one} className={styling.t1}>
                        {e["OEM-Brand"]} &nbsp; {e["OEM-Model-Name"]} {e["FUEL TYPE"]} {e["modelName"]}
                    </div>
                )
        })
    }


    return (
        <IonContent>
        <div className={styling.mainDiv}>
            <main className={styling.cardHolder}>
                <h2>{displayedState}</h2>
                
                {n}

                {/* <div className={styling.t1}>
                    Ford Fiesta Classic 1.6 Petrol
                </div>
                <div className={styling.t1}>
                    Ford Figo 1.2 Petrol
                </div>
                <div className={styling.t1}>
                    Ford New Ikon 1.4 Diesel
                </div>
                <div className={styling.t1}>
                    Ford Mondeo Diesel
                </div> */}
               

                <div onClick={inner4} className={styling.btn}>
                    <div  className={styling.btnInner}>
                        <div>NEXT </div>
                        <div id={styling.nextIco}></div>
                    </div>
                </div>
            </main>
        </div>
        </IonContent>

    )
}

const mapDispatchToProps = {
	GetOemModel: GetOemModel,
}
  

export default connect(null, mapDispatchToProps)(withRouter(Inner3));