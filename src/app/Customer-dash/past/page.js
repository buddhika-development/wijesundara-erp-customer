"use client"
import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";

 export default function Dashboard (){

    const [data, setBids] = useState([]);
    
  
      useEffect(() => {
        const fetch_data = async () => {
          try {
            const response = await fetch("http://localhost:8080/api/order");
            const data = await response.json();
            setBids(data);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
    
        fetch_data();
      }, []);
    
      const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
      };
      
    //   const deleteHandler = async (orderId) => {  
    //     const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    //     if (!confirmDelete) return; 
    
    //     try {
    //         await axios.delete(`http://localhost:8080/api/order/${orderId}`);
              
    //           setBids(data.filter((bid) => bid._id!== orderId)); 
             

    //     } catch (error) {
    //         console.error("Error deleting order:", error);
    //     }
    // };
    
    
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600"><Link href="/Customer-dash/customer-profile">
            Buddhika Madusanka</Link>
            <span className="text-gray-400 text-sm">Supplier</span>
          </div>
          </div>
        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <button><Link href="/Customer-dash" className=" text-black font-semibold">Dashboard</Link></button>
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg "><button className="w-full h-full"><Link href="/Customer-dash/past" className="text-gray-700 font-semibold hover:text-black">Past Order</Link></button></div>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Past ordered</h2>
            
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-700">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type of Rice</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left"> price</th>
                <th className="p-3 text-left"> Total</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? data.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-black">{formatDate(row.date)}</td>
                  <td className="p-3 text-black">{row.riceType}</td>
                  <td className="p-3 text-black">{row.quantity}kg</td>
                  <td className="p-3 text-black">Rs. {row.price}</td>
                  <td className="p-3 text-black">Rs. {row.total}</td>
                  {/* <td><button onClick={() => deleteHandler(row._id)} className="bg-red-800 w-40 h-12 item-center justify-center rounded-lg text-white active:bg-white  active:text-black">Delete</button></td> */}

                  </tr>)) : (<tr><td colSpan="4" className="p-3 text-gray-500 text-center">No bids available.</td></tr>)}
            </tbody>
          </table>
        </div>
          </div>
        </div>
       
  )
}