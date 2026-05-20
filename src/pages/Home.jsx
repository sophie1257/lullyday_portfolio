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
  const [showPopup, setShowPopup] = useState(true)

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

      {showPopup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.35)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            style={{
              width: '100%',
              maxWidth: '460px',
              background: darkMode ? '#1f1f1f' : '#fffaf4',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 24px 70px rgba(0,0,0,0.25)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255,255,255,0.85)',
                color: '#5f4632',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              ×
            </button>

            <div
              style={{
                height: '230px',
                backgroundImage:
                  'linear-gradient(rgba(80,55,35,0.15), rgba(80,55,35,0.15)), url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div
              style={{
                padding: '34px 30px 32px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  color: '#8e735b',
                  letterSpacing: '3px',
                  fontSize: '13px',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                SPECIAL EVENT
              </p>

              <h2
                style={{
                  fontSize: '30px',
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: darkMode ? 'white' : '#3d3126',
                  marginBottom: '16px',
                }}
              >
                펫 용품과 함께 구매 시
                <br />
                사은품 증정
              </h2>

              <p
                style={{
                  color: darkMode ? '#d8cfc6' : '#6f6257',
                  lineHeight: 1.8,
                  fontSize: '16px',
                  marginBottom: '28px',
                }}
              >
                Baby Care 상품과 Pet Daily 상품을 함께 구매하면
                LullyDay가 준비한 감성 사은품을 드려요.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  to="/promotion"
                  onClick={() => setShowPopup(false)}
                  style={{
                    display: 'inline-block',
                    padding: '14px 24px',
                    background: '#8e735b',
                    color: 'white',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                  }}
                >
                  이벤트 보러가기
                </Link>

                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    padding: '14px 24px',
                    background: darkMode ? '#2d2d2d' : '#efe7dd',
                    color: darkMode ? 'white' : '#5f4632',
                    border: 'none',
                    borderRadius: '999px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      

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

      {/* PROMOTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '120px 20px',
          background: darkMode ? '#111111' : '#f8f1e9',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                color: '#8e735b',
                letterSpacing: '4px',
                marginBottom: '20px',
                fontWeight: 600,
              }}
            >
              PROMOTION
            </p>

            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                lineHeight: 1.25,
                marginBottom: '24px',
                color: darkMode ? 'white' : '#3d3126',
              }}
            >
              아이와 반려동물이 함께하는
              <br />
              따뜻한 일상 기획전
            </h2>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.9,
                color: darkMode ? '#d8cfc6' : '#6f6257',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              LullyDay가 준비한 시즌 프로모션으로 포근한 육아용품과
              감성적인 반려동물 아이템을 만나보세요. 브랜드 무드와
              쇼핑몰 사용자 흐름을 고려해 구성한 기획전 페이지입니다.
            </p>

            <Link
              to="/promotion"
              style={{
                display: 'inline-block',
                padding: '16px 30px',
                background: '#8e735b',
                color: 'white',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              기획전 보러가기
            </Link>
          </div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              minHeight: '420px',
              borderRadius: '34px',
              backgroundImage:
                'linear-gradient(rgba(80, 55, 35, 0.25), rgba(80, 55, 35, 0.25)), url(https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: darkMode
                ? '0 20px 50px rgba(0,0,0,0.3)'
                : '0 20px 50px rgba(80,55,35,0.12)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '30px',
                bottom: '30px',
                right: '30px',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '26px',
                padding: '28px',
              }}
            >
              <p
                style={{
                  color: '#8e735b',
                  letterSpacing: '3px',
                  fontSize: '13px',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                NEW SEASON
              </p>

              <h3
                style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  color: '#3d3126',
                  marginBottom: '12px',
                }}
              >
                Warm Daily Collection
              </h3>

              <p
                style={{
                  color: '#6f6257',
                  lineHeight: 1.7,
                }}
              >
                Baby Care · Pet Daily · Family Lifestyle
              </p>
            </div>
          </motion.div>
        </div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '60px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              number: '01',
              title: 'Baby Care Week',
              desc: '부드러운 아기용품을 특별한 혜택으로 만나보세요.',
            },
            {
              number: '02',
              title: 'Pet Daily Items',
              desc: '반려동물과의 일상을 위한 감성 아이템 기획전.',
            },
            {
              number: '03',
              title: 'Family Lifestyle',
              desc: '아이와 반려동물이 함께하는 따뜻한 공간 제안.',
            },
          ].map((item) => (
            <motion.div
              key={item.number}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: darkMode ? '#1f1f1f' : '#fff',
                padding: '34px',
                borderRadius: '28px',
                boxShadow: darkMode
                  ? '0 12px 30px rgba(0,0,0,0.25)'
                  : '0 12px 30px rgba(80,55,35,0.08)',
              }}
            >
              <p
                style={{
                  color: '#8e735b',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                {item.number}
              </p>

              <h3
                style={{
                  fontSize: '24px',
                  marginBottom: '14px',
                  color: darkMode ? 'white' : '#3d3126',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: darkMode ? '#d8cfc6' : '#6f6257',
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
