import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div
      className="product-card bg-moonlitBlue p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Product Image */}
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <h2 className="text-lg font-bold mb-1">{product.name}</h2>
      <p className="text-starryGlow mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm mb-4">{product.description}</p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <Link
          href={`/products/${product.id}`}
          className="text-center px-4 py-2 bg-goldenStar text-deepBlue font-bold rounded hover:bg-starlight transition-all"
        >
          View Details
        </Link>
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
