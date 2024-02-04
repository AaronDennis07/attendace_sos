import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';
import Register from '../components/Register';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleRegister = async (data, event) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/auth/register',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      toast.success("Registered Successfully")
      navigate('/', { replace: true });

    } catch (error) {
      setSubError('Email not found please contact the administrator')
    }
  };

  return (
    <>
     <h1>Hello</h1>
      <Register handleRegister={handleRegister} error = {subError} />
    </>
  );
}

export default RegisterPage