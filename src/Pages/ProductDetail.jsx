import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import products from '../data/products'
import { CartContext } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  return (
    <main className="min-h-screen bg-[#F6F1EB] dark:bg-black dark:text-white px-6 py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-[40px]"
        />

        <div>
          <p className="tracking-[0.3em] text-sm mb-6 text-[#7A5C49]">
            LULLY DAY
          </p>

          <h1 className="text-5xl mb-8">
            {product.title}
          </h1>

          <p className="text-3xl mb-10">
            ₩{product.price.toLocaleString()}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-[#7A5C49] text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </main>
  )
}