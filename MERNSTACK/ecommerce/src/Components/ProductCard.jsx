// import React from 'react'

const ProductCard = () => {
  const productList = [
    {
      id: 1,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
    {
      id: 2,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
    {
      id: 3,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
    {
      id: 4,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
    {
      id: 5,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
    {
      id: 6,
      productimage:
        "https://imgs.search.brave.com/2PQEPWiUCeyvoCuO2FTFYNl5DfmXnJTfGcA2qz5yaBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDM4MDgwMzM1ODct/OTM1OTQyODQ3ZGU0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSE5vYjJW/ekpUSXdjR2h2ZEc5/bmNtRndhSGw4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
      productname: "Nike Air Max",
      description: "Air Max is a line of basketball shoes.",
      price: 10,
    },
  ];
  return (
    <div className="">
      <section className="flex flex-wrap">
        {productList.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-gray-200 rounded-xl w-[500px] h-[400px] p-6 m-4  "
            >
              <img
                src={product.productimage}
                alt={product.productname}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg">{product.productname}</h2>
                  <p className="text-sm text-gray-700">{product.description}</p>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-lg">${product.price}</h3>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-500 text-white p-4 rounded-lg mt-4 ">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProductCard;
