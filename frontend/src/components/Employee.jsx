import React, { useState, useEffect } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployee = async () => {
      await axios
        .get("/api")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => console.log(err));
    };
    getEmployee();
  }, []);

  if (employees.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className='k h-screen w-screen fixed top-0 left-0' />
        <div className=''>
          <table className='table-auto md:table-fixed mx-auto my-0 p-2 flex justify-center items-center flex-col h-screen'>
            <thead className=''>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Department</th>
                <th>Department ID</th>
                <th>Projects</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id} className='p-2'>
                  <td>{employee.FirstName}</td>
                  <td>{employee.LastName}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.Phone}</td>
                  <td>{employee.Country}</td>
                  <td>{employee.Department}</td>
                  <td>{employee.DepartmentId}</td>
                  <td>{employee.Projects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Employee;
