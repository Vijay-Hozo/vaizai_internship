import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";

const ProductCard = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/products"
      );

      console.log("API Response:", response.data);

      // If backend returns:
      // { success: true, data: [...] }

      const products = response.data.data || [];

      setProductList(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = () => {
    const searchText = searchRef.current.value.toLowerCase();

    const filtered = productList.filter((product) =>
      product.productName.toLowerCase().includes(searchText)
    );

    setFilteredProducts(filtered);
  };

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        Cart Count: {count}
      </h1>

      <h2 className="text-xl font-bold text-center mb-4">
        Total Price: ₹{totalPrice}
      </h2>

      {/* Search */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Products"
          className="border p-2 rounded w-[400px]"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {/* Products */}
      <section className="flex flex-wrap justify-center">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-xl w-[350px] p-4 m-4 shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">
                  {product.productName}
                </h2>

                <p className="text-gray-600">
                  Product ID: {product.id}
                </p>
              </div>

              <h3 className="font-bold text-xl">
                ₹{product.price}
              </h3>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  addToCart(product);
                  setCount((prev) => prev + 1);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <h2 className="text-center text-gray-500 text-xl">
            No Products Found
          </h2>
        )}
      </section>
    </div>
  );
};

export default ProductCard;