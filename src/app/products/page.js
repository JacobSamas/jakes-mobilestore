"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { gsap } from "gsap";
import RangeSlider from "../../components/RangeSlider";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [loading, setLoading] = useState(true);

  const mockProducts = [
    { id: 1, name: "iPhone 13", price: 799, description: "Latest Apple iPhone", image: "/images/iphone13.jpg", category: "Apple", rating: 4.5 },
    { id: 2, name: "Galaxy S21", price: 699, description: "Samsung flagship", image: "/images/galaxy-s21.jpg", category: "Samsung", rating: 4.0 },
    { id: 3, name: "Pixel 6", price: 599, description: "Google Pixel device", image: "/images/pixel6.jpg", category: "Google", rating: 4.2 },
    { id: 4, name: "OnePlus 9", price: 649, description: "Fast and smooth", image: "/images/oneplus9.jpg", category: "OnePlus", rating: 4.3 },
  ];

  useEffect(() => {
    setLoading(true);
    let filteredProducts = [...mockProducts];

    if (categoryFilter) {
      filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter);
    }

    filteredProducts = filteredProducts.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "price-low-to-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-to-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-high-to-low") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 500); 
  }, [searchQuery, sortOption, categoryFilter, priceRange]);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power1.out" }
    );
  }, [products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h1>

      {/* Filters and Sorting */}
      <div className="flex flex-wrap justify-between items-center mb-6 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="rating-high-to-low">Rating: High to Low</option>
        </select>

        <select
          className="px-4 py-2 border rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Filter By Category</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          <option value="OnePlus">OnePlus</option>
        </select>
      </div>

      {/* Price Range Slider */}
      <RangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center py-12">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
