import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext)
  
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <main className="min-h-screen bg-[#F6F1EB] dark:bg-black dark:text-white px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl mb-16">
          CART
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-neutral-900 rounded-[30px] p-6 flex items-center gap-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl mb-2">
                  {item.title}
                </h2>

                <p className="text-[#7A5C49] mb-4">
                  ₩{item.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-red-500"
                >
                  삭제하기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-right">
          <p className="text-3xl">
            Total: ₩{totalPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  )
}