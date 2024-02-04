import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleLogin = async (data, event) => {
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/auth/login',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const {role,token} = response.data;
      if(role==='ADMIN'){
        navigate('/listapplications/admin', { replace: true });
        setToken({
          token,
          role
        })
      }else if(role==='USER'){
        setToken( {
          token,
          role,
          username:response.data.username
        })
        toast.success("Welcome back!")
        navigate('/dashboard',{replace:true})
      }
      
      
    } catch (error) {
      setSubError('Invalid Credentials')
    }
  };

  return (
    <>
     
      <Login handleLogin={handleLogin} error = {subError} />
    </>
  );
};

export default LoginPage;
