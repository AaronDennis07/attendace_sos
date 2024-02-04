import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import Logout from "../pages/Logout";
import Register from "../components/Register";
import AdminLoginPage from "../pages/AdminLoginPage";
import RegisterPage from "../pages/RegisterPage";
import ListApplicationsAdmin from "../components/ListApplicationsAdmin";
import ListApplicationsAdminPage from "../pages/ListApplicationsAdminPage";
import DashBoard from "../components/DashBoard";
import AddStudentPage from "../pages/AddStudentPage";
import { StudentRoute } from "./StudentRoute";
import { AdminRoute } from "./AdminRoute";
import DashBoardPage from "../pages/DashBoardPage";
import ListApplicationsPage from "../pages/ListApplicationsPage";
import NewApplicationPage from "../pages/NewApplicationPage";
import EditStudentPage from "../pages/EditStudentPage";
import ListStudenstPage from "../pages/ListStudentsPage";
import ListStudentsPage from "../pages/ListStudentsPage";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/admin/login",
      element: <AdminLoginPage/>,
    },
 
  ];

  const routesForAdminOnly = [
    {
      path: "/",
      element: <AdminRoute />, // Wrap the component in ProtectedRoute
      children: [
      
        {
          path:'/listapplications/admin',
          element:<ListApplicationsAdminPage/>
        },
        {
          path:'/addstudent',
          element:<AddStudentPage/>
        },
        {
          path:'/editstudent',
          element:<AddStudentPage/>
        },
        {
          path:'/students/list',
          element:<ListStudentsPage/>
        },
        {
          path:'/students/edit',
          element:<EditStudentPage/>
        },
      ],
    },
  ];

  
  const routesForStudentOnly = [
    {
      path: "/",
      element: <StudentRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path:'/applications/list',
          element:<ListApplicationsPage/>
        },
    
        {
          path:'/applications/new',
          element:<NewApplicationPage/>
        },
    
        {
          path:'/dashboard',
          element:<DashBoardPage/>
        }
      ],
    },
  ];

  
  const routesForNotAuthenticatedOnly = [
    
    // {
    //   path: "/login",
    //   element: <Login/>,
    // },
    // {
    //   path: "/register",
    //   element: <Login/>,
    // },
    // {
    //   path: "/admin/login",
    //   element: <Login/>,
    // },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAdminOnly,
    ...routesForStudentOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;