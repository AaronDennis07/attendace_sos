import React from 'react'

const ListApplications = ({applications,handleDelete}) => {
  console.log(applications)
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Application ID</th>
        <th>Reason</th>
        <th>No of Days</th>
        <th>Document</th>
        <th>Status</th>
        <th>Description</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      {applications.map((app)=>(
         <tr>
         <td>
           <div className="flex items-center ">
             <div>
               <div className="font-bold">{app.id}</div>
             </div>
           </div>
         </td>
         <td>
         <div className="flex items-center ">
             <div>
               <div className="font-bold">{app.reason}</div>
             </div>
           </div>
         </td>
         <td>
         <div className="flex items-center ">
             <div>
               <div className="font-bold">{app.days}</div>
             </div>
           </div>
         </td>
         <td>
         <div className="flex items-center ">
             <div>
               <a href={app.document} className="font-bold" target='__blank' download={true}>Document</a>
             </div>
           </div>
         </td>
         <td>
         <div className="flex items-center ">
             <div>
               <div className="font-bold">{app.status}</div>
             </div>
           </div>
         </td>
         <td>
         <div className="flex items-center ">
             <div>
               <div className="font-bold">{app.description}</div>
             </div>
           </div>
         </td>
         <th>
           <button className="btn btn-error btn-sm " onClick={()=>{handleDelete(app.id)}}>Delete</button>
         </th>
       </tr>
      ))}
     
      {/* row 2 */}
     
    </tbody>
    
    
  </table>
</div>
    </div>
  )
}

export default ListApplications