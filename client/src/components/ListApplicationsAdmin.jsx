import React, { useRef } from 'react';

const ListApplicationsAdmin = ({applications,handleUpdate}) => {
  const selectRef = useRef();

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
            {applications.map((app) => (
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
                      <select ref={selectRef}  defaultValue={app.status}  className={"select select-primary w-full max-w-xs" }>
                        <option value="APPROVED">Approved</option>
                        <option  value="PRENDING"> Pending</option>
                        <option  value="REJECTED">Rejected</option>
                      </select>
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
                  <button
                    className="btn btn-info btn-sm "
                    onClick={() => {
                      handleUpdate(app.id,selectRef.current.vlaue);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListApplicationsAdmin;
