"use client";

import { useState } from "react";

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
      
      const response = await fetch("http://localhost:8080/api/customer/67dd575ae25ac3b86ec25f46");
      if (!response.ok) {
        throw new Error("Failed to fetch customer data");
      }
      const customerData = await response.json();
  
      
      if (customerData.CPassowrd !== currentPassword) {
        setMessage("Current password is incorrect.");
        return;
      }
  
      
      const updateResponse = await fetch("http://localhost:8080/api/customer/67dd575ae25ac3b86ec25f46", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...customerData,
          CPassowrd: newPassword, 
        }),
      });
  
      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        setMessage(errorData.message || "Failed to update password.");
        return;
      }
  
      
      setMessage("Password changed successfully!");
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
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
        <ul className="space-y-2">
          <li>
            <a href="/Customer-dash/page-info" className="block px-4 py-2 rounded hover:bg-gray-200">
              Profile
            </a>
          </li>
          <li>
            <a href="/Customer-dash/page-info/sequrity" className="block px-4 py-2 rounded bg-blue-100 text-blue-600 font-semibold">
              Security
            </a>
          </li>
          <li>
            <a href="/Customer-dash/page-info/about" className="block px-4 py-2 rounded hover:bg-gray-200">
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
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
