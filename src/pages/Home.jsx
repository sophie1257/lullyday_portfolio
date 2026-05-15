import Header from '../components/Header'
import Footer from '../components/Footer'

import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'

import { db } from '../firebase/firebase'

import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

import { motion } from 'framer-motion'

export default function Home() {
  const { addToCart } = useContext(CartContext)
  const { darkMode } = useContext(ThemeContext)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          orderBy('createdAt', 'desc')
        )

        const querySnapshot = await getDocs(q)

        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setProducts(productList)
      } catch (error) {
        console.error('상품 불러오기 오류:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        style={{
          height: '100vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.25)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '20px',
          }}
        >
          <p
            style={{
              letterSpacing: '5px',
              marginBottom: '20px',
            }}
          >
            LULLYDAY
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Soft moments
            <br />
            for little lives
          </h1>

          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.8,
            }}
          >
            아이와 반려동물을 위한
            <br />
            감성 라이프스타일 브랜드
          </p>
        </motion.div>
      </section>

      {/* BRAND STORY */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '140px 20px',
          background: darkMode ? '#181818' : '#f8f5f1',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#8e735b',
            letterSpacing: '4px',
            marginBottom: '20px',
          }}
        >
          BRAND STORY
        </p>

        <h2
          style={{
            fontSize: '48px',
            fontWeight: '400',
            marginBottom: '30px',
            color: darkMode ? 'white' : '#3d3126',
          }}
        >
          작은 하루를 더 따뜻하게
        </h2>

        <p
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 2,
            color: darkMode ? '#d8cfc6' : '#6f6257',
            fontSize: '18px',
          }}
        >
          LullyDay는 아이와 반려동물이 함께하는
          일상 속에서 편안함과 따뜻함을 전하는
          라이프스타일 브랜드입니다.
          <br />
          자연스러운 컬러와 부드러운 소재,
          그리고 오래 기억될 감성을 담았습니다.
        </p>
      </motion.section>

      {/* COLLECTION */}
      <section
        style={{
          padding: '140px 20px',
          background: darkMode ? '#111111' : 'white',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '70px',
          }}
        >
          <p
            style={{
              color: '#8e735b',
              letterSpacing: '4px',
              marginBottom: '20px',
            }}
          >
            BEST COLLECTION
          </p>

          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: darkMode ? 'white' : '#3d3126',
            }}
          >
            Everyday Favorites
          </h2>
        </div>

        {loading ? (
          <p
            style={{
              textAlign: 'center',
              color: darkMode ? 'white' : '#3d3126',
            }}
          >
            상품을 불러오는 중입니다...
          </p>
        ) : products.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: darkMode ? 'white' : '#3d3126',
            }}
          >
            등록된 상품이 없습니다. Admin에서 상품을 등록해주세요.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: darkMode ? '#1f1f1f' : '#fff',
                  boxShadow: darkMode
                    ? '0 10px 30px rgba(0,0,0,0.25)'
                    : '0 10px 30px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: '100%',
                        height: '420px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Link>
                </div>

                <div style={{ padding: '32px' }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '26px',
                        marginBottom: '14px',
                        color: darkMode ? 'white' : '#3d3126',
                      }}
                    >
                      {product.title}
                    </h3>
                  </Link>

                  <p
                    style={{
                      color: '#8e735b',
                      marginBottom: '28px',
                      fontSize: '18px',
                    }}
                  >
                    {Number(product.price).toLocaleString()}원
                  </p>

                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => addToCart(product)}
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: 'none',
                      background: '#8e735b',
                      color: 'white',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      fontSize: '16px',
                    }}
                  >
                    장바구니 담기
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* MOOD GALLERY */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '140px 20px',
          background: darkMode ? '#181818' : '#f8f5f1',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '70px',
          }}
        >
          <p
            style={{
              color: '#8e735b',
              letterSpacing: '4px',
              marginBottom: '20px',
            }}
          >
            LIFESTYLE MOOD
          </p>

          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: darkMode ? 'white' : '#3d3126',
            }}
          >
            Everyday with warmth
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
          ].map((img, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={img}
              alt="LullyDay mood"
              style={{
                width: '100%',
                height: '340px',
                objectFit: 'cover',
                borderRadius: '24px',
              }}
            />
          ))}
        </div>
      </motion.section>

      <Footer />
    </>
  )
}