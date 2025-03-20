"use client"

import React from "react";
import Link from "next/link";
import Axios from "axios"; // Note: Axios is imported but not used; you’re using fetch instead
import { useEffect, useState } from "react";

export default function Dashboard1() {
  const [data, setBids] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/bids');
        const data = await response.json();
        setBids(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
   
    fetch_data();
  }, []);

  console.log(data);

  // Function to format date as 2025.09.19
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600">
            Buddhika Madusanka
            <span className="text-gray-400 text-sm">Supplier</span>
          </div>
        </div>

        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg">
            <button className="w-full h-full">
              <Link href="/Supplier-dash" className="text-black font-semibold">Dashboard</Link>
            </button>
          </div>
          <button>
            <Link href="/Supplier-dash/stocks" className="text-gray-700 font-semibold hover:text-black">Stocks</Link>
          </button>
          <button>
            <Link href="/Supplier-dash/bids" className="text-gray-700 font-semibold hover:text-black">Bids</Link>
          </button>
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

        <div className="bg-white mt-6 p-4 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-700">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type of Rice</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Bidding price</th>
                </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? data.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-black">{formatDate(row.date)}</td>
                  <td className="p-3 text-black">{row.riceType}</td>
                  <td className="p-3 text-black">{row.quantity}kg</td>
                  <td className="p-3 text-black">{row.biddingPrice}</td>
                  </tr>)) : (<tr><td colSpan="4" className="p-3 text-gray-500 text-center">No bids available.</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}