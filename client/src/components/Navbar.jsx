import React from 'react';
import { useAuth } from '../provider/authProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {token,setToken} = useAuth()
  const navigate = useNavigate()
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <NavLink to={token.role === "USER" ?  "/dashboard" : "/listapplications/admin"}>Home </NavLink>

            </li>
            <li>
            <NavLink to={token.role === "USER" ?  "/applications/list" : "/addstudent"}>{token.role === "USER" ?  "View applications" : "Add Student"} </NavLink>
            </li>
            <li>
            <NavLink to="/applications/new">{token.role === "USER" &&  "Apply" } </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Attendace SOS</a>
      </div>
      <div className="navbar-end">
      <button className="btn text-lg btn-primary" onClick={()=>{
          setToken()
          toast.success("You've been logged out")
          navigate('/login')
        }}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
