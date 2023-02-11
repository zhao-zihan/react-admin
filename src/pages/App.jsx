import "semantic-ui-css/semantic.min.css";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "../routes";
import { Routes, Route } from "react-router-dom";
import DashboardOverview from "./dashboard/DashboardOverview";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";
import Tables from "./Tables";

function App() {
  return (
    <Routes>
      <Route path={routes.HOME_PAGE.path} element={<DashboardOverview />} />
      <Route
        path={routes.DASHBOARD_OVERVIEW.path}
        element={<DashboardOverview />}
      />
      <Route path={routes.SIGN_IN.path} element={<Signin />} />
      <Route path={routes.SIGN_UP.path} element={<Signup />} />
      <Route path={routes.FORGOT_PASSWORD.path} element={<ForgotPassword />} />
      <Route path={routes.NOT_FOUND.path} element={<NotFound />} />
      <Route path={routes.TABLES.path} element={<Tables />} />
    </Routes>
  );
}

export default App;
