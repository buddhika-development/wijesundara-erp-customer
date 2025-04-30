// "use client";

// import { useState, useEffect } from "react";

// export default function SupplierProfile() {
//   const [data, setSupplier] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("http://localhost:8080/api/supplier/67ddbbb75e2375995751f4d2");
//                 const fetchedData = await response.json();
//                 if (!response.ok) {
//                   throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
            
//                 setSupplier(fetchedData);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//     <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-black">Supplier Profile</h1>
      
//       { data && data.supplier_name ? ( 
//       <form className="space-y-3">
//         <label className="block">
//           <span className="text-gray-700">Name</span>
//           <input
//             type="text"
//             name="supplier_name"
//            value={data.supplier_name }
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Email</span>
//           <input
//             type="email"
//             name="supplierEmail"
//             value={data.supplierEmail}
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Contact</span>
//           <input
//             type="text"
//             name="supplier_contact"
//             value={data.supplier_contact}
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Address Line 1</span>
//           <input
//             type="text"
//             name="supplier_address_line_one"
//             value={data.supplier_address_line_one}
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Address Line 2</span>
//           <input
//             type="text"
//             name="supplier_address_line_two"
//             value={data.supplier_address_line_two}
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">City</span>
//           <input
//             type="text"
//             name="supplier_address_city"
//             value={data.supplier_address_city}
//             className="w-full p-2 border rounded text-black"
//             readOnly
//           />
//         </label>

//         <button type="submit" className="w-full p-3 bg-black text-white font-bold rounded active:background active:bg-white  active:text-black">
//           Update Profile
//         </button>
//       </form>
//       ) : (
//         <p>not fount supplier deatils</p>
//       )}
//     </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Supplier Profile</h1>

        {data ? (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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

