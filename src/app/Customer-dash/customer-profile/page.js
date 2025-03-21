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

    console.log("Current state data:", data);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-black">Customer Profile</h1>

                { data && data.Cname ? ( 
                    <div className="border-b">
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <label className="block">
                                <span className="text-gray-700">Name</span>
                                <input
                                    type="text"
                                    name="customer_name"
                                    value={data.Cname || ""}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    readOnly
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input
                                    type="email"
                                    name="customer_email"
                                    value={data.CEmail || ""}
                                    readOnly
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Contact</span>
                                <input
                                    type="text"
                                    name="customer_contact"
                                    value={data.supplier_contact || ""}
                                    readOnly
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Address Line 1</span>
                                <input
                                    type="text"
                                    name="customer_address_line_one"
                                    value={data.customer_address_line_one || ""}
                                    readOnly
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Address Line 2</span>
                                <input
                                    type="text"
                                    name="customer_address_line_two"
                                    value={data.customer_address_line_two || ""}
                                    readOnly
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">City</span>
                                <input
                                    type="text"
                                    name="customer_address_city"
                                    value={data.customer_address_city || ""}
                                    
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    readOnly
                                />
                            </label>
                            
                            <button
                                type="submit"
                                className="w-1/2  p-3 bg-black text-white font-bold rounded active:bg-white active:text-black">
                                Update Profile
                            </button>
                        </form>
                    </div>
                ) : (
                    <p className="p-3 text-gray-500 text-center">No data available.</p>
                )}
            </div>
        </div>
    );
}
