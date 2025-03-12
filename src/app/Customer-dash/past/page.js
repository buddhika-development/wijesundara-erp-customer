import React from "react";
import Link from "next/link";

 export default function Dashboard (){
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600">Buddhika Madusanka
          <span className="text-gray-400 text-sm">  Customer</span></div>
        </div>
        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <button><Link href="/Customer-dash" className=" text-black font-semibold">Dashboard</Link></button>
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg "><button className="w-full h-full"><Link href="/Customer-dash/past" className="text-gray-700 font-semibold hover:text-black">Past Order</Link></button></div>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Past ordered</h2>
            
            {Array(4).fill(0).map((_, index) => (
                
                <div key={index} className="border-b pb-2 mb-2 flex justify-between">
                  
                  <td className="text-sm text-gray-600 p-2">2024 Jan 24</td>
                  <td className="text-md font-semibold text-black p-2 ">Rathu Kekulu (200kg)</td>
                  <td className="text-md font-bold text-black p-2">rs.118.00</td>
                  <td><button className="bg-red-500 w-30 h-12 item-center justify-center rounded-lg text-white active:bg-white active:text-black"><Link href="">Delete</Link></button></td>
              
                </div>
              ))}
          </div>
        </div>
        </div>
  )
}