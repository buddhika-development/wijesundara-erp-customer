"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewBidsPage() {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [riceType, setRiceType] = useState("");
     
      const handleRiceTypeChange = async (e) => {
        const selectedType = e.target.value;
        setRiceType(selectedType);
      
        if (selectedType) {
          try {
            const response = await axios.get(`http://localhost:8080/api/riceprice/${selectedType}`);
            const fetchedPrice = response.data.price;
            setPrice(fetchedPrice);
            setTotal(fetchedPrice * quantity);
          } catch (error) {
            console.error("Error fetching rice price:", error);
          }
        }
      };
      
        
    const handleQuantityChange = (e) => {
      const newQuantity = Number(e.target.value);
      setQuantity(newQuantity);
      setTotal(newQuantity * price);
    };
  
    const handlePriceChange = (e) => {
      const newPrice = Number(e.target.value);
      setPrice(newPrice);
      setTotal(quantity * newPrice);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const body = Object.fromEntries(formData.entries());
  
      const requestBody = {
        customerId: "67db0e0bc231d18066917da8",
        riceType: body.riceType,
        quantity: quantity,
        price: price,
      };
  
      try {
        const response = await fetch("http://localhost:8080/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody), 
        });
  
        const data = await response.json();
        window.location.reload();
        if (response.ok) {
          alert("Bid placed successfully!");
          
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
          <div className="text-gray-600"><Link href="/Customer-dash/page-info">
            Buddhika Madusanka</Link>
            <span className="text-gray-400 text-sm">Customer</span>
          </div>
        </div>

        
        <nav className="flex space-x-4 mb-6 border-b pb-3">
          <Link href="/Customer-dash" className="text-gray-700 font-semibold hover:text-black">
            <button>Dashboard</button>
          </Link>
          <Link href="/Customer-dash/past" className="text-gray-700 font-semibold hover:text-black active:bg-white active:text-black">
            <button>Past Order</button>
          </Link>
          
        </nav>

        <div className="flex gap-8 p-6">
          
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-black">Place New Bid</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
            <select
              name="riceType"
              value={riceType}
              onChange={handleRiceTypeChange}
              className="w-full p-3 border bg-gray-500"
              required
            >
              <option value="">Select type of rice</option>
              <option value="Keeri Samba">Keeri Samba</option>
              <option value="lanka basumathi">lanka basumathi</option>
              <option value="Sudu kakulu">Sudu kakulu</option>
              <option value="Rathu kakulu">Rathu kakulu</option>
              <option value="Basmati">Basmati</option>
              <option value="Kuruluthuda">Kuruluthuda</option>
              <option value="Sudu nadu">Sudu nadu</option>
            </select>
          <div className="flex">
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              placeholder="Quantity"
              className="w-1/2 p-3 border text-black "
              required
              min="1"
            />
            <span className="w-1/4 flex items-center justify-center border bg-gray-400 text-black ">
              KG
            </span>
          </div>

          <input
            type="number"
            name="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Price per KG"
            className="w-full p-3 border text-black "
            required
          />

          <input
            type="text"
            value={`Rs. ${total}`}
            readOnly
            className="w-full p-3 border bg-gray-200 text-black "
          />

          <button type="submit" className="w-full p-3 bg-black text-white font-bold active:bg-white active:text-black">
            Place Order
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
          const response = await fetch("http://localhost:8080/api/order");
          const data = await response.json();
          setBids(data);
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
    <div className="bg-white mt-6 p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-black">Order deatils</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-700">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type of Rice</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left"> price</th>
                <th className="p-3 text-left"> Total</th>
                </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? data.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-black">{formatDate(row.date)}</td>
                  <td className="p-3 text-black">{row.riceType}</td>
                  <td className="p-3 text-black">{row.quantity}kg</td>
                  <td className="p-3 text-black">Rs. {row.price}</td>
                  <td className="p-3 text-black">Rs. {row.total}</td>

                  </tr>)) : (<tr><td colSpan="4" className="p-3 text-gray-500 text-center">No bids available.</td></tr>)}
            </tbody>
          </table>
        </div>
  );
}