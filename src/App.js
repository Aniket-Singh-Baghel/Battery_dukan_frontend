import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IonApp, IonContent } from "@ionic/react";
import data from "./products.json";
import { Add_Action } from "./Store/Actions";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import './theme/variables.css';

import LoginPage from "./Component/LoginPage/LoginPage";
import BussinessType from "./Component/LoginPage/LoginComponent/BussinessType";
import BrandDetail from "./Component/LoginPage/LoginComponent/BrandDetail";
import first from "./Component/LoginPage/LoginComponent/First";
import Inner1 from "./Component/LoginPage/InnerComponent/Inter1";
import Inner2 from "./Component/LoginPage/InnerComponent/Inner2";
import Inner3 from "./Component/LoginPage/InnerComponent/Inner3";
import Inner4 from "./Component/LoginPage/InnerComponent/Inner4";
import Inner5 from "./Component/LoginPage/InnerComponent/Inner5";
import Inner6 from "./Component/LoginPage/InnerComponent/Inner6";
import Inner7 from "./Component/LoginPage/InnerComponent/Inner7";
import profile from "./Component/LoginPage/InnerComponent/Profile";
import Otp from "./Component/LoginPage/InnerComponent/Otp";
import verification from "./Component/LoginPage/InnerComponent/Verification";
import Purchase1 from "./Component/LoginPage/Purchase/PurchaseComponent/Purchase1";
import Purchase2 from "./Component/LoginPage/Purchase/PurchaseComponent/Purchase2";
import Invoice1 from "./Component/LoginPage/SalesInvoices/Components/Invoice1";
import StockFirst from "./Component/LoginPage/Stocks/StockComponenets/StockFirst";
import SecondStock from "./Component/LoginPage/Stocks/StockComponenets/SecondStock";
import StockThird from "./Component/LoginPage/Stocks/StockComponenets/StockThird";
import SaleOne from "./Component/LoginPage/Sales/SalesComponent/SaleOne";
import SaleTwo from "./Component/LoginPage/Sales/SalesComponent/SaleTwo";
import Ledger1 from "./Component/LoginPage/Ledger/LedgerComponent/Ledger1";
import ProfitLoss from "./Component/LoginPage/ProfitLoss/ProfitLossComponent/ProfitLoss";
import Register1 from "./Component/Register/RegisterComponents/Register1";
import Invoice from './Component/LoginPage/Invoice/InvoiceComponenet/Invoice'
import InvoiceSetting from './Component/LoginPage/Invoice/InvoiceComponenet/InvoiceSetting'


// panel for navigation
import Panel from "./Component/LoginPage/InnerComponent/Panel";
import { connect } from "react-redux";

class App extends Component {
  state = {
    Token: "",
  };

  // adding to the battery Reducer
  addingToStore() {
    let dataName = data.map((data) => {
      return data;
    });
    this.props.Add_Action(dataName);
  }

  componentDidMount() {
    this.addingToStore();
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <BrowserRouter>
            <Switch>
              {/* Registration section */}
              <Route path="/Register" component={Register1} />

              {/* Profit&Loss section */}
              <Route path="/ProfitLoss" component={ProfitLoss} />

              {/* ledger section */}
              <Route path="/Ledger1" component={Ledger1} />
              {/* <Route path="/Ledger2" component={Ledger2} /> */}
              
              {/* panel for navigtion */}
              <Route path="/Panel" component={Panel} />


              {/* login/Onboarding screens */}
              <Route
                path="/log1"
                component={() => <LoginPage token={this.state.Token} />}
              />
              <Route path="/log2" component={BussinessType} />
              <Route path="/log3" component={BrandDetail} />

              {/* screens after login */}
              <Route path="/inner1" component={Inner1} />
              <Route path="/inner2" component={Inner2} />
              <Route path="/inner3" component={Inner3} />
              <Route
                path="/inner4"
                render={() => <Inner4 val={this.props.states} />}
              />
              <Route path="/inner5" component={Inner5} />
              <Route path="/inner6" component={Inner6} />
              <Route path="/inner7" component={Inner7} />

              {/* profile */}
              <Route path="/profile" component={profile} />

              {/* purchase section */}
              <Route path="/purchase1" component={Purchase1} />
              <Route path="/purchase2" component={Purchase2} />

              {/* invoice section */}
              <Route path="/invoice1" component={Invoice1} />
              <Route path="/invoice" component={Invoice} />
              <Route path="/InvoiceSetting" component={InvoiceSetting} />


              {/* stock section */}
              <Route path="/StockFirst" component={StockFirst} />
              <Route path="/SecondStock" component={SecondStock} />
              <Route path="/StockThird" component={StockThird} />
              {/* sales section */}
              <Route path="/SaleOne" component={SaleOne} />
              <Route path="/Saletwo" component={SaleTwo} />

              {/* OTP / verification screen  */}
              <Route path="/otp" component={Otp} />
              <Route path="/one" component={verification} />
              <Route path="/" component={first} />
            </Switch>
          </BrowserRouter>
        </IonContent>
      </IonApp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: state.batteries.batteries,
  };
};

const mapDispatchToProps = {
  Add_Action,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);