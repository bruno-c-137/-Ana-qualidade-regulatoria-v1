import Regulacao3 from "../Pages/Regulacao3";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import LayoutBase from "../Layouts/base";
  export default function Routes() {
    return (
      <BrowserRouter>
        <LayoutBase>
          <Switch>
          <Route path="/regulacao3" component={Regulacao3} />
          </Switch>
        </LayoutBase>
      </BrowserRouter>
    );
  }