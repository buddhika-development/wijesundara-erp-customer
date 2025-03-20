"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import axios from "axios";

export default function Register() {

  const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();

// //     const formData = new FormData(e.target);
// //     const email = formData.get("email");
// //     const password = formData.get("password");

// //     if (!email || !password) {
// //       alert("Please fill in all fields.");
// //       return;
// //     }

// //     // Mock login success (Replace with API call)
// //     if (email === "admin@example.com" && password === "password") {
// //       router.push("/Supplier-dash");
// //     } else {
// //       alert("Invalid email or password");
// //     }
// //   };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName((prevUser) =>({...prevUser,[name]:value}));
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        sendRequest().then(()=>{
            alert("Register user")
            history("/Customer-dash")
        }).catch((err)=>{
            alert(err.message);
        })
        const sendRequest = async()=>{
            await axios.post("http://localhost:8080/api/customer"),{
                name:String(user.name),
                email:String(user.email),
                password:String(user.password)
            }
        }
      }
  
  

  return (
    <div className="flex h-screen">
      {/* Left Side - Grey Background */}
      <div className="w-2/4 bg-gray-300"><input type="image"/></div>

      {/* Right Side - Login Form */}
      <div className="w-2/4 flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-black">WIJESUNDARA RICE</h1>
        <h2 className="text-xl font-bold mb-6 text-black">WELCOME AGAIN</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
        <input
            type="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder=""
            className="w-full p-3 border bg-gray-300"
            required
          />
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            placeholder="example@example.com"
            className="w-full p-3 border bg-gray-300"
            required
          />
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            placeholder="Account password"
            className="w-full p-3 border bg-gray-300"
            required
          />

          <button type="submit" className="w-full p-3 bg-gray-500 text-white font-bold">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-black hover:text-red">
          Already Have an account? <a href="/login-cus" className="font-bold hover:underline text-black hover:text-red">Login</a>
        </p>
      </div>
    </div>
  );
}
