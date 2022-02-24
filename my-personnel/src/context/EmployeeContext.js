// import React, { createContext, useEffect, useState } from "react";

// export const EmployeeContext = createContext();

// export const EmployeeProvider = ({children}) => {
//   const [employees, setEmployees] = useState([]);


//   useEffect(() => {
//     const backendFetch = async () => {
//       const res = await fetch("/api/");
//       const data = await res.json();



//       setEmployees(data);
//     };
//     backendFetch();
//   },[]);


//   return (
//     <EmployeeContext.Provider
//       value={employees}
//     >
//       {children}
//     </EmployeeContext.Provider>
//   )
// }
