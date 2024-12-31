"use client";

import { useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card bg-moonlitBlue p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        {/* Quick Info Tooltip */}
        {isHovered && (
          <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            {product.category || "Category"}
          </div>
        )}
      </div>

      {/* Product Details */}
      <h2 className="text-lg font-bold mb-1">{product.name}</h2>
      <p className="text-starryGlow mb-2">${product.price.toFixed(2)}</p>

      {/* Star Rating */}
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              index < Math.round(product.rating || 0) ? "text-goldenStar" : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Product Description */}
      <p className="text-sm mb-4">{product.description}</p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <a
          href={`/product/${product.id}`}
          className="text-center px-4 py-2 bg-goldenStar text-deepBlue font-bold rounded hover:bg-starlight transition-all"
        >
          View Details
        </a>
        <button
          className="px-4 py-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-800 transition-all"
          onClick={() => alert(`Added ${product.name} to cart!`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
