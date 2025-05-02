"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-black">
      {/* Sidebar */}
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
                <span className="block px-4 py-2 rounded hover:bg-gray-200 font-semibold cursor-pointer">
                    Security
                </span>
                </Link>
            </li>
            <li>
                <Link href="/Supplier-dash/spage-info/Sup-about">
                <span className="block px-4 py-2 rounded hover:bg-gray-200 text-blue-600  font-semibold cursor-pointer">
                    About
                </span>
                </Link>
            </li>
        </ul>
      </div>

      
      <div className="flex-1 p-8">
        <div className="f-full w-full p-6 bg-white shadow-md rounded-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">About Customer</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to your customer dashboard! This section gives you insights into your profile and usage.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Customer Features:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Manage your personal and contact information</li>
            <li>Track orders and service history</li>
            <li>Update your password in the Security tab</li>
            <li>Contact support for any assistance</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We're committed to providing a smooth and secure experience for all our users.
          </p>
        </div>
      </div>
    </div>
  );
}
