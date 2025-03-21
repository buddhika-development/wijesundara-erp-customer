import React from "react";
import Link from "next/link";

export default function StockDashboard() {
  
  const stockData = [
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
  ];

  
  const totalOrdered = stockData.reduce((sum, item) => sum + item.ordered, 0);                                                  
  const totalSupplied = stockData.reduce((sum, item) => sum + item.supplied, 0);
  const totalRemaining = totalOrdered - totalSupplied;

  return (
     
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="bg-white shadow-md rounded-lg p-4">
    <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
          <div className="text-gray-600"><Link href="/Supplier-dash/supplier-profile">Buddhika Madusanka</Link>
          <span className="text-gray-400 text-sm">Supplier</span></div>
        </div>
      

      
      <nav className="flex space-x-4 mb-6 border-b pb-3">
          <button><Link href="/Supplier-dash" className="text-gray-700 font-semibold hover:text-black">Dashboard</Link></button>
          <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"> <button className="w-full h-full"><Link href="/Supplier-dash/stocks" className="text-black font-semibold">Stocks</Link></button></div>
          <button><Link href="/Supplier-dash/bids" className="text-gray-700 font-semibold hover:text-black">Bids</Link></button>
        </nav>

      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-black">Total Ordered Quantity</h2>
          <p className="text-2xl font-bold text-black">{totalOrdered} KG</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-black">Total Supplied</h2>
          <p className="text-2xl font-bold text-black">{totalSupplied} KG</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-black">Remaining Stocks</h2>
          <p className="text-2xl font-bold text-black">{totalRemaining} KG</p>
        </div>
      </div>

      
      <div className="bg-white mt-6 p-4 shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-700">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Type of Rice</th>
              <th className="p-3 text-left">Ordered Quantity</th>
              <th className="p-3 text-left">Supplied Quantity</th>
              <th className="p-3 text-left">Remaining Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 text-black">{stock.date}</td>
                <td className="p-3 text-black">{stock.type}</td>
                <td className="p-3 text-black">{stock.ordered}kg</td>
                <td className="p-3 text-black">{stock.supplied}kg</td>
                <td className="p-3 text-black">{stock.ordered - stock.supplied}kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    </div>
  );
}
