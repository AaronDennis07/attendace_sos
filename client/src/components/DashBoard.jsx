import React from 'react'

const DashBoard = ({ usn, semester, name, department, email,section}) => {
  return (
    <div className=' ml-24 '>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Name</p>
        
        <p className='text-xl'><span className='pr-5'> :</span> {name}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Email: </p>
        <p className='text-xl'><span className='pr-5'> :</span> {email}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>USN: </p>
        <p className='text-xl'><span className='pr-5'> :</span> {usn}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Department: </p>
        <p className='text-xl'> <span className='pr-5'> :</span> {department}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Semester: </p>
        <p className='text-xl'><span className='pr-5'> :</span> {semester}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Section: </p>
        <p className='text-xl'><span className='pr-5'> :</span> {section}</p>
       </div>
    </div>
  )
}

export default DashBoard