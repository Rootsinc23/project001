import React from 'react';

const ListEmployee = () => {
  const dummyData = [
    {
      "id": 1,
      "firstName": "Chidera",
      "lastName": "Faith",
      "gender": "female",
      "dateOfBirth": "12-May-1980",
      "maritalStatus": "single",
      "bloodGroup": "A",
      "department": "Language",
      "designation": "Head Teacher",
      "qualification": "B.Tech",
      "oftype": "Experienced",
      "email": "chiderafaith001@gmail.com",
      "address": "Aba, Imo",
      "phoneNo": 9822324753
    },
    {
      "id": 2,
      "firstName": "Chidera",
      "lastName": "Faith",
      "gender": "female",
      "dateOfBirth": "12-May-1980",
      "maritalStatus": "single",
      "bloodGroup": "A",
      "department": "Language",
      "designation": "Head Teacher",
      "qualification": "B.Tech",
      "oftype": "Experienced",
      "email": "chiderafaith002@gmail.com",
      "address": "Aba, Imo",
      "phoneNo": 9822324753
    },
    {
      "id": 3,
      "firstName": "Chidera",
      "lastName": "Faith",
      "gender": "female",
      "dateOfBirth": "12-May-1980",
      "maritalStatus": "single",
      "bloodGroup": "A",
      "department": "Language",
      "designation": "Head Teacher",
      "qualification": "B.Tech",
      "oftype": "Experienced",
      "email": "chiderafaith003@gmail.com",
      "address": "Aba, Imo",
      "phoneNo": 9822324753
    }
  ];

  return (
    <div>
      <h2 className="font-bold text-[2rem] align-middle justify-center p-5 mx-auto text-[#22b822]">List of Employees</h2>
      <table className="w-full border-b-2 border-gray-200">
        <thead>
          <tr>
            <th className="m-4 p-3 text-center border-spacing-0 text-red-500">ID</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">First Name</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Last Name</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Gender</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Date Of Birth</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Marital Status</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Blood Group</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Department</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Designation</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Qualification</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Of Type</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Email</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Address</th>
            <th className="p-3 text-center border-spacing-0 text-red-500">Phone No</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(employee => (
            <tr key={employee.id}>
              <td className="p-3 text-center">{employee.id}</td>
              <td className="p-3 text-center">{employee.firstName}</td>
              <td className="p-3 text-center">{employee.lastName}</td>
              <td className="p-3 text-center">{employee.gender}</td>
              <td className="p-3 text-center">{employee.dateOfBirth}</td>
              <td className="p-3 text-center">{employee.maritalStatus}</td>
              <td className="p-3 text-center">{employee.bloodGroup}</td>
              <td className="p-3 text-center">{employee.department}</td>
              <td className="p-3 text-center">{employee.designation}</td>
              <td className="p-3 text-center">{employee.qualification}</td>
              <td className="p-3 text-center">{employee.oftype}</td>
              <td className="p-3 text-center">{employee.email}</td>
              <td className="p-3 text-center">{employee.address}</td>
              <td className="p-3 text-center">{employee.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
