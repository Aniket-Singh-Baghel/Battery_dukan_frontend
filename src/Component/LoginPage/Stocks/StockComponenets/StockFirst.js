import {React, useEffect, useState} from "react";
import styles from "../StockCss/StockFirst.module.css";
import { IonContent, IonHeader } from "@ionic/react";
import leftarrow from "../../../../Assets/drawable-xxxhdpi/left_arrow_2.png";
import Icoone from "../../../../Assets/drawable-xxxhdpi/group_2461.png";
import Icotwo from "../../../../Assets/drawable-xxxhdpi/group_2462.png";
import Icothree from "../../../../Assets/drawable-xxxhdpi/group_2463.png";
import filter from "../../../../Assets/drawable-xxxhdpi/filter.png";
import search from "../../../../Assets/drawable-xxxhdpi/search.png";
import cx from "classnames";
import LoginAxios from '../../../../Utils/AxiosConfig'
import axios from 'axios'

function StockFirst(props) {

  const newHandler = () => {
    props.history.push("/log2");
  };

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
          <div className={styles.circle}>
            500
            <h6>Batteries in stock</h6>
            <div></div>₹ 5,00,000
            <h6>Value of total stock</h6>
          </div>
          <div className={styles.col}>
            <div>
              <div id={styles.f} className={styles.dot}></div>
              <div className={styles.elem}>
                <div className={styles.elem1}>220</div>
                <div className={styles.elem2}>Amaron</div>
              </div>
            </div>
            <div>
              <div id={styles.s} className={styles.dot}></div>
              <div className={styles.elem}>
                <div className={styles.elem1}>160</div>
                <div className={styles.elem2}>SF Sonic</div>
              </div>
            </div>
            <div>
              <div id={styles.t} className={styles.dot}></div>
              <div className={styles.elem}>
                <div className={styles.elem1}>80</div>
                <div className={styles.elem2}>Exide</div>
              </div>
            </div>
            <div>
              <div id={styles.fo} className={styles.dot}></div>
              <div className={styles.elem}>
                <div className={styles.elem1}>40</div>
                <div className={styles.elem2}>Livguard</div>
              </div>
            </div>
          </div>
          <div className={styles.btm}>
            <h4>90 batteries in stock more than 1 month!!</h4>
            <button>
              View Stocks <img src={leftarrow} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.bgn}>
          <h3 className={styles.hed}>Update Your Stocks</h3>
          <div className={styles.ico}>
            <div>
              <img src={Icoone} />
              <h4>Purchase</h4>
            </div>
            <div>
              <img src={Icotwo} />
              <h4>Sales</h4>
            </div>
            <div>
              <img src={Icothree} />
              <h4>Warranty</h4>
            </div>
          </div>
        </div>
        <div className={styles.btmbck}>
          <div className={styles.head}>
            <h3>Recent Activities</h3>
            <div>
              <img src={search} alt="" />
              <img src={filter} alt="" />
            </div>
          </div>
          <div className={cx(styles.btmCard, styles.sm)}>
            <h3 className={styles.header}>Exide Instabrite IB1350</h3>
            <div className={cx(styles.fstyle, styles.flex)}>
              <h6>Serial: 1234 5678 2364 1235</h6>
              <h6 className={styles.flex}>
                Sale <span className={cx(styles.smdos)}></span>{" "}
              </h6>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={styles.tdot}>
                <span className={cx(styles.smdos, styles.cl)}></span>
                <span className={cx(styles.smdos, styles.cl1)}></span>
                <span className={cx(styles.smdos, styles.cl2)}></span>
                <div className={styles.hrl}></div>
              </div>
              <div className={cx(styles.flex)} id={styles.seconf}>
                <div>
                  <h6 className={styles.fstyle}>Purchase</h6>
                  <h4 className={styles.bstyle}>10-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Sale</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Warranty</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
              </div>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={cx(styles.flex)} id={styles.seconfs}>
                <div>
                  <h6 className={styles.fstyle}>Invoice</h6>
                  <h4 className={styles.bstyle}>123456</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>MOP Price</h6>
                  <h4 className={styles.bstyle}>₹66,990</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Distributor</h6>
                  <h4 className={styles.bstyle}>Varun</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.btmCard, styles.sm)}>
            <h3 className={styles.header}>Exide Instabrite IB1350</h3>
            <div className={cx(styles.fstyle, styles.flex)}>
              <h6>Serial: 1234 5678 2364 1235</h6>
              <h6 className={styles.flex}>
                Sale <span className={cx(styles.smdos)}></span>{" "}
              </h6>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={styles.tdot}>
                <span className={cx(styles.smdos, styles.cl)}></span>
                <span className={cx(styles.smdos, styles.cl1)}></span>
                <span className={cx(styles.smdos, styles.cl2)}></span>
                <div className={styles.hrl}></div>
              </div>
              <div className={cx(styles.flex)} id={styles.seconf}>
                <div>
                  <h6 className={styles.fstyle}>Purchase</h6>
                  <h4 className={styles.bstyle}>10-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Sale</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Warranty</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
              </div>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={cx(styles.flex)} id={styles.seconfs}>
                <div>
                  <h6 className={styles.fstyle}>Invoice</h6>
                  <h4 className={styles.bstyle}>123456</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>MOP Price</h6>
                  <h4 className={styles.bstyle}>₹66,990</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Distributor</h6>
                  <h4 className={styles.bstyle}>Varun</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.btmCard, styles.sm)}>
            <h3 className={styles.header}>Exide Instabrite IB1350</h3>
            <div className={cx(styles.fstyle, styles.flex)}>
              <h6>Serial: 1234 5678 2364 1235</h6>
              <h6 className={styles.flex}>
                Sale <span className={cx(styles.smdos)}></span>{" "}
              </h6>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={styles.tdot}>
                <span className={cx(styles.smdos, styles.cl)}></span>
                <span className={cx(styles.smdos, styles.cl1)}></span>
                <span className={cx(styles.smdos, styles.cl2)}></span>
                <div className={styles.hrl}></div>
              </div>
              <div className={cx(styles.flex)} id={styles.seconf}>
                <div>
                  <h6 className={styles.fstyle}>Purchase</h6>
                  <h4 className={styles.bstyle}>10-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Sale</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Warranty</h6>
                  <h4 className={styles.bstyle}>18-04-2019</h4>
                </div>
              </div>
            </div>
            <div className={cx(styles.subdiv1)}>
              <div className={cx(styles.flex)} id={styles.seconfs}>
                <div>
                  <h6 className={styles.fstyle}>Invoice</h6>
                  <h4 className={styles.bstyle}>123456</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>MOP Price</h6>
                  <h4 className={styles.bstyle}>₹66,990</h4>
                </div>
                <div>
                  <h6 className={styles.fstyle}>Distributor</h6>
                  <h4 className={styles.bstyle}>Varun</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
}

export default StockFirst;
