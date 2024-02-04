import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import axios from 'axios';
import { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import { toast } from 'react-toastify';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [subError,setSubError] = useState()

  const { setToken } = useAuth();
  
  const handleAdminLogin = async (data, event) => {
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
        toast.success("Welcome back")
        navigate('/dashboard',{replace:true})
      }
      
      
    } catch (error) {
      setSubError('Invalid Credentials')
    }
  };
  return (
    <AdminLogin handleAdminLogin={handleAdminLogin} error={subError}/>
  )
}

export default AdminLoginPage