import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white dark:bg-neutral-900 rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl mb-2 dark:text-white">
            {product.title}
          </h3>

          <p className="text-[#7A5C49]">
            ₩{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  )
}