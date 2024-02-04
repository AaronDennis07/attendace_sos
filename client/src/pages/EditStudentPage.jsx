import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import axios from 'axios';
import { useState } from 'react';
import AddStudent from '../components/AddStudent';
import { toast } from 'react-toastify';
import EditStudent from '../components/EditStudent';

const EditStudentPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  const [params,setParams]  = useSearchParams()
  const id = params.get("id")
  const handleEditStudent = async (data, event) => {
 
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8080/api/v1/students/update/${id}`,
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        toast.success("Student added")
        navigate('/listapplications/admin',{replace:true})
      
      
      
    } catch (error) {
      setSubError('Something went wrong')
    }
  }
  return (
    <EditStudent handleEditStudent={handleEditStudent} id={id} error={subError}/>
  )
}

export default EditStudentPage