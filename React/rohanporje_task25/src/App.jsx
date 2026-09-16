import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'
import Navbar from "./components/Navbar";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 7499,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
  },
  {
    id: 3,
    name: "Puma Running Shoes",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
  },
  {
    id: 4,
    name: "New Balance 574",
    price: 6799,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500",
  },
  {
    id: 5,
    name: "Nike Revolution",
    price: 3899,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
  },
  {
    id: 6,
    name: "Reebok Classic",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1578314921455-34dd4626b38d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  
  const addToCart = (shoe) => {
    const existingItem = cart.find((item) => item.id === shoe.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Your Perfect Shoes
          </h2>

          <p className="text-gray-500 mt-2">
            Choose from our collection of stylish shoes.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-5">
              Available Shoes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {shoes.map((shoe) => (
                <div
                  key={shoe.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {shoe.name}
                    </h3>

                    <p className="text-xl font-bold text-gray-900 mt-2">
                      ₹{shoe.price}
                    </p>

                    <button
                      onClick={() => addToCart(shoe)}
                      className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

          
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-5">

              <h2 className="text-2xl font-bold mb-6">
                Shopping Cart
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    Your cart is empty.
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    Add some shoes to your cart.
                  </p>
                </div>
              ) : (
                <div>

                  
                  <div className="space-y-5">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 border-b border-gray-200 pb-5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="text-gray-600 mt-1">
                            ₹{item.price}
                          </p>

                          
                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100"
                            >
                              -
                            </button>

                            <span className="font-medium">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => addToCart(item)}
                              className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        
                        <div className="font-semibold">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  
                  <div className="flex justify-between mt-6 pt-5 border-t border-gray-300">
                    <span className="text-lg font-semibold">
                      Total
                    </span>

                    <span className="text-xl font-bold">
                      ₹{total}
                    </span>
                  </div>

                  <button className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                    Checkout
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
