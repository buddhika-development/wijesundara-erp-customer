"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard1() {
  const [data, setBids] = useState([]);
  const [totalBids, setTotalBids] = useState(0);
  

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bids");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBids(data);
        setTotalBids(data.length);
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

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">WIJESUNDARA RICE</h1>
          <div className="text-gray-600 text-right">
            <Link href="/Supplier-dash/supplier-profile" className="font-semibold hover:text-gray-800">Buddhika Madusanka</Link>
            <p className="text-gray-400 text-sm">Supplier</p>
          </div>
        </div>

        <nav className="flex space-x-6 mb-6 border-b pb-4">
          <Link href="/Supplier-dash" className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition">Dashboard</Link>
          <Link href="/Supplier-dash/stocks" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Stocks</Link>
          <Link href="/Supplier-dash/bids" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Bids</Link>
        </nav>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-6 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-600">Total Ordered Quantity</p>
            <p className="text-2xl font-bold text-blue-800">-</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-600">Total Earning Monthly</p>
            <p className="text-2xl font-bold text-green-800">Rs. -</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-600">Total Bid Count</p>
            <p className="text-2xl font-bold text-yellow-800">{totalBids}</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-6 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-blue-500 text-white">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type of Rice</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Bidding Price</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-3 text-gray-700">{formatDate(row.date)}</td>
                    <td className="p-3 text-gray-700">{row.riceType}</td>
                    <td className="p-3 text-gray-700">{row.quantity}kg</td>
                    <td className="p-3 text-gray-700">Rs. {row.biddingPrice}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-gray-500 text-center">No bids available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
