"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Mock login success (Replace with API call)
    if (email === "admin@example.com" && password === "password") {
      router.push("/Supplier-dash");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Grey Background */}
      <div className="w-2/4 bg-gray-300"><input type="image"/></div>

      {/* Right Side - Login Form */}
      <div className="w-2/4 flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-black">WIJESUNDARA RICE</h1>
        <h2 className="text-xl font-bold mb-6 text-black">WELCOME AGAIN</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            className="w-full p-3 border bg-gray-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Account password"
            className="w-full p-3 border bg-gray-300"
            required
          />

          <div className="flex justify-end text-sm text-gray-600">
            <a href="/forgot-password" className="hover:underline">Forgot password</a>
          </div>

          <button type="submit" className="w-full p-3 bg-gray-500 text-white font-bold">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-black hover:text-red">
          Already Haven't an account? <a href="/regidter-cus" className="font-bold hover:underline text-black hover:text-red">Register</a>
        </p>
      </div>
    </div>
  );
}
