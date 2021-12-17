import React from 'react';

const AllProduct = ({product}) => {
    const {name, price, description, age, img, rating} = product;
    return (
        <div class="max-w-lg rounded overflow-hidden shadow-lg">
  <img className="w-full h-2/4" src={img} alt="baby" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: ${price}</p>
    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Steps: {age}</p>
    <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Customer Ratings: {rating}</p>
    <br />
    <button
        className="bg-pink-500 py-2 px-4 rounded-full mt-2 hover:opacity-75"
    >Buy Now</button>
  </div>
</div>
);
};

export default AllProduct;