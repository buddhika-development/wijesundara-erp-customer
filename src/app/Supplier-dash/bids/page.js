


import React from "react";
import Link from "next/link";



export default async function tempdb() {


  const bidData = [
    { date: "2024 Jan 24", type: "Rathu kekulu", quantity: "150kg", price: "rs. 118.00" },
    { date: "2024 Jan 24", type: "Rathu kekulu", quantity: "150kg", price: "rs. 118.00" },
    { date: "2024 Jan 24", type: "Rathu kekulu", quantity: "150kg", price: "rs. 118.00" },
    { date: "2024 Jan 24", type: "Rathu kekulu", quantity: "150kg", price: "rs. 118.00" },
  ];
   function getBids() {
    return bidData;
  }
  
   function addBid(newBid) {
    const id = bids.length + 1; 
    bids.push({ id, ...newBid }); 
  } 
  function totbids() {
    let totalBids = 0;
    
    bidData.forEach(element => {
      totalBids++; 
    
    return totalBids;
  })
}
  

  return (

    
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="bg-white shadow-md rounded-lg p-4">
    <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600"><Link href="/Supplier-dash/supplier-profile">Buddhika Madusanka</Link>
          <span className="text-gray-400 text-sm">Supplier</span></div>
        </div>

      
      {/* Navigation */}
      <nav className="flex space-x-4 mb-6 border-b pb-3">
          <button><Link href="/Supplier-dash" className="text-gray-700 font-semibold hover:text-black">Dashboard</Link></button>
          <button><Link href="/Supplier-dash/stocks" className="text-gray-700 font-semibold hover:text-black">Stocks</Link></button>
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"><button className="w-full h-full"><Link href="/Supplier-dash/bids" className="text-black font-semibold">Bids</Link></button></div>
        </nav>
      

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">Total bid count</h2>
          <p className="text-2xl font-bold text-black">{totbids()} Bids</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">Cancelled bid count</h2>
          <p className="text-2xl font-bold text-black">16 bids</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">Accepted bid count</h2>
          <p className="text-2xl font-bold text-black">38 bids</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white mt-6 p-4 shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-700">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Type of Rice</th>
              <th className="p-3 text-left">Stock Quantity</th>
              <th className="p-3 text-left">Bidding Price</th>
            </tr>
          </thead>
          <tbody>
            {bidData.map((bid, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 text-black">{bid.date}</td>
                <td className="p-3 text-black">{bid.type}</td>
                <td className="p-3 text-black">{bid.quantity}</td>
                <td className="p-3 text-black">{bid.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="flex items-center">
          {/* Button */}
            <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg"><Link href="/Supplier-dash/bids/new-bids">Place New Bid</Link></button>
            </div>
            </div>
      </div>
    </div>
  );
}
