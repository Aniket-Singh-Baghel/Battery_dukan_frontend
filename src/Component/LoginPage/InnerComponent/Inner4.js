import React, { useEffect, useState } from "react";
import styles from "../InnerCss/Inner4.module.css";
import storeImage from "../../../Assets/battery.jfif";
import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import { useDispatch , useSelector, connect } from "react-redux";
import { Add_Battey_desc, GetBatteryModel, GetOemModel } from "../../../Store/Actions";

function Inner4(props) {
	console.log(props)
	const dispatch = useDispatch();
	const info = useSelector(state => state.batteries.batteries)
	const BatteryModel = useSelector(state => state.BatteryModel.data)
	const OemModel = useSelector(state => state.OemModel.data)
	console.log(OemModel, BatteryModel)
	const [state, setstate] = useState(null);


	useEffect(() => {
		props.GetOemModel()
		props.GetBatteryModel()
	}, [])

	let batteries = props.val;
	const inner7 = () => {
		props.history.push("/inner7");
	};

	// removing the duplicate array
	// function removeDuplicates(originalArray, prop) {
	// 	var newArray = [];
	// 	var lookupObject = {};

	// 	for (var i in originalArray) {
	// 		lookupObject[originalArray[i][prop]] = originalArray[i];
	// 	}

	// 	for (i in lookupObject) {
	// 		newArray.push(lookupObject[i]);
	// 	}
	// 	return newArray;
	// }

	// let Manufacturer;
	let display;
	let displayModel;
	let brandNameValues;
	let values = null;

	// if (batteries) {
	// 	batteries.map(data => {
	// 		return (Manufacturer = removeDuplicates(data, "OEM-Brand"));
	// 	});
	// }

	// OEM Manufacturer
	if (OemModel) {
		display = OemModel.map((data, i) => {
			if (data["OEM-Brand Name"]) {
				return (
					<option key={i} value={data["OEM-Brand Name"]}>
						{data["OEM-Brand Name"]}
					</option>
				);
			}
		});
	}

	let modelNameSelector = data => {
		brandNameValues = data.target.value;
	   let value = OemModel.map(data => {
				if (data["OEM-Brand Name"] === brandNameValues) {
					return data;
				}

			});
			let filtered = value.filter(e => typeof e !== "undefined");
			setstate(filtered);
	};

	let changeHandler;
	 changeHandler = (data) => {
		console.log(data)
		let s = data.target.value.split("*-*");	
		console.log(s)
		if(s){
		let match = BatteryModel.map(data=>{
				
					if(data["OEM-Model Name"] === s[0] && data["modelName"].includes(s[1])){
						return data 
					}

					let act = (match.filter(e => typeof e !== 'undefined'));
					console.log(act)
					dispatch(Add_Battey_desc(act[0]))
					props.history.push("/inner7");
				})
		}

	};

	
// battery model
console.log(state)
	if (state) {
		displayModel = state.map((data, i) => {
			return (
				<option key={i} value={ data["OEM-Model Name"] +"*-*"+ data["modelName"]}>
					{data["OEM-Model Name"]} ,&nbsp; &nbsp; {data["modelBrand"]}
					({data["modelName"]})
				</option>
			);
		});
	}

	return (
		<IonContent>
			<div className={styles.mainDiv}>
				<h2>Smart Battery Finder</h2>

				<div className={styles.child}>
					<div className={styles.left}>
						<img src={storeImage} alt="store" />
					</div>

					<div className={styles.right}>
						<div className={styles.card}>
							<div className={styles.accounts}>
								<div className={styles.one}>
									<h4>Select OEM/Manufacturer</h4>
									<select
										onChange={e => modelNameSelector(e)}
										name=""
										className={styles.selection}
									>
										{display}
									</select>
								</div>
								<div className={styles.one}>
									<h4>Model Name</h4>
									<select
										onChange={changeHandler}
										name=""
										className={styles.selection}
									>
										{displayModel}
									</select>
								</div>

								{/* button */}
								<div onClick={inner7} className={styles.btn}>
									<div>NEXT</div>
									<div id={styles.nextIco}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</IonContent>
	);
}

const mapDispatchToProps = {
	GetBatteryModel: GetBatteryModel,
	GetOemModel: GetOemModel
}

export default connect(null, mapDispatchToProps)(withRouter(Inner4));
