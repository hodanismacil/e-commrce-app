import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { getCartItems, saveCartItems,type  CartItem } from "../utils/cart";

const Carts= () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQuantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;

          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
    saveCartItems(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#111] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="mx-auto w-16 h-16 text-gray-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-300">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-3">
              Looks like you haven’t added anything yet.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="mt-8 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-8 rounded-xl transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1a1a1a] rounded-3xl p-5 flex flex-col md:flex-row items-center gap-6 shadow-lg"
                >
                  <div className="bg-[#2a2a2a] rounded-2xl w-full md:w-[180px] h-[180px] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p className="text-gray-400 text-sm mt-2 leading-6">
                      {item.description}
                    </p>
                    <p className="text-[#39FF14] text-2xl font-bold mt-4">
                      ${item.price}
                    </p>

                    <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 bg-[#222] px-4 py-2 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.id, "decrease")}
                          className="bg-[#333] hover:bg-[#444] p-2 rounded-lg transition"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="text-lg font-semibold min-w-[30px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, "increase")}
                          className="bg-[#333] hover:bg-[#444] p-2 rounded-lg transition"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 h-fit shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t border-gray-700 pt-4 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("some-checkout-page or-function")}
                className="w-full mt-8 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-4 rounded-xl transition"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/products")}
                className="w-full mt-4 border border-gray-600 hover:border-white text-white font-semibold py-4 rounded-xl transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;