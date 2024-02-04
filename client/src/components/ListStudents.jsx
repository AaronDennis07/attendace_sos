import React from 'react';
import { NavLink } from 'react-router-dom';
const ListStudents = ({ students, handleDelete }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>USN</th>
              <th>name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Section</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            { students && students.map((student, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.usn}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.department}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.semester}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center ">
                    <div>
                      <div className="font-bold">{student.section}</div>
                    </div>
                  </div>
                </td>
                <p>{student.id}</p>
                <th>
                  <NavLink
                    className="btn btn-info btn-sm  mr-2"
                    to={`/students/edit?id=${student.id}`}
                  >
                    Update
                  </NavLink>
                  <button
                    className="btn btn-error btn-sm "
                    onClick={() => handleDelete(student.id)}
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

export default ListStudents;
