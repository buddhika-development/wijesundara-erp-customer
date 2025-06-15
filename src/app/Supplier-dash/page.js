"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard1() {
  const [allBids, setAllBids] = useState([]);
  const [acceptedBids, setAcceptedBids] = useState([]);
  const [acceptBids, setacceptBids] = useState(0);
  const [acceptedEarnings, setAcceptedEarnings] = useState(0);
  const [totalAcceptedQuantity, setTotalAcceptedQuantity] = useState(0);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bids/67ddbbb75e2375995751f4d2");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllBids(data);

        const accepted = data.filter((bid) => bid.status === "accept");
        setAcceptedBids(accepted);
        setacceptBids(accepted.length);

        const earnings = accepted.reduce((sum, bid) => sum + bid.quantity * bid.biddingPrice, 0);
        setAcceptedEarnings(earnings);

        const quantity = accepted.reduce((sum, bid) => sum + bid.quantity, 0);
        setTotalAcceptedQuantity(quantity);
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
    <div className="bg-gray-50 w-full min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full h-full">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">WIJESUNDARA RICE</h1>
          <div className="text-gray-600 text-right">
            <Link href="/Supplier-dash/spage-info" className="font-semibold hover:text-gray-800">Buddhika Madusanka</Link>
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
            <p className="text-sm text-gray-600">Total Accepted Quantity</p>
            <p className="text-2xl font-bold text-blue-800">{totalAcceptedQuantity}kg</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-green-800">
              Rs. {acceptedEarnings > 0 ? acceptedEarnings.toLocaleString() : "0"}
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-600">Accept Bid Count</p>
            <p className="text-2xl font-bold text-yellow-800">{acceptBids}</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-6 shadow-md rounded-lg">
        <p className="text-base font-bold text-gray-700  mb-2">Accepted Bids</p>
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
              {acceptedBids.length > 0 ? (
                acceptedBids.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-3 text-gray-700">{formatDate(row.date)}</td>
                    <td className="p-3 text-gray-700">{row.riceType}</td>
                    <td className="p-3 text-gray-700">{row.quantity}kg</td>
                    <td className="p-3 text-gray-700">Rs. {row.biddingPrice}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-gray-500 text-center">No accepted bids available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
