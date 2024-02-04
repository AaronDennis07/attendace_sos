import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import ListApplications from '../components/ListApplications';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import ListStudents from '../components/ListStudents';


const ListStudentsPage = () => {
  const [students, setStudents] = useState([]);
  
  const handleDelete = async (id)=>{
    console.log(id)
    const response = await axios({
      method: 'delete',
      url: `http://localhost:8080/api/v1/students/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log("deleted")
    console.log(id)
    toast.success("Student Deleted")
    setStudents(response.data)
    
  }

  const getAllStudents = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/students/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  };
  useEffect(() => {
    getAllStudents().then((data) => {
      setStudents(data)
    });
  }, []);
  return (
    <div>
      <Navbar/>
    
    <ListStudents students={students} handleDelete={handleDelete}/>
    </div>
  )
}

export default ListStudentsPage