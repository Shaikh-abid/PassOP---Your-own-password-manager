// import React, { useEffect, useRef, useState } from "react";
// import openEye from "../assest/open-eye.png";
// import closeEye from "../assest/close-eye.png";

// import { IoEye } from "react-icons/io5";
// import { IoEyeOff } from "react-icons/io5";

// const Manager = () => {
//   const ref = useRef();
//   const [form, setForm] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setPasswordArray] = useState([]);

//   const showPassword = () => {
//     if (ref.current === IoEyeOff) {
//       ref.current = IoEye;
//     } else {
//       ref.current = IoEyeOff;
//     }
//   };

//   useEffect(() => {
//     let passwords = localStorage.getItem("passwords");

//     if (passwords) {
//       setPasswordArray(JSON.parse(passwords));
//     }
//   }, []);

//   const savePassword = () => {
//     setPasswordArray([...passwordArray, form]);
//     localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//       </div>

//       <div className=" myContainer">
//         <h1 className="text-4xl font-bold text-center">
//           <span className="text-green-500">&lt;</span>
//           Pass<span className="text-green-500">OP /&gt;</span>
//         </h1>
//         <p className="text-xl text-green-900 text-center">
//           Our own password manager
//         </p>

//         <div className=" flex flex-col p-4 text-black gap-8 items-center">
//           <input
//             value={form.site}
//             name="site"
//             onChange={handleChange}
//             type="text"
//             placeholder="Enter Website URL...."
//             className="rounded-xl px-4 py-1 border w-full border-green-700"
//           />
//           <div className="flex w-full gap-8">
//             <input
//               value={form.username}
//               name="username"
//               onChange={handleChange}
//               type="text"
//               placeholder="Enter Username"
//               className="rounded-xl px-4 py-1 border w-full border-green-700"
//             />
//             <div className="relative">
//               <input
//                 value={form.password}
//                 name="password"
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="Enter Password"
//                 className="rounded-xl px-4 py-1 border w-full border-green-700"
//               />
//               <span className="absolute right-2 cursor-pointer top-[12px]">
//                 <IoEye ref={ref} onClick={showPassword}/>
//               </span>
//             </div>
//           </div>
//           <button
//             onClick={savePassword}
//             className="flex gap-2 justify-center items-center bg-green-500 rounded-full px-6 border-2 border-green-800 py-3 w-fit hover:bg-green-300 duration-200"
//           >
//             <lord-icon
//               src="https://cdn.lordicon.com/jgnvfzqg.json"
//               trigger="hover"
//             ></lord-icon>
//             Add password
//           </button>
//         </div>

//         <div>
//           <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
//           {passwordArray.length === 0 && <div>No passwords to show !!!</div>}
//           {passwordArray.length !== 0 && (
//             <table className="table-auto w-full rounded-xl overflow-hidden ">
//               <thead className="bg-green-800 text">
//                 <tr>
//                   <th className="py-2">Site</th>
//                   <th className="py-2">Username</th>
//                   <th className="py-2">Passwords</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-green-100">
//                 {passwordArray.map((item, i) => {
//                   return (
//                     <tr key={i}>
//                       <td className="text-center border border-white py-2 w-32">

//                         <a href={item.site} target="_blank"> {item.site}</a>
//                       </td>
//                       <td className="text-center border border-white py-2 w-32">
//                         {item.username}
//                       </td>
//                       <td className="text-center border border-white py-2 w-32">
//                         {item.password}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;