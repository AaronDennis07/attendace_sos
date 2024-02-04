import React, { useEffect, useState } from 'react'
import ListApplicationsAdmin from '../components/ListApplicationsAdmin'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { toast } from 'react-toastify';

const ListApplicationsAdminPage = () => {
  const [applications, setApplications] = useState([]);
  
  const handleUpdate = async(id,status)=>{
    console.log(status)
    const response = await axios({
      method: 'post',
      url: `http://localhost:8080/api/v1/applications/update/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data:JSON.stringify({
        status
      })
    });
    const data = response.data
    toast.success("Status Updated")
    setApplications(data)
  }
  const getAllApplications = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/applications/',
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
    
    <ListApplicationsAdmin applications={applications} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default ListApplicationsAdminPage