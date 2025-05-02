"use client";

import { useState } from "react";
import Link from "next/link";

export default function SecurityPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }
  
    try {
      
      const response = await fetch("http://localhost:8080/api/supplier/67ddbbb75e2375995751f4d2");
      if (!response.ok) {
        throw new Error("Failed to fetch customer data");
      }
      const customerData = await response.json();
  
      
      if (customerData.supplierPassword !== currentPassword) {
        setMessage("Current password is incorrect.");
        return;
      }
  
      
      const updateResponse = await fetch("http://localhost:8080/api/supplier/67ddbbb75e2375995751f4d2", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...customerData,
          supplierPassword: newPassword, 
        }),
      });
  
      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        setMessage(errorData.message || "Failed to update password.");
        return;
      }
  
      
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="min-h-screen flex bg-gray-100 text-black">
      
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6">Supplier Panel</h2>
        <ul className="space-y-2">
        <li>
                <Link href="/Supplier-dash/spage-info">
                <span className="block px-4 py-2 rounded hover:bg-blue-100  font-semibold cursor-pointer">
                    Profile
                </span>
                </Link>
            </li>
            <li>
                <Link href="/Supplier-dash/spage-info/Sup-sequrity">
                <span className="block px-4 py-2 rounded hover:bg-gray-200 text-blue-600 font-semibold cursor-pointer">
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

     
      <div className="flex-1 p-6">
        <div className="w-full h-full mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Security Settings</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full p-2 border rounded text-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full p-2 border rounded text-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border rounded text-gray-900"
              />
            </div>

            {message && <p className="text-sm text-red-500">{message}</p>}

            <button
              type="submit"
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
