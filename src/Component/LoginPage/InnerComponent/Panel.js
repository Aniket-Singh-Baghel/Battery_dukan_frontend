import React, { useRef,useState } from "react";
import styles from "../InnerCss/Panel.module.css";

// animation
import Fade from "react-reveal/Fade";

// icons and Images
import user from "../../../Assets/Icons/user.png";
import ellipse_122 from "../../../Assets/Icons/ellipse_122.png";
import stock from "../../../Assets/drawable-xxxhdpi/Stock.png";
import sales from "../../../Assets/drawable-xxxhdpi/Sales.png";
import batteryInventory from "../../../Assets/drawable-xxxhdpi/batteryInventory.png";
import finder from "../../../Assets/drawable-xxxhdpi/battery_empty.png";
import deal from "../../../Assets/drawable-xxxhdpi/deal.png";

function Panel(props) {
	console.log(props)

	const main = useRef();

	const callToAction = navigateTo => {
		// props.history.push(`${navigateTo}`);
	};

	const logOutHandler = (e) => {
		localStorage.removeItem('accessToken')
	}

	return (
		<Fade right when={props.show}>
			<div ref={main} className={styles.main}>
				{/* heading */}
				<div className={styles.head}>
					<div className={styles.cir}></div>
					<h4>Mr. Aman Singh</h4>
					<h5>Senior Executive sales</h5>
					<h6>Lorem, ipsum dolornatus?</h6>
				</div>
				{/* Profile */}
				<div
					onClick={() => callToAction("/profile")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={user}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>Profile</h4>
					</div>
				</div>
				{/* Purchase */}
				<div
					onClick={() => callToAction("/purchase1")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={deal}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>Purchase</h4>
					</div>
				</div>
				{/* Sales */}
				<div
					onClick={() => callToAction("/SaleOne")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={sales}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>Sales</h4>
					</div>
				</div>
				{/* Stock */}
				<div
					onClick={() => callToAction("/StockFirst")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={stock}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>Stock</h4>
					</div>
				</div>
				{/* Create Invoice */}
				<div
					onClick={() => callToAction("/Invoice1")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={batteryInventory}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>Invoice</h4>
					</div>
				</div>
				{/* finder */}
				<div
					onClick={() => callToAction("/inner1")}
					className={styles.elem1}
				>
					<div className={styles.icon}>
						<img
							className={styles.ellipse}
							src={ellipse_122}
							alt=""
						/>
						<img
							className={styles.user}
							src={finder}
							alt="userIcon"
						/>
					</div>
					<div className={styles.name}>
						<h4>finder</h4>
					</div>
				</div>
				<div onClick={logOutHandler} className={styles.logOut}>
					<h5>Logout</h5>
				</div>
			</div>
		</Fade>
	);
}

export default Panel;
