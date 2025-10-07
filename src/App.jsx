import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import task from './task.jsx'
// import './App.css';
import ToDoList from './ToDoList.jsx';
 import ProductCards from './productcards.jsx';
  import ProductInfo from './productinfo.jsx';

//  import { useEffect } from 'react';

//  import HookComponent from "./HookComponent"
// import Name from './Name'
// import Email from './Email'
// import Phone from './Phone'
// import RollNumber from './RollNumber'
// import Age from './Age'
// import Gender from './Gender'
// import Course from './Course'
// import Department from './Department'
// import Skills from './Skills'
// import Submit from './Submit'
// import Reset from './Reset'
// import Form from './Form'



function App() {
  // const [count, setCount] = useState(0)
    {/* <HookComponent/> */}
    {/* <task/> */}

    {/* <Form/> 
     <div>

    <Name/>
    <br/>
    <Email/>
    <br/>
    <Phone/>
    <br/>
    <RollNumber/>
    <br/>
    <Age/>
    <br/>
    <Course/>
    <br/>
    <Department/>
    <br/>
    <Skills/>
    <br/>
    <Gender/>
    </div>
    <br/>
    <Submit/>
    <br/>
    <br/>
    <Reset/> 

 <FunctionComponent />  */}
 <ToDoList/>

//  const [CompleteData, setCompleteData] = useState([
//   {
//   Name: "Yakanksha",
//   Email: "yakanksha@example.com",
//   Phone: "123-456-7890",
//   RollNumber: "4236",
//   Age: 19,
//   Gender: "Female",
// },
// {
//   Name: "ViratKohli",
//   Email: "viratkohli@gmail.com",
//   Phone: "987-654-3210",
//   RollNumber: "4235",
//   Age: 50,
//   Gender: "Male",
// },
// {
//   Name: "Sachin",
//   Email: "sachin@example.com",
//   Phone: "456-789-0123",
//   RollNumber: "4237",
//   Age: 22,
//   Gender: "Female",
// },
// {
//   Name: "Rohit",
//   Email: "rohit@example.com",
//   Phone: "789-012-3456",
//   RollNumber: "4245",
//   Age: 25,
//   Gender: "Male",
// },
// {
//   Name: "Hardik",
//   Email: "hardik@example.com",
//   Phone: "012-345-6789",
//   RollNumber: "4218",
//   Age: 30,
//   Gender: "Male",
// },
// {
//   Name: "SuryaKumar",
//   Email: "surya@example.com",
//   Phone: "012-345-6789",
//   RollNumber: "4218",
//   Age: 30,
//   Gender: "Male",
// },
// {
//   Name:"KL Rahul",
//   Email: "klrahul@example.com",
//   Phone: "654-321-0987",
//   RollNumber: "4217",
//   Age: 35,
//   Gender: "Male",
// },
// {
//   Name: "Ms Dhoni",
//   Email: "msdhoni@example.com",
//   Phone: "321-654-9870",
//   RollNumber: "4219",
//   Age: 50,
//   Gender: "Female",
// }
// ]);



//  const [QueryResult, setQueryResult] = useState([])
//     const [search, setSearch] = useState(""); 

//     const Capture = (event) => 
//     {
//     setSearch(event.target.value);
//     };

  
//   useEffect(() => {
//     if (search != "") {
      
//        setQueryResult(
//         CompleteData.filter((ele) =>
//           ele.Name.includes(search) || ele.RollNumber.includes(search) 
//         )
//       );
//     } 
//     else
//     {
//       setQueryResult(CompleteData);
//     }
//   }, [search, CompleteData]);


 return (
      
//       <>
//        <input type="text" placeholder="Search..."
//        onChange={
//         (event) =>
//         {
//           Capture (event);
//         }
//        }
//        />

//        <div className="card_parent">
//       {
//         CompleteData.map((ele) => {
//           return (
//             <div className="card" >
//                {ele.Name }
              
//             </div>
//           )
//         })

//       }
//     </div>
     
//       </>
//     );

    
  //   console.log("useEffect called");
  // }, [x]);

  // return (
  //   <>
  //     <h1>Value of x is : {x}</h1>
  //     <button onClick={() => setx(x + 1)}>Increment x</button>
  //     <useEffect />
  //   </>

   <ProductCards/>
);

  
}
export default App;
