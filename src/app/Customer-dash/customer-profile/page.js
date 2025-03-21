"use client";

import { useState, useEffect } from "react";

export default function SupplierProfile() {
    const [data, setSupplier] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/customer/67dd575ae25ac3b86ec25f46");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const fetchedData = await response.json();
                console.log("Fetched data:", fetchedData);
                setSupplier(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", data);
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
                                    onChange={(e) => setSupplier({ ...data, Cname: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input
                                    type="email"
                                    name="customer_email"
                                    value={data.CEmail || ""}
                                    onChange={(e) => setSupplier({ ...data, CEmail: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Contact</span>
                                <input
                                    type="text"
                                    name="customer_contact"
                                    value={data.supplier_contact || ""}
                                    onChange={(e) => setSupplier({ ...data, supplier_contact: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Address Line 1</span>
                                <input
                                    type="text"
                                    name="customer_address_line_one"
                                    value={data.customer_address_line_one || ""}
                                    onChange={(e) => setSupplier({ ...data, customer_address_line_one: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Address Line 2</span>
                                <input
                                    type="text"
                                    name="customer_address_line_two"
                                    value={data.customer_address_line_two || ""}
                                    onChange={(e) => setSupplier({ ...data, customer_address_line_two: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">City</span>
                                <input
                                    type="text"
                                    name="customer_address_city"
                                    value={data.customer_address_city || ""}
                                    onChange={(e) => setSupplier({ ...data, customer_address_city: e.target.value })}
                                    className="w-full p-2 border rounded text-gray-900 font-semibold"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="w-full p-3 bg-black text-white font-bold rounded active:bg-white active:text-black"
                            >
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
