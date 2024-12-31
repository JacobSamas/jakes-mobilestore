"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-lg font-bold mb-2">Order Summary</h2>
        <p>Items: $1298.00</p>
        <p>Shipping: $20.00</p>
        <p>Total: $1318.00</p>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div>
          <label className="block font-bold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-goldenStar text-deepBlue font-bold rounded hover:bg-starlight transition-all"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
