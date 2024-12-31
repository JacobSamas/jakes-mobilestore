"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const mockProducts = [
  { id: 1, name: "iPhone 13", price: 799, description: "Latest Apple iPhone", category: "Apple" },
  { id: 2, name: "Galaxy S21", price: 699, description: "Samsung flagship", category: "Samsung" },
  { id: 3, name: "Pixel 6", price: 599, description: "Google Pixel device", category: "Google" },
  { id: 4, name: "OnePlus 9", price: 649, description: "Fast and smooth", category: "OnePlus" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
