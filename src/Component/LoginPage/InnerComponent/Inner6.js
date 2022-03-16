import React,{useState,useEffect} from 'react';
import styles from "../InnerCss/Inner6.module.css";
import filterimg from "../../../Assets/drawable-xxxhdpi/group_5.png";
import { withRouter } from 'react-router';
import { useSelector ,useDispatch, connect } from "react-redux";
import { Add_Battey_desc, GetBatteryModel } from "../../../Store/Actions";
import { IonContent } from '@ionic/react';



function Inner6(props) {
    
    let searchQuery = useSelector(state => state.search.search)
    const BatteryModel = useSelector(state => state.BatteryModel.data)
    const directSearch = useSelector(state => state.search.directSearch)

    useEffect(() => {
       props.GetBatteryModel()
    }, [])
    
    let searchingDirectly;

    if(BatteryModel){
        if(directSearch[0]){
          var n =  BatteryModel.map(data=>{
                console.log(data["modelBrand"])
                 if((data.modelName.toLowerCase()).includes(directSearch[0].toLowerCase()) || (data["modelBrand"].toLowerCase()).includes(directSearch[0].toLowerCase())){   
                    return(
                            data
                        )
                    }
                    
                })
            if(n){
                searchingDirectly = n.map(dat=>{
                    if(dat){
                        return dat  
                    }
                })
            }
        }
    }
   
        

    

    const dispatch = useDispatch();
    
    const Inner7 =(desc)=>{
        dispatch(Add_Battey_desc(desc))
        props.history.push("inner7")
    }

    // q 
    let result;
    if(searchQuery && BatteryModel){
        result = BatteryModel.map((data,i)=>{
        if(data["modelBrand"] === searchQuery[0]){
                    return(
                        data
                    )
                }   
        })
    }

    if(searchingDirectly){
        console.log(searchingDirectly)
        result = searchingDirectly.filter(e => typeof e !== 'undefined');
    }

    let card;
    if(result){
        let filtered = result.filter(e => typeof e !== "undefined");
     

        card = filtered.map((dat,i)=>{

            // console.log(`1.${dat["brandName"]} 2. ${dat["modelBrand"]} 3. ${dat["modelName"]} 4.${dat["primaryName"]}`);
            // console.log(dat);

            let name;
            let one = dat.modelName.split(" ");

            if(one.length > 1 || dat["modelBrand"] === one[0]){
                name = dat["modelBrand"] +" "+ one[1];
            }else name = dat["modelBrand"] +" "+ dat.modelName;


            let searched = String(name).length > 19 ? name.substring(0,18) + ".." : name = name;

            return(
                <div key={i}  onClick={() => Inner7(dat)} className={styles.card}>
                    <img src= {dat.modelIcon}  alt="Battery-Image" />
                    <div className={styles.cntnt}>
                        <h2> 
                        <span>{searched}</span>
                        </h2>
                        <h5>Capacity: {dat["currentCapaCity (value)"] +" "+ "Ah"}</h5>
                        <h5>Warranty: { dat["warranty (value)"] +" "+ "Months"}</h5>
                        <div>
                            <div className={styles.c}>
                                <h4>MRP: {"Rs" +" "+ dat["mrp (value)"]}</h4>
                                <h4>NLC: {dat["nlc (value)"]}</h4>
                            </div>
                            <div>DP: {"Rs" +" "+ dat["dp (value)"]}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }
     

    // mrp = mrp (unit): "Rs" +  mrp (value): "1243"
    // nlc (unit): "" + nlc (value): "0"
    // dp (unit): "Rs" + dp (value): "750"
    // warranty (unit): "Months" + warranty (value): "18"
    // ProductImg
    // currentCapaCity (unit): "Ah" + currentCapaCity (value): "3"




    return (
        <IonContent>

        <div className={styles.mainDiv}>
            <header>
                <h1>Search Results</h1>
                <div className={styles.filter}>
                    <img src={filterimg} alt="" />
                    <h5>FILTERS</h5>
                </div>
            </header>
            <div className={styles.suggest}>
                <div className={styles.capsule}>Bosch  <span>X</span></div>
                <div className={styles.capsule}>7-10 AH  <span>X</span></div>
                <div className={styles.capsule}>₹1500-2000  <span>X</span></div>
                <div className={styles.capsule}>Quality  <span>X</span></div>
                <div className={styles.capsule}>Warranty  <span>X</span></div>
                <div className={styles.capsule}>Time duration  <span>X</span></div>
            </div>
            <section>
               {card}      
            </section>
        </div>
        </IonContent>

    )
}

const mapDispatchToProps = {
	GetBatteryModel: GetBatteryModel
}

export default connect(null, mapDispatchToProps)(withRouter(Inner6));


