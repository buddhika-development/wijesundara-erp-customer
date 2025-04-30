// import React from "react";
// import Link from "next/link";

// export default function StockDashboard() {
  
//   const stockData = [
//     { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
//     { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
//     { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
//     { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
//   ];

  
//   const totalOrdered = stockData.reduce((sum, item) => sum + item.ordered, 0);                                                  
//   const totalSupplied = stockData.reduce((sum, item) => sum + item.supplied, 0);
//   const totalRemaining = totalOrdered - totalSupplied;

//   return (
     
//     <div className="min-h-screen bg-gray-100 p-6">
//     <div className="bg-white shadow-md rounded-lg p-4">
//     <div className="flex justify-between items-center border-b pb-3 mb-4">
//           <h1 className="text-xl font-bold text-black">WIJESUNDARA RICE</h1>
//           <div className="text-gray-600"><Link href="/Supplier-dash/supplier-profile">Buddhika Madusanka</Link>
//           <span className="text-gray-400 text-sm">Supplier</span></div>
//         </div>
      

      
//       <nav className="flex space-x-4 mb-6 border-b pb-3">
//           <button><Link href="/Supplier-dash" className="text-gray-700 font-semibold hover:text-black">Dashboard</Link></button>
//           <div className="bg-gray-300 w-40 h-12 flex items-center justify-center rounded-lg"> <button className="w-full h-full"><Link href="/Supplier-dash/stocks" className="text-black font-semibold">Stocks</Link></button></div>
//           <button><Link href="/Supplier-dash/bids" className="text-gray-700 font-semibold hover:text-black">Bids</Link></button>
//         </nav>

      
//       <div className="grid grid-cols-3 gap-4 mt-6">
//         <div className="bg-white p-4 rounded-lg shadow-md text-center">
//           <h2 className="text-black">Total Ordered Quantity</h2>
//           <p className="text-2xl font-bold text-black">{totalOrdered} KG</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md text-center">
//           <h2 className="text-black">Total Supplied</h2>
//           <p className="text-2xl font-bold text-black">{totalSupplied} KG</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md text-center">
//           <h2 className="text-black">Remaining Stocks</h2>
//           <p className="text-2xl font-bold text-black">{totalRemaining} KG</p>
//         </div>
//       </div>

      
//       <div className="bg-white mt-6 p-4 shadow-md rounded-lg">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-b bg-gray-700">
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-left">Type of Rice</th>
//               <th className="p-3 text-left">Ordered Quantity</th>
//               <th className="p-3 text-left">Supplied Quantity</th>
//               <th className="p-3 text-left">Remaining Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stockData.map((stock, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-3 text-black">{stock.date}</td>
//                 <td className="p-3 text-black">{stock.type}</td>
//                 <td className="p-3 text-black">{stock.ordered}kg</td>
//                 <td className="p-3 text-black">{stock.supplied}kg</td>
//                 <td className="p-3 text-black">{stock.ordered - stock.supplied}kg</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//     </div>
//   );
// }
import React from "react";
import Link from "next/link";

export default function StockDashboard() {
  const stockData = [
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
    { date: "2024 Jan 24", type: "Rathu kekulu", ordered: 450, supplied: 150 },
  ];

  const totalOrdered = stockData.reduce((sum, item) => sum + item.ordered, 0);
  const totalSupplied = stockData.reduce((sum, item) => sum + item.supplied, 0);
  const totalRemaining = totalOrdered - totalSupplied;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">WIJESUNDARA RICE</h1>
          <div className="text-gray-600 text-right">
            <Link href="/Supplier-dash/supplier-profile" className="font-semibold hover:text-gray-800">Buddhika Madusanka</Link>
            <p className="text-gray-400 text-sm">Supplier</p>
          </div>
        </div>

        <nav className="flex space-x-6 mb-6 border-b pb-4">
          <Link href="/Supplier-dash" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Dashboard</Link>
          <Link href="/Supplier-dash/stocks" className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition">Stocks</Link>
          <Link href="/Supplier-dash/bids" className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">Bids</Link>
        </nav>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Total Ordered Quantity</h2>
            <p className="text-2xl font-bold text-blue-800">{totalOrdered} KG</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Total Supplied</h2>
            <p className="text-2xl font-bold text-green-800">{totalSupplied} KG</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-sm">
            <h2 className="text-gray-700">Remaining Stocks</h2>
            <p className="text-2xl font-bold text-yellow-800">{totalRemaining} KG</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-6 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-blue-500 text-white">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type of Rice</th>
                <th className="p-3 text-left">Ordered Quantity</th>
                <th className="p-3 text-left">Supplied Quantity</th>
                <th className="p-3 text-left">Remaining Quantity</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3 text-gray-700">{stock.date}</td>
                  <td className="p-3 text-gray-700">{stock.type}</td>
                  <td className="p-3 text-gray-700">{stock.ordered}kg</td>
                  <td className="p-3 text-gray-700">{stock.supplied}kg</td>
                  <td className="p-3 text-gray-700">{stock.ordered - stock.supplied}kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
