import { combineReducers } from "redux";
import UserReducer from './RedOne';
import search from "./Query";
import { registerReducer } from './RegisterReducer'
import { loginReducer } from './LoginReducer'
import { BatteryBrandReducer } from './BatteryReducer'
import { BatteryModelReducer } from './BatteryModelReducer'
import { CategoryReducer } from './CategoryReducer'
import { OemModelReducer } from './OemModelReducer'
import { InvoiceReducer } from './InvoiceReducer'
import { SaleReducer } from './SaleReducer'
import { PurchaseReducer } from './PurchaseReducer'
import { InvoiceSettingReducer } from './InvoiceSettingReducer'
import { otpReducer } from './OtpReducer'


const Reducer = combineReducers({
    batteries: UserReducer,
    search: search,
    register: registerReducer,
    auth: loginReducer,
    Batteries: BatteryBrandReducer,
    BatteryModel: BatteryModelReducer,
    Category: CategoryReducer,
    OemModel: OemModelReducer,
    Invoice: InvoiceReducer,
    Sale: SaleReducer,
    Purchase: PurchaseReducer,
    InvoiceSetting: InvoiceSettingReducer,
    Otp: otpReducer,
});

export default Reducer;