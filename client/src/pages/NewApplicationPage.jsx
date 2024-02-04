import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import axios from 'axios';
import { useState } from 'react';
import AddStudent from '../components/AddStudent';
import NewApplication from '../components/NewApplication';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const cloudName = 'aaron07';

const unsignedUploadPreset = 'wzko6o6z';

  

const NewApplicationPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  const [file,setFile] = useState()

  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('file', file);
  
    fetch(url, {
      method: 'POST',
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.url;
        console.log(url)
        setFile(url)
        
      })
      .catch((error) => {
        console.error('Error uploading the file:', error);
      });
  }

  const handleNewApplication = async (data, event) => {
    console.log(data)
    data.document=file
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/applications/',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        console.log(response.data)
        navigate('/applications/list',{replace:true})
      
      
        toast.success("Application Submitted")
    } catch (error) {
      setSubError('Something went wrong')
    }
  }
  return (
    <div>
      <Navbar/>
    <NewApplication handleNewApplication={handleNewApplication} uploadFile={uploadFile} error={subError}/>
    </div>
  )
}

export default NewApplicationPage