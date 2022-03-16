import { IonContent  } from '@ionic/react';
import React,{useState ,useEffect} from 'react';
import styles from "../InnerCss/Inner1.module.css";
import { useSelector , useDispatch } from "react-redux";
import { Add_optionSearch_desc, GetCategory, GetOemModel, GetBatteryModel } from "../../../Store/Actions";
import { connect } from 'react-redux'

function Inner2(props) {

    const [state, setstate] = useState(null)

    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.search.search[0])
    const OemModel = useSelector(state => state.OemModel.data);
    const Category = useSelector(state => state.Category.data);
    const batteryModel = useSelector(state => state.BatteryModel.data)
    console.log(batteryModel)

    useEffect(() => {
        props.GetOemModel()
        props.GetCategory()
        props.GetBatteryModel()
    }, [])
    let result;
    // let filtered;     
    if(searchQuery && batteryModel){
       result = batteryModel.map((data,i)=>{
              if(data["subcategoryName"] === searchQuery){
                    return(
                        data
                    )
                }   
            })
        //  filtered = result.filter(e => typeof e !== "undefined");
        //     setstate(filtered)
        //     console.log(filtered)
    }
// console.log(filtered )
// let filteredData;
// if(filtered){
//      filteredData = filtered.map((data) => {
//          return  data["OEM-Model Name"]
//      })
// }
// console.log(filteredData )
    let card;
    if(result){
        let filtered = result.filter(e => typeof e !== "undefined");
        console.log(filtered)
        card = filtered.map((dat,i)=>{
            return(
                <div onClick={()=>onclick(dat["OEM-Model Name"])}  key={i} className={styles.smCard}>
                    <div id={styles.one}>
                        <img src={dat["Oem-Model-Images"]} alt="Brand-car-img" />
                    </div>
                    {/* <div>{dat["OEM-Brand Name"]}</div> */}
                    <h6>{dat["OEM-Model Name"]}</h6>
                </div>
            )
        })
    }
        
    const onclick =(dat)=>{
        dispatch(Add_optionSearch_desc(dat));
        props.history.push('/inner3')
    }
    
    

    return (
        <IonContent>
            <div className={styles.mainDiv}>
                <div className={styles.naver}>
                    <h1>{searchQuery}</h1>
                    <div className={styles.search}>
                        <input type="text"  placeholder="search" />
                        <input type="submit" />
                    </div>
                </div>

                {/* card */}
                <div className={styles.card}>
                    {card}
                </div>
                {/* button */}
                <div  onClick={onclick}  className={styles.btn}>
                    <div className={styles.btnInner}>
                        <div>NEXT </div>
                        <div id={styles.nextIco}></div>
                    </div>
                </div>
            </div>
        </IonContent>
    )
}

const mapDispatchToProps = {
	GetOemModel: GetOemModel,
	GetCategory: GetCategory,
    GetBatteryModel: GetBatteryModel,
}
  

export default connect(null, mapDispatchToProps)(Inner2);
