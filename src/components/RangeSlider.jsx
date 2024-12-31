"use client";

export default function RangeSlider({ priceRange, setPriceRange }) {
  return (
    <div className="mb-6">
      <label className="block font-bold mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
      <input
        type="range"
        min="0"
        max="1000"
        step="50"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        className="w-full"
      />
      <input
        type="range"
        min="0"
        max="1000"
        step="50"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        className="w-full mt-2"
      />
    </div>
  );
}
