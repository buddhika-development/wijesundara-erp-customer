"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TempDB() {
  const [data, setBids] = useState([]);
  const [cancelledBids, setCancelledBids] = useState(0);
  const [acceptedBids, setAcceptedBids] = useState(0);
  const [pendingBids, setPendingBids] = useState(0);

  const [filteredBids, setFilteredBids] = useState([]);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bids/67ddbbb75e2375995751f4d2");
        const result = await response.json();
        setBids(result);
        setFilteredBids(result);

        setCancelledBids(result.filter((bid) => bid.status === "Cancelled").length);
        setAcceptedBids(result.filter((bid) => bid.status === "Accepted").length);
        setPendingBids(result.filter((bid) => bid.status === "null").length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };
  const totalBids = data.length;
  const acceptedCount = data.filter(bid => bid.status === 'accept').length;
  const canceledCount = data.filter(bid => bid.status === 'cancel').length;
  const pendingCount = data.filter(bid => bid.status === null).length;

  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type === "accept") {
      setFilteredBids(data.filter(bid => bid.status === "accept"));
    } else if (type === "cancel") {
      setFilteredBids(data.filter(bid => bid.status === "cancel"));
    } else if(type === null){
      setFilteredBids(data.filter(bid => bid.status === null));
    } else {
      setFilteredBids(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">WIJESUNDARA RICE</h1>
          <div className="text-gray-600 text-right">
            <Link href="/Supplier-dash/spage-info" className="font-semibold hover:text-gray-800">Buddhika Madusanka</Link>
            <p className="text-gray-400 text-sm">Supplier</p>
          </div>
        </div>

        <nav className="flex space-x-6 mb-6 border-b pb-4">
          <Link href="/Supplier-dash" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Dashboard</Link>
          <Link href="/Supplier-dash/stocks" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Stocks</Link>
          <Link href="/Supplier-dash/bids" className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition">Bids</Link>
        </nav>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Total Bid Count</h2>
            <p className="text-2xl font-bold text-blue-800">{totalBids} Bids</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Cancelled Bids</h2>
            <p className="text-2xl font-bold text-red-800">{canceledCount} Bids</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Accepted Bids</h2>
            <p className="text-2xl font-bold text-green-800">{acceptedCount} Bids</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button onClick={() => handleFilterChange("all")} className={`px-4 py-2 rounded ${filterType === "all" ? "bg-black text-white" : "bg-gray-200 text-black"}`}>All</button>
          <button onClick={() => handleFilterChange("accept")} className={`px-4 py-2 rounded ${filterType === "accept" ? "bg-green-600 text-white" : "bg-gray-200 text-black"}`}>Accepted</button>
          <button onClick={() => handleFilterChange("cancel")} className={`px-4 py-2 rounded ${filterType === "cancel" ? "bg-red-600 text-white" : "bg-gray-200 text-black"}`}>Cancelled</button>
          <button onClick={() => handleFilterChange(null)} className={`px-4 py-2 rounded ${filterType === null ? "bg-yellow-600 text-white" : "bg-gray-200 text-black"}`}>Pending</button>
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
              {filteredBids.length > 0 ? (
                filteredBids.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-3 text-gray-700">{formatDate(row.date)}</td>
                    <td className="p-3 text-gray-700">{row.riceType}</td>
                    <td className="p-3 text-gray-700">{row.quantity}kg</td>
                    <td className="p-3 text-gray-700">Rs. {row.biddingPrice}</td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-gray-500 text-center">No bids available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <Link href="/Supplier-dash/bids/new-bids" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            Place New Bid
          </Link>
        </div>
      </div>
    </div>
  );
}
