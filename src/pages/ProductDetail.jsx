import { useParams, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { doc, getDoc } from 'firebase/firestore'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { db } from '../firebase/firebase'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

export default function ProductDetail() {
  const { id } = useParams()

  const { addToCart } = useContext(CartContext)
  const { darkMode } = useContext(ThemeContext)

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data(),
          })
        } else {
          setProduct(null)
        }
      } catch (error) {
        console.error('상품 상세 불러오기 오류:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <>
        <Header />

        <section
          style={{
            minHeight: '100vh',
            padding: '160px 20px',
            background: darkMode ? '#181818' : '#f8f5f1',
            color: darkMode ? 'white' : '#3d3126',
            textAlign: 'center',
          }}
        >
          <h1>상품 정보를 불러오는 중입니다...</h1>
        </section>

        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Header />

        <section
          style={{
            minHeight: '100vh',
            padding: '160px 20px',
            background: darkMode ? '#181818' : '#f8f5f1',
            color: darkMode ? 'white' : '#3d3126',
            textAlign: 'center',
          }}
        >
          <h1>상품을 찾을 수 없습니다.</h1>

          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginTop: '30px',
              color: '#8e735b',
            }}
          >
            홈으로 돌아가기
          </Link>
        </section>

        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <section
        style={{
          minHeight: '100vh',
          padding: '150px 20px 100px',
          background: darkMode ? '#181818' : '#f8f5f1',
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
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '620px',
                objectFit: 'cover',
                borderRadius: '32px',
                boxShadow: darkMode
                  ? '0 20px 50px rgba(0,0,0,0.35)'
                  : '0 20px 50px rgba(0,0,0,0.08)',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                letterSpacing: '4px',
                color: '#8e735b',
                marginBottom: '22px',
              }}
            >
              LULLYDAY COLLECTION
            </p>

            <h1
              style={{
                fontSize: '56px',
                fontWeight: '400',
                marginBottom: '26px',
                color: darkMode ? 'white' : '#3d3126',
                lineHeight: 1.15,
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                fontSize: '28px',
                marginBottom: '34px',
                color: '#8e735b',
              }}
            >
              {Number(product.price).toLocaleString()}원
            </p>

            <p
              style={{
                lineHeight: 2,
                color: darkMode ? '#d8cfc6' : '#6f6257',
                marginBottom: '24px',
                fontSize: '18px',
              }}
            >
              {product.description}
            </p>

            <p
              style={{
                lineHeight: 2,
                color: darkMode ? '#bfb5aa' : '#7a6b5e',
                marginBottom: '44px',
                fontSize: '16px',
              }}
            >
              {product.detail}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => addToCart(product)}
                style={{
                  padding: '18px 42px',
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

              <Link
                to="/cart"
                style={{
                  padding: '18px 42px',
                  border: '1px solid #8e735b',
                  color: darkMode ? 'white' : '#8e735b',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
              >
                장바구니 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}