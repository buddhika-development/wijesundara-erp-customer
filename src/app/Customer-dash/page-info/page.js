"use client";

import { useState, useEffect } from "react";

export default function SupplierProfile() {
  const [data, setSupplier] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/customer/67dd575ae25ac3b86ec25f46");
        const fetchedData = await response.json();
        setSupplier(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-black">
      
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
        <ul className="space-y-2">
          <li>
            <a href="/Customer-dash/page-info" className="block px-4 py-2 rounded bg-blue-100 text-blue-600 font-semibold">
              Profile
            </a>
          </li>
          <li>
            <a href="/Customer-dash/page-info/sequrity" className="block px-4 py-2 rounded hover:bg-gray-200">
              Sequrity
            </a>
          </li>
          <li>
            <a href="/Customer-dash/page-info/about" className="block px-4 py-2 rounded hover:bg-gray-200">
              About
            </a>
          </li>
        </ul>
      </div>

      
      <div className="flex-1 p-6">
        <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Customer Profile</h1>

          {data && data.Cname ? (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  value={data.Cname}
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  value={data.CEmail }
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Contact</span>
                <input
                  type="text"
                  value={data.supplier_contact}
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Address Line 1</span>
                <input
                  type="text"
                  value={data.customer_address_line_one }
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Address Line 2</span>
                <input
                  type="text"
                  value={data.customer_address_line_two }
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <label className="block">
                <span className="text-gray-700">City</span>
                <input
                  type="text"
                  value={data.customer_address_city }
                  className="w-full p-2 border rounded text-gray-900 font-semibold"
                  readOnly
                />
              </label>

              <button
                type="submit"
                className="w-1/2 p-3 bg-black text-white font-bold rounded active:bg-white active:text-black"
              >
                Update Profile
              </button>
            </form>
          ) : (
            <p className="p-3 text-gray-500 text-center">No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
