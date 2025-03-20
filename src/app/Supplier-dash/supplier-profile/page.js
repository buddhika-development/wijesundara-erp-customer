"use client";

import { useState, useEffect } from "react";

export default function SupplierProfile() {
//   const [supplier, setSupplier] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch supplier profile from the backend
//   useEffect(() => {
//     async function fetchSupplier() {
//       try {
//         const response = await fetch("http://localhost:8080/api/suppliers/660abcd1234567890abcd123");
//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.error || "Failed to fetch supplier");
//         }

//         setSupplier(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchSupplier();
//   }, []);

//   // Handle profile update
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const updatedData = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("http://localhost:8080/api/suppliers/660abcd1234567890abcd123", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedData),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error);

//       alert("Profile updated successfully!");
//       setSupplier(data); // Update state with new data
//     } catch (err) {
//       alert("Error updating profile: " + err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Supplier Profile</h1>
      {/* <form onSubmit={handleUpdate} className="space-y-3"> */}
      <form className="space-y-3">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="supplier_name"
            // defaultValue={supplier.supplier_name}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="supplierEmail"
            // defaultValue={supplier.supplierEmail}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Contact</span>
          <input
            type="text"
            name="supplier_contact"
            // defaultValue={supplier.supplier_contact}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Address Line 1</span>
          <input
            type="text"
            name="supplier_address_line_one"
            // defaultValue={supplier.supplier_address_line_one}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Address Line 2</span>
          <input
            type="text"
            name="supplier_address_line_two"
            // defaultValue={supplier.supplier_address_line_two || ""}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">City</span>
          <input
            type="text"
            name="supplier_address_city"
            // defaultValue={supplier.supplier_address_city}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <button type="submit" className="w-full p-3 bg-black text-white font-bold rounded active:background active:bg-white  active:text-black">
          Update Profile
        </button>
      </form>
    </div>
    </div>
  );
}
