import Link from "next/link";
import React from "react";

export default function NewBidsPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
              <div className="text-gray-600">Buddhika Madusanka
              <span className="text-gray-400 text-sm">Supplier</span></div>
            </div>
    
          
          {/* Navigation */}
          <nav className="flex space-x-4 mb-6 border-b pb-3">
              <button><Link href="/Supplier-dash" className="text-gray-700 font-semibold hover:text-black">Dashboard</Link></button>
              <button><Link href="/Supplier-dash/stocks" className="text-gray-700 font-semibold hover:text-black">Stocks</Link></button>
              <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"><button className="w-full h-full"><Link href="/Supplier-dash/bids" className="text-black font-semibold">Bids</Link></button></div>
            </nav> 

      <div className="flex gap-8 p-6">
        {/* Left: Place New Bid */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-black">Place New Bid</h2>
          <form action="#" method="POST" className="space-y-3">
            <input
              type="text"
              name="type"
              placeholder="Type of rice"
              className="w-full p-3 border bg-gray-500"
              required
            />
  
            <div className="flex">
              <input
                type="number"
                name="quantity"
                placeholder="Stock quantity"
                className="w-3/4 p-3 border bg-gray-500"
                required
              />
              <span className="w-1/4 flex items-center justify-center border bg-gray-400">
                Unit
              </span>
            </div>
  
            <input
              type="number"
              name="price"
              placeholder="Bidding price"
              className="w-full p-3 border bg-gray-500"
              required
            />
  
  <Link href={"/Supplier-dash/bids"}><button type="submit" className="w-full p-3 bg-black text-white font-bold">
              Place Bid
            </button></Link>
          </form>
        </div>
  
        {/* Right: Featured Bids */}
        <FeaturedBids />
      </div>
      </div>
      </div>
    );
  }
  
  function FeaturedBids() {
    return (
      <div className="w-1/2">
        <div className="border bg-blue-500 p-3 font-bold">Featured Bids</div>
        <ul className="mt-2 border p-3">
          <li className="border-b py-3">
            <p className="text-sm text-gray-600">2024 Jan 24</p>
            <p className="font-bold text-black">Rathu Kekulu (200kg)</p>
            <p className="text-lg font-bold text-gray-700">rs.118.00</p>
          </li>
          <li className="border-b py-3">
            <p className="text-sm text-gray-600">2024 Jan 24</p>
            <p className="font-bold text-black">Rathu Kekulu (200kg)</p>
            <p className="text-lg font-bold text-gray-700">rs.118.00</p>
          </li>
        </ul>
      </div>
    );
  }
  