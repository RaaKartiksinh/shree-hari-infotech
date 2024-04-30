import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./features/Auth/LoginPage";
import SignupPage from "./features/Auth/SignupPage";
import ForgotPassword from "./features/Auth/ForgotPassword";
import AdminDrawer from "./components/AdminDrawer/AdminDrawer";
import path from "./app/common/path";
import SiteManagement from "./pages/SiteManagement";
import SupervisorManagement from "./pages/SupervisorManagement";
import Protected from "./features/Auth/Protected";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Protected />}>
          <Route
            path={path.dashboard}
            element={
              <AdminDrawer>
                <Dashboard />
              </AdminDrawer>
            }
          />
          <Route
            path={path.siteManagementList}
            element={
              <AdminDrawer>
                <SiteManagement />
              </AdminDrawer>
            }
          />
          <Route
            path={path.supervisorManagementList}
            element={
              <AdminDrawer>
                <SupervisorManagement />
              </AdminDrawer>
            }
          />
        </Route>

        <Route path={path.login} element={<LoginPage />} />
        <Route path={path.signup} element={<SignupPage />} />
        <Route path={path.forgotPassword} element={<ForgotPassword />} />
        <Route path={path[404]} element={<> Page not found </>} />
      </Routes>

    </>
  );
}

export default App;
