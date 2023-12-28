import  ReactDOM  from "react-dom";
import App from "./App";
import {reducer} from "./config/reducer";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

const str = legacy_createStore(reducer);

const root = document.getElementById("root");

ReactDOM.render(
<Provider store={str}>
<App/>
</Provider>
,root);

