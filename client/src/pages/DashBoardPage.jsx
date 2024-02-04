import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import Navbar from '../components/Navbar';

const DashBoardPage = () => {
  const [student, setStudent] = useState({});
  
  const getStudentDetails = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/students/user',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
   
    return response.data;
  };
  useEffect(() => {
    getStudentDetails().then((data) => {
      setStudent(data);
    
    });
  }, []);
  return (
    <div>
      <Navbar/>

    <DashBoard
      usn={student.usn}
      semester={student.semester}
      name={student.name}
      department={student.department}
      email={student.email}
      section={student.section}
    />
        </div>
  );
};

export default DashBoardPage;
