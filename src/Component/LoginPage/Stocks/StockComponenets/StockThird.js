import React from "react";
import { IonContent, IonHeader } from "@ionic/react";
import styles from "../StockCss/StockThird.module.css";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import search from "../../../../Assets/drawable-xxxhdpi/search_3.png";
import pen from "../../../../Assets/drawable-xxxhdpi/group_487.png";
import next_arrow from "../../../../Assets/drawable-xxxhdpi/next_arrow.png";

import cx from "classnames";

function StockThird() {
	return (
		<IonContent>
			<div className={styles.mainDiv}>
				<IonHeader>
					<div className={styles.nav}>
						<img src={leftarrow} alt="" />
						<h6>My Stocks</h6>
					</div>
				</IonHeader>
				<div className={styles.card}>
					<div className={cx(styles.flex, styles.cardOne)}>
						<span>
							<img src={search} alt="" />
						</span>
						<input type="text" placeholder="Search for brand" />
					</div>
					<div className={cx(styles.sections, styles.flex)}>
						<h6>All</h6>
						<h6>Advanz</h6>
						<h6>Epiq</h6>
						<h6>Gold</h6>
						<h6>Matrix</h6>
						<h6>Milea</h6>
					</div>

					{/* titled cards, card 1 */}
					<div>
						<div className={styles.cmpnySelected}>
							<h5>Advanz</h5>
						</div>
						<div className={styles.card1}>
							<div className={cx(styles.one, styles.flex)}>
								<h5>ADVZ34B19L</h5>
								<span className={styles.flex}>
									3 Batteries <img src={pen} alt="" />
								</span>
							</div>
							<div className={cx(styles.two, styles.flex)}>
								<button>
									<h6>Scheme</h6>₹ 10,000 benefit
								</button>
								<button className={styles.flex}>
									<h6>
										Update <br /> Purchase/Sales
									</h6>
									<img src={next_arrow} alt="" />
								</button>
							</div>
							<div className={styles.detailHolder}>
								<div className={cx(styles.head, styles.flex)}>
									<span>Invoice</span>
									<span>Serial Number</span>
									<span>Sell In</span>
									<span>In Stock</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockC}>
										20 Days
									</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockC}>
										20 Days
									</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockCM}>
										20 Days
									</span>
								</div>
							</div>
						</div>
						{/* sub card 1 */}
						<div className={styles.card1}>
							<div className={cx(styles.one, styles.flex)}>
								<h5>ADVZ34B19L</h5>
								<span className={styles.flex}>
									3 Batteries <img src={pen} alt="" />
								</span>
							</div>
							<div className={cx(styles.two, styles.flex)}>
								<button>
									<h6>Scheme</h6>₹ 10,000 benefit
								</button>
								<button className={styles.flex}>
									<h6>
										Update <br /> Purchase/Sales
									</h6>
									<img src={next_arrow} alt="" />
								</button>
							</div>
							<div className={styles.detailHolder}>
								<div className={cx(styles.head, styles.flex)}>
									<span>Invoice</span>
									<span>Serial Number</span>
									<span>Sell In</span>
									<span>In Stock</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockC}>
										20 Days
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* card starts here */}

					<div>
						<div className={styles.cmpnySelected}>
							<h5>Epiq</h5>
						</div>
						<div className={styles.card1}>
							<div className={cx(styles.one, styles.flex)}>
								<h5>EPIQ35R</h5>
								<span className={styles.flex}>
									2 Batteries <img src={pen} alt="" />
								</span>
							</div>
							<div className={cx(styles.two, styles.flex)}>
								<button>
									<h6>Scheme</h6>₹ 10,000 benefit
								</button>
								<button className={styles.flex}>
									<h6>
										Update <br /> Purchase/Sales
									</h6>
									<img src={next_arrow} alt="" />
								</button>
							</div>
							<div className={styles.detailHolder}>
								<div className={cx(styles.head, styles.flex)}>
									<span>Invoice</span>
									<span>Serial Number</span>
									<span>Sell In</span>
									<span>In Stock</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockC}>
										20 Days
									</span>
								</div>
								<div
									className={cx(
										styles.head,
										styles.flex,
										styles.head2
									)}
								>
									<span>123456</span>
									<span>1234 5462 9123</span>
									<span>10-04-19</span>
									<span className={styles.stockCM}>
										40 Days
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</IonContent>
	);
}

export default StockThird;
