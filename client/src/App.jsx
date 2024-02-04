import Register from "./components/Register"
import Login from "./components/Login"
import DashBoard from "./components/DashBoard"
import Navbar from "./components/Navbar"
import ListApplications from "./components/ListApplications"
import NewApplication from "./components/NewApplication"
import AddStudent from "./components/AddStudent"
import AdminLogin from "./components/AdminLogin"
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <div  >
      {/* <Register/>
        */}
        {/* <Navbar/> */}
        {/* <Login/> */}
        {/* <DashBoard/> */}
        {/* <ListApplications/> */}
        {/* <NewApplication/> */}
{/* <AddStudent/> */}
{/* <AdminLogin/> */}
<ToastContainer limit={1} autoClose={2000} position="top-center" />
<AuthProvider>
      <Routes />

    </AuthProvider>
    </div>
  )
}

export default App
