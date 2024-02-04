import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import axios from 'axios';
import { useState } from 'react';
import AddStudent from '../components/AddStudent';
import { toast } from 'react-toastify';

const AddStudentPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleNewStudent = async (data, event) => {
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/students/',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        toast.success("Student added")
        navigate('/',{replace:true})
      
      
      
    } catch (error) {
      setSubError('Something went wrong')
    }
  }
  return (
    <AddStudent handleNewStudent={handleNewStudent} error={subError}/>
  )
}

export default AddStudentPage