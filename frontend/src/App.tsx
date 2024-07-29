import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import Employees from "./pages/employees/Employees";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Leaves from "./pages/leaves/Leaves";
import Departments from "./pages/departments/Departments";
import Assets from "./pages/assets/Assets";
import AssetInfo from "./pages/assetinfo/AssetInfo";
import Holidays from "./pages/holidays/Holidays";
import PaySlip from "./pages/payslip/Payslip";
import Attendance from "./pages/attendance/Attendance";
import Policy from "./pages/policy/Policy";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/employees",
          element: <Employees />
        },
        {
          path:"/attendance",
          element:<Attendance/>
        },
        {
          path: "/leaves",
          element: <Leaves />
        },
        {
          path: "/departments",
          element: <Departments />
        },
        {
          path: "/holidays",
          element: <Holidays/>
        },
        {
          path: "/payslip",
          element: <PaySlip/>
        },
        {
          path:"/policy",
          element:<Policy/>
        },
        {
          path: "/assets",
          element:<Assets/>
        },
        {
          path:"/assetinfo",
          element:<AssetInfo/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
