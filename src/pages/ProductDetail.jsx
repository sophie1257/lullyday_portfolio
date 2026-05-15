import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const products = [
  {
    id: 1,
    title: 'Soft Baby Blanket',
    price: 39000,
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    description:
      '부드러운 촉감과 따뜻한 컬러감으로 아이와 반려동물 모두에게 편안함을 전합니다.',
  },
  {
    id: 2,
    title: 'Wood Toy Set',
    price: 52000,
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
    description:
      '자연 소재의 감성을 담은 우드 토이 컬렉션입니다.',
  },
  {
    id: 3,
    title: 'Natural Baby Knit',
    price: 47000,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    description:
      '포근한 니트 텍스처와 내추럴한 무드가 특징입니다.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return <h1>상품이 없습니다.</h1>
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '140px 20px',
        background: '#f8f5f1',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '70px',
          alignItems: 'center',
        }}
      >
        {/* IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* INFO */}
        <div>
          <p
            style={{
              letterSpacing: '4px',
              color: '#8e735b',
              marginBottom: '20px',
            }}
          >
            LULLYDAY COLLECTION
          </p>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: '400',
              marginBottom: '26px',
              color: '#3d3126',
            }}
          >
            {product.title}
          </h1>

          <p
            style={{
              fontSize: '28px',
              marginBottom: '30px',
              color: '#8e735b',
            }}
          >
            {product.price.toLocaleString()}원
          </p>

          <p
            style={{
              lineHeight: 2,
              color: '#6f6257',
              marginBottom: '40px',
              fontSize: '18px',
            }}
          >
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            style={{
              padding: '18px 40px',
              border: 'none',
              background: '#8e735b',
              color: 'white',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </section>
  )
}