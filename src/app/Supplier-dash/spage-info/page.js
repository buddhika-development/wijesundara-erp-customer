"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function SupplierProfile() {
    const [data, setSupplier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/supplier/67ddbbb75e2375995751f4d2");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const fetchedData = await response.json();
          setSupplier(fetchedData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-lg text-gray-700 font-semibold">Loading supplier details...</div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-red-600 font-semibold">Error: {error}</div>
        </div>
      );
    }

  return (
    <div className="min-h-screen flex bg-gray-100 text-black">
      
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6">Supplier Panel</h2>
        <ul className="space-y-2">
            <li>
                <Link href="/Supplier-dash/spage-info">
                <span className="block px-4 py-2 rounded hover:bg-blue-100 text-blue-600 font-semibold cursor-pointer">
                    Profile
                </span>
                </Link>
            </li>
            <li>
                <Link href="/Supplier-dash/spage-info/Sup-sequrity">
                <span className="block px-4 py-2 rounded hover:bg-gray-200 font-semibold cursor-pointer">
                    Security
                </span>
                </Link>
            </li>
            <li>
                <Link href="/Supplier-dash/spage-info/Sup-about">
                <span className="block px-4 py-2 rounded hover:bg-gray-200 font-semibold cursor-pointer">
                    About
                </span>
                </Link>
            </li>
        </ul>

      </div>
      <div className="flex-1 p-10">
        <div className=" w-full h-full p-10 bg-white shadow-md rounded-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Supplier Profile</h1>

        {data ? (
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <InputField label="Name" value={data.supplier_name} />
              <InputField label="Email" value={data.supplierEmail} type="email" />
              <InputField label="Contact" value={data.supplier_contact} />
              <InputField label="Address Line 1" value={data.supplier_address_line_one} />
              <InputField label="Address Line 2" value={data.supplier_address_line_two} />
              <InputField label="City" value={data.supplier_address_city} />
            </div>

            <button
              type="button"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              Update Profile
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-600">Supplier details not found.</p>
        )}
      </div>
    </div>

    </div>
  );
}
function InputField({ label, value, type = "text" }) {
    return (
      <div>
        <label className="text-gray-700 block mb-1">{label}</label>
        <input
          type={type}
          value={value || "N/A"}
          className="w-full p-2 border rounded-md text-gray-900 bg-gray-100 cursor-not-allowed"
          readOnly
        />
      </div>
    );
  }