"use client"

import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";


 export default function Dashboard (){
  const [data,setPrice] = useState();
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetch_data = async ()=>{
      try{

        const response = await fetch("http://localhost:8080/api/riceprice");
        const data = await response.json();
        setPrice(data);
      }catch(err){
        console.error("Error fetching data",err);
      }
    }
    fetch_data();
  }, []);
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600"><Link href="/Customer-dash/page-info">
            Buddhika Madusanka</Link>
            <span className="text-gray-400 text-sm">Supplier</span>
          </div>
          </div>
        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
        <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"><button className="w-full h-full"><Link href="/Customer-dash" className=" text-black font-semibold">Dashboard</Link></button></div>
          <button><Link href="Customer-dash/past" className="text-gray-700 font-semibold hover:text-black">Past Order</Link></button>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Rice prices</h2>

            <input
              type="text"
              placeholder="Search rice type..."
              className="mb-4 p-2 border rounded w-full text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-700">
                  <th className="p-3 text-left">Type of Rice</th>
                  <th className="p-3 text-left">Per price (1kg)</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) && data.length > 0 ? (
                  data
                    .filter((row) =>
                      row.riceType.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 text-black">{row.riceType}</td>
                        <td className="p-3 text-black">Rs. {row.price}</td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-3 text-gray-500 text-center">
                      No rice prices available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          <div><button className="bg-black w-40 h-12 item-center justify-center rounded-lg text-white active:bg-white  active:text-black"><Link href="/Customer-dash/Placeorder">Place an Order</Link></button></div>
        </div>
         
          
        
      </div>
    </div>
    
  );
};