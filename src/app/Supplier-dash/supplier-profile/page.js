"use client";

import { useState, useEffect } from "react";

export default function SupplierProfile() {
  const [data, setSupplier] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/supplier/67ddbbb75e2375995751f4d2");
                const fetchedData = await response.json();
            
                setSupplier(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Supplier Profile</h1>
      
      { data && data.supplier_name ? ( 
      <form className="space-y-3">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="supplier_name"
           value={data.supplier_name}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="supplierEmail"
            value={data.supplierEmail}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Contact</span>
          <input
            type="text"
            name="supplier_contact"
            value={data.supplier_contact}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Address Line 1</span>
          <input
            type="text"
            name="supplier_address_line_one"
            value={data.supplier_address_line_one}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Address Line 2</span>
          <input
            type="text"
            name="supplier_address_line_two"
            value={data.supplier_address_line_two}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <label className="block">
          <span className="text-gray-700">City</span>
          <input
            type="text"
            name="supplier_address_city"
            value={data.supplier_address_city}
            className="w-full p-2 border rounded text-black"
            readOnly
          />
        </label>

        <button type="submit" className="w-full p-3 bg-black text-white font-bold rounded active:background active:bg-white  active:text-black">
          Update Profile
        </button>
      </form>
      ) : (
        <p>not fount supplier deatils</p>
      )}
    </div>
    </div>
  );
}
