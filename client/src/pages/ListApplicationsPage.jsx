import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import ListApplications from '../components/ListApplications';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const ListApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  
  const handleDelete = async (id)=>{
    const response = await axios({
      method: 'delete',
      url: `http://localhost:8080/api/v1/applications/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log("deleted")
    console.log(id)
    toast.success("Application Deleted")
    setApplications(response.data)
    
  }

  const getAllApplications = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/students/applications',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  };
  useEffect(() => {
    getAllApplications().then((data) => {
      setApplications(data)
    });
  }, []);
  return (
    <div>
      <Navbar/>
    
    <ListApplications applications={applications} handleDelete={handleDelete}/>
    </div>
  )
}

export default ListApplicationsPage