import React from "react";
import Link from "next/link";

 export default function Dashboard (){
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600">Buddhika Madusanka
          <span className="text-gray-400 text-sm">Supplier</span></div>
        </div>
        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"><button className="w-full h-full"><Link href="/Supplier-dash" className=" text-black font-semibold">Dashboard</Link></button></div>
          <button><Link href="/Supplier-dash/stocks" className="text-gray-700 font-semibold hover:text-black">Stocks</Link></button>
          <button><Link href="/Supplier-dash/bids" className="text-gray-700 font-semibold hover:text-black">Bids</Link></button>
        </nav>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Ordered Quantity</p>
            <p className="text-2xl font-bold text-black">1600kg</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Earning Year</p>
            <p className="text-2xl font-bold text-black">rs.16983.00</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Bid Count</p>
            <p className="text-2xl font-bold text-black">54 bids</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Featured Bids</h2>
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="border-b pb-2 mb-2">
                <p className="text-sm text-gray-600">2024 Jan 24</p>
                <p className="text-md font-semibold text-black">Rathu Kekulu (200kg)</p>
                <p className="text-md font-bold text-black">rs.118.00</p>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Featured Bids</h2>
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="border-b pb-2 mb-2 flex justify-between">
                <p className="text-sm text-gray-600">2024 Jan 24</p>
                <p className="text-md font-semibold text-black">450kg</p>
                <p className="text-md font-semibold text-black">150kg</p>
                <p className="text-md font-semibold text-black">300kg</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


