"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mockProducts = [
  {
    id: 1,
    name: "iPhone 13",
    price: 799,
    description: "Latest Apple iPhone",
    images: [
      "/images/iphone13.jpg",
      "/images/iphone13_side.jpg",
      "/images/iphone13_back.jpg",
    ],
    category: "Apple",
    rating: 4.5,
    stock: 10,
    variants: [
      { color: "Red", stock: 5 },
      { color: "Blue", stock: 3 },
      { color: "Black", stock: 2 },
    ],
    highlights: ["5G Enabled", "A15 Bionic Chip", "Super Retina XDR Display"],
    reviews: [
      { user: "John", rating: 5, comment: "Fantastic phone!" },
      { user: "Jane", rating: 4, comment: "Great, but expensive." },
    ],
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.images[0]);
      setSelectedVariant(foundProduct.variants[0]);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center py-12">Loading product...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/products" className="hover:underline"> Products</Link> &gt; 
        <span className="font-bold">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image and Thumbnails */}
        <div className="flex-1">
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image src={selectedImage} alt={product.name} width={800} height={600} className="object-cover w-full h-full" />
          </div>
          <div className="flex space-x-2">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer p-1 border rounded ${selectedImage === img ? "border-goldenStar" : "border-gray-300"}`}
              >
                <Image src={img} alt={`Thumbnail ${index + 1}`} width={80} height={80} className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-goldenStar text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>

          {/* Variants */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Choose Variant:</h3>
            <div className="flex space-x-4">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 border rounded ${selectedVariant?.color === variant.color ? "bg-goldenStar text-deepBlue" : "bg-gray-200 text-gray-700"}`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Stock: {selectedVariant?.stock || 0}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6">
            <label className="font-bold">Quantity:</label>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 border rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>

          {/* Highlights */}
          <ul className="mb-6">
            <h3 className="font-bold text-lg mb-2">Highlights:</h3>
            {product.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-400">- {highlight}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-goldenStar text-deepBlue font-bold rounded hover:bg-starlight transition-all">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white font-bold rounded hover:bg-gray-800 transition-all">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg">
              <p className="font-bold">{review.user}</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      starIndex < Math.round(review.rating) ? "text-goldenStar" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
