import React, { useEffect,useState } from "react";
import normals from "../InnerCss/Inter2.module.css";

// Icons
import menu from "../../../Assets/drawable-xxxhdpi/menu_5.png";
import search from "../../../Assets/drawable-xxxhdpi/search_3.png";
import right from "../../../Assets/drawable-xxxhdpi/right_arrow_6.png";
import close from "../../../Assets/Icons/close_white.png";

import deal from '../../../Assets/drawable-xxxhdpi/deal.png'
import stock from "../../../Assets/drawable-xxxhdpi/Stock.png";
import sales from "../../../Assets/drawable-xxxhdpi/Sales.png";

import { withRouter } from "react-router";
import { IonContent } from "@ionic/react";
import { Add_Search ,Add_directSearch_desc, GetBatteryBrand, GetCategory } from "../../../Store/Actions";
import { useSelector, useDispatch, connect } from "react-redux";
import Panel from "./Panel";
import jwt_decode from 'jwt-decode'


function Inter1(props) {
	const [state, setstate] = useState(null)

	// getting the data to show
	// const User = useSelector(state => state.auth)
	const Battery = useSelector(state => state.Batteries.data)
	const Category = useSelector(state => state.Category.data)
	// for the search dispatch
	const dispatch = useDispatch();
	let byProduct;
	let byBrand;

	

	// console.log(User)
	// let UserDetails;
	// if(User){
	// 	UserDetails = User.users.success[0]
	// }
	// console.log(UserDetails);

	useEffect(() => {
		props.GetBatteryBrand()
		props.GetCategory()
	}, [])

	const callToAction = (navigateTo) => {
		props.history.push(`${navigateTo}`);
	};

	// display unique car/product
	if (Category) {
		byProduct = Category.map((product, i) => {
			return (
				<div
					key={i}
					className={normals.cone}
					onClick={() => inner2(product["categoryName"])}
				>
					<img src={product["categoryIcon"]} alt="" />
					<h3>{product["categoryName"]}</h3>
					<span>Battery</span>
				</div>
			);
		});
	}

	// to car/product diplay page
	const inner2 = productTypeName => {
		dispatch(Add_Search(productTypeName))
		props.history.push("/inner2");
	};

  // to battery brand display page
	const inner6 = productBrand => {
		dispatch(Add_Search(productBrand))
		props.history.push("/inner6");
  };

	  if (Battery) {
		console.log(Battery);
		  byBrand = Battery.map((products, i) => {
			  return (
				  <div
					  key={i}
					  onClick={() => inner6(products.brandName)}
					  className={normals.cone}
				  >
					  <img src={products["brand logo"]} alt="" />
					  <h3>{products.brandName}</h3>
				  </div>
			  );
		  });
	  }

	const inner4 = () => {
		props.history.push("/inner4");
	};

	// handling the enter on search
	const _handleKeyDown = (e) => {
		if (e.key === "Enter") {
			dispatch(Add_directSearch_desc(state.DirectSearch))
			props.history.push("/inner6");
		}
	};

	const changeHandler =(daat)=>{
		setstate({[daat.target.name]:daat.target.value});
	}

	const [ShowPanelState, setPanelState] = useState({show:false});

	// Nav Opener
	const navOpener =()=>{
		if(ShowPanelState.show === false){
			setPanelState({show:true})
		}
		else{
			setPanelState({show:false})
		}
	};
	console.log(props);
	return (
		<IonContent>
			<div className={normals.mainDiv}>
				<div>
					<Panel show = {ShowPanelState.show}></Panel>
				</div>
				<nav>
					<div onClick={() => navOpener()} className={normals.icon}>
						{ ShowPanelState.show ? <img src={close} alt="close-Icon" />:<img src={menu} alt="icon" />}
					</div>
					<div
						onClick={() => props.history.push("/profile")}
						className={normals.nav2}
					>
						<h3>Hi,</h3>
						<div className={normals.circle}>
							<img
								src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</div>
				</nav>
				<div className={normals.smartSearch}>
					<div className={normals.search}>
						<span>
							<img src={search} alt="" />
						</span>
						<input
							onKeyDown={(e)=>_handleKeyDown(e)}
							type="text"
							name="DirectSearch"
							placeholder="Search for battery, brand etc.."
							onChange={changeHandler}
						/>
					</div>
					
					<div className={normals.navigation}>
						<div onClick={() => callToAction("/Purchase1")} className={normals.navchild}>
							<div className={normals.img}>
								<img src={deal} alt="" />
							</div>
							<h4>Purchase</h4>
						</div>
						<div onClick={() => callToAction("/SaleOne")} className={normals.navchild}>
							<div className={normals.img}>
								<img src={sales} alt="" />
							</div>
							<h4>Sales</h4>
						</div>
						<div onClick={() => callToAction("/StockFirst")} className={normals.navchild}>
							<div className={normals.img}>
								<img src={stock} alt="" />
							</div>
							<h4>Stock</h4>
						</div>
					</div>
					
					{/* <div className={normals.smSearch}>
						<h3>Use our smart battery finder</h3>
						<p>
							You can easily find the batteries suiting to your
							client’s requirements.
						</p>
						<div className={normals.three}>
							<div>
								<div>
									<div className={normals.same}>1</div>
									<h4 className={normals.sameh}>Select</h4>
								</div>
								<div>
									<div className={normals.same}>2</div>
									<h4 className={normals.sameh}>Search</h4>
								</div>
								<div>
									<div className={normals.same}>3</div>
									<h4 className={normals.sameh}>Go</h4>
								</div>
							</div>
							<div onClick={inner4} className={normals.arrow}>
								<img src={right} alt="" />
							</div>
						</div>
					</div> */}
				</div>
				<div className={normals.arrangement}>
					<h1>Explore Batteries</h1>
					<div className={normals.one}>
						<h2>By Car/Product type</h2>
						<div className={normals.card}>{byProduct}</div>
					</div>
					<div className={normals.one}>
						<h2 id={normals.two}>By Battery Brand</h2>
						<div className={normals.card}>{byBrand}</div>
					</div>
				</div>
				{/* <div>
					{kuchh}
				</div> */}
			</div>
		</IonContent>
	);
}


const mapDispatchToProps = {
	GetBatteryBrand: GetBatteryBrand,
	GetCategory: GetCategory
}
  

export default connect(null, mapDispatchToProps)(withRouter(Inter1));