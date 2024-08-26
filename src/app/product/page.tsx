"use client";
import React from "react";

const Product = () => {
  const handleClickBuyNow = () => {};
  return (
    <div className="w-full h-screen bg-product bg-cover bg-center px-6 py-8">
      <div className="h-full flex flex-col justify-end">
        <div className="w-full flex flex-col bg-[#F9FAFB] opacity-80 rounded-xl p-6 gap-4">
          <h4 className="text-3xl font-bold text-black">Shirt</h4>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat risus non sapien posuere ultricies. Mauris hendrerit magna
            dolor, vel pulvinar elit aliquet sed.
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold text-black">฿ 999.00</p>
            <button
              className="rounded-lg bg-black text-white px-4 py-2"
              onClick={() => handleClickBuyNow()}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;