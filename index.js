import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    { staffId: 1, firstname: 'John', secondname: 'Doe', email: 'john.doe@example.com', phoneNumber: '555-555-1234' },
    { staffId: 2, firstname: 'Jane',secondname: 'Smith', email: 'jane.smith@example.com', phoneNumber: '555-555-5678' },
    { staffId: 3, firstname: 'Bob',secondname:'Johnson' , email: 'bob.johnson@example.com', phoneNumber: '555-555-9012' },
  ]);

  const handleUpdate = (employee) => {
    // Logic for updating employee
  };

  const handleDelete = (employee) => {
    // Logic for deleting employee
  };

  return (
    <ChakraProvider>
      <table>
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Employee Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.staffId}>
              <td>{employee.staffId}</td>
              <td>{employee.firstname}</td>
              <td>{employee.secondname}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <button onClick={() => handleUpdate(employee)}>Update</button>
                <button onClick={() => handleDelete(employee)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ChakraProvider>
  );
}

export default App;
