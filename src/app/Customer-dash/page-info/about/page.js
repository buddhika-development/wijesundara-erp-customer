// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can connect this to an API or email service
//     console.log("Form Submitted:", formData);
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100 text-black">
      
//       <div className="w-64 bg-white p-4 shadow-md">
//         <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
//         <ul className="space-y-2">
//           <li>
//             <a href="/Customer-dash" className="block px-4 py-2 rounded">
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="/Customer-dash/page-info"
//               className="block px-4 py-2 rounded hover:bg-gray-200"
//             >
//               Profile
//             </a>
//           </li>
//           <li>
//             <a
//               href="/Customer-dash/page-info/sequrity"
//               className="block px-4 py-2 rounded hover:bg-gray-200"
//             >
//               Security
//             </a>
//           </li>
//           <li>
//             <a
//               href="/Customer-dash/page-info/contact"
//               className="block px-4 py-2 rounded bg-blue-100 text-blue-600 font-semibold"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="flex-1 p-8">
//         <div className="h-full w-full p-6 bg-white shadow-md rounded-lg mx-auto">
//           <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
//           <p className="text-gray-600 mb-4">
//             Have questions or need help? Fill out the form below and we’ll get back to you.
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
