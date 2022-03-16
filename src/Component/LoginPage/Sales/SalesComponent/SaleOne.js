import { IonContent, IonHeader } from "@ionic/react";
import React, { useEffect } from "react";

import styles from "../SalesCss/SaleOne.module.css";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import search from "../../../../Assets/drawable-xxxhdpi/search_3.png";
import amaron from "../../../../Assets/drawable-xxxhdpi/amaron.png";
import arrow from "../../../../Assets/drawable-xxxhdpi/arrow.png";
import sf_sonic from "../../../../Assets/drawable-xxxhdpi/sf_sonic.png";
import exide from "../../../../Assets/drawable-xxxhdpi/exide.png";
import luminous from "../../../../Assets/drawable-xxxhdpi/luminous.png";
import tata_batteries from "../../../../Assets/drawable-xxxhdpi/tata_batteries.png";
import okaya from "../../../../Assets/drawable-xxxhdpi/okaya.png";
import { connect } from 'react-redux'
import { GetBatteryBrand, Add_Battey_desc } from '../../../../Store/Actions'
import cx from "classnames";

function SaleOne(props) {

	useEffect(() => {
		props.GetBatteryBrand()
	}, [])

	let BrandLogo;
    if(props.BatteryBrand.Batteries.data){
		BrandLogo = props.BatteryBrand.Batteries.data.map((data, i) => {
			return (
				<div key={i} onClick={() => saleTwo(data)} className={cx(styles.pallette, styles.flex)}>
					<img src={data["brand logo"]} alt="" />
					<span className={styles.flex}>
						75 Batteries <img src={arrow} alt="" />
					</span>
			</div>
			)
		})
	}
	 
	const saleTwo = productBrand => {
		props.Add_Battey_desc(productBrand)
		props.history.push("/Saletwo");
  };

	return (
		<IonContent>
			<div className={styles.mainDiv}>
				<IonHeader>
					<div className={styles.nav}>
						<img src={leftarrow} alt="" />
						<h6>My Sales</h6>
					</div>
				</IonHeader>
				<div className={styles.card}>
					<div className={cx(styles.flex, styles.cardOne)}>
						<span>
							<img src={search} alt="" />
						</span>
						<input type="search" placeholder="Search for brand"></input>
					</div>
					{/* pallette starts here */}
					{BrandLogo}
					{/* <div className={cx(styles.pallette, styles.flex)}>
						<img src={amaron} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={sf_sonic} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={exide} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={luminous} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={tata_batteries} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={okaya} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={okaya} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
					<div className={cx(styles.pallette, styles.flex)}>
						<img src={okaya} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
                    <div className={cx(styles.pallette, styles.flex)}>
						<img src={okaya} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div>
                    <div className={cx(styles.pallette, styles.flex)}>
						<img src={okaya} alt="" />
						<span className={styles.flex}>
							75 Batteries <img src={arrow} alt="" />
						</span>
					</div> */}
				</div>
			</div>
		</IonContent>
	);
}

const mapStateToProps = (state) => ({
	BatteryBrand: state
  });

const mapDispatchToProps = {
	GetBatteryBrand,
	Add_Battey_desc
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleOne);
