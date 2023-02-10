import "semantic-ui-css/semantic.min.css";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "../routes";
import { Routes, Route } from "react-router-dom";
import DashboardOverview from "./dashboard/DashboardOverview";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<DashboardOverview />} />
      <Route exact path={routes.SIGN_IN.path} element={<Signin />} />
      <Route exact path={routes.SIGN_UP.path} element={<Signup />} />
      <Route exact path={routes.FORGOT_PASSWORD.path} element={<Signin />} />
    </Routes>
  );
}

export default App;
