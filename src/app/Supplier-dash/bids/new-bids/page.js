"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";


export default function NewBidsPage() {
  const handleSubmit = async (e) => {

    e.preventDefault(); 
    
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries()); 

    const requestBody = {
      supplierId: "67ddbbb75e2375995751f4d2",
      riceType: body.riceType,
      quantity: Number(body.quantity),
      biddingPrice: Number(body.price),
    };

    const quantity = Number(formData.get("quantity"));
    const price = Number(formData.get("price"));

    if (quantity <= 0 || price <= 0) {
      alert("Please enter valid values. Quantity and price must be greater than zero.");
      return; 
    }

    try {
        const response = await fetch("http://localhost:8080/api/bids", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Bid placed successfully!");
            e.target.reset();
            window.location.reload();
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error submitting bid:", error);
        alert("Something went wrong!");
    }

    
};
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600"><Link href="/Supplier-dash/spage-info">Buddhika Madusanka</Link>
          <span className="text-gray-400 text-sm">Supplier</span></div>
        </div>

        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <Link href="/Supplier-dash" className="text-gray-700 font-semibold hover:text-black">
            <button>Dashboard</button>
          </Link>
          <Link href="/Supplier-dash/stocks" className="text-gray-700 font-semibold hover:text-black">
            <button>Stocks</button>
          </Link>
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg">
            <Link href="/Supplier-dash/bids" className="text-black font-semibold">
              <button className="w-full h-full">Bids</button>
            </Link>
          </div>
        </nav>

        <div className="flex gap-8 p-6">
          
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-black">Place New Bid</h2>
            
            
            <form onSubmit={handleSubmit} className="space-y-3">
            <select
                name="riceType"
                className="w-full p-3 border bg-gray-500"
                required
              >
                <option value="">Select type of rice</option>
                <option value="Nadu">Nadu</option>
                <option value="Samba">Samba</option>
                <option value="Kekulu">Kekulu</option>
                <option value="Red Rice">Red Rice</option>
                <option value="Basmathi">Basmathi</option>
              </select>


              <div className="flex">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Stock quantity"
                  className="w-3/4 p-3 border bg-gray-500"
                  required
                />
                <span className="w-1/4 flex items-center justify-center border bg-gray-400">
                  KG
                </span>
              </div>

              <input
                type="number"
                name="price"
                placeholder="Bidding price"
                className="w-full p-3 border bg-gray-500"
                required
              />

              <button type="submit" className="w-full p-3 bg-black text-white font-bold active:bg-white active:text-black">
                Place Bid
              </button>
            </form>
          </div>

         
          <FeaturedBids />
        </div>
      </div>
    </div>
  );
}


function FeaturedBids() {

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


  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;

  };

  return (
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
                  <td className="p-3 text-black">Rs. {row.biddingPrice}</td>
                  </tr>)) : (<tr><td colSpan="4" className="p-3 text-gray-500 text-center">No bids available.</td></tr>)}
            </tbody>
          </table>
        </div>
  );
}

