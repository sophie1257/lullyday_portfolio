import {
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { db } from '../firebase/firebase'
import { ThemeContext } from '../context/ThemeContext'

export default function Admin() {
  const { darkMode } = useContext(ThemeContext)

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [detail, setDetail] = useState('')
  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([])
  const [listLoading, setListLoading] = useState(true)

  const [editingId, setEditingId] = useState(null)

  const fetchProducts = async () => {
    try {
      setListLoading(true)

      const q = query(
        collection(db, 'products'),
        orderBy('createdAt', 'desc')
      )

      const querySnapshot = await getDocs(q)

      const productList = querySnapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }))

      setProducts(productList)
    } catch (error) {
      console.error('상품 목록 불러오기 오류:', error)
    } finally {
      setListLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const resetForm = () => {
    setTitle('')
    setPrice('')
    setImage('')
    setDescription('')
    setDetail('')
    setEditingId(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !price || !image) {
      alert('상품명, 가격, 이미지는 필수입니다.')
      return
    }

    try {
      setLoading(true)

      if (editingId) {
        await updateDoc(doc(db, 'products', editingId), {
          title,
          price: Number(price),
          image,
          description,
          detail,
          updatedAt: new Date(),
        })

        alert('상품이 수정되었습니다.')
      } else {
        await addDoc(collection(db, 'products'), {
          title,
          price: Number(price),
          image,
          description,
          detail,
          createdAt: new Date(),
        })

        alert('상품이 등록되었습니다.')
      }

      resetForm()
      fetchProducts()
    } catch (error) {
      console.error('상품 저장 오류:', error)
      alert('상품 저장 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const ok = window.confirm('정말 이 상품을 삭제할까요?')

    if (!ok) return

    try {
      await deleteDoc(doc(db, 'products', id))

      alert('상품이 삭제되었습니다.')

      if (editingId === id) {
        resetForm()
      }

      fetchProducts()
    } catch (error) {
      console.error('상품 삭제 오류:', error)
      alert('상품 삭제 중 오류가 발생했습니다.')
    }
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setTitle(product.title || '')
    setPrice(product.price || '')
    setImage(product.image || '')
    setDescription(product.description || '')
    setDetail(product.detail || '')

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: darkMode
      ? '1px solid #444'
      : '1px solid #ddd',
    background: darkMode ? '#181818' : 'white',
    color: darkMode ? 'white' : '#3d3126',
    fontSize: '15px',
    marginBottom: '18px',
  }

  return (
    <>
      <Header />

      <section
        style={{
          minHeight: '100vh',
          padding: '150px 20px 100px',
          background: darkMode ? '#111' : '#f8f5f1',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* 등록 / 수정 폼 */}
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto 80px',
              background: darkMode ? '#1f1f1f' : 'white',
              padding: '50px',
              borderRadius: '28px',
              boxShadow: darkMode
                ? '0 20px 50px rgba(0,0,0,0.35)'
                : '0 20px 50px rgba(0,0,0,0.08)',
            }}
          >
            <p
              style={{
                letterSpacing: '4px',
                color: '#8e735b',
                marginBottom: '18px',
                textAlign: 'center',
              }}
            >
              ADMIN PAGE
            </p>

            <h1
              style={{
                fontSize: '42px',
                fontWeight: '400',
                color: darkMode ? 'white' : '#3d3126',
                textAlign: 'center',
                marginBottom: '18px',
              }}
            >
              {editingId ? '상품 수정' : '상품 등록'}
            </h1>

            {editingId && (
              <p
                style={{
                  textAlign: 'center',
                  color: '#8e735b',
                  marginBottom: '30px',
                }}
              >
                선택한 상품을 수정 중입니다.
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <label style={{ color: darkMode ? 'white' : '#3d3126' }}>
                상품명
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: Soft Baby Blanket"
                style={inputStyle}
              />

              <label style={{ color: darkMode ? 'white' : '#3d3126' }}>
                가격
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="예: 39000"
                style={inputStyle}
              />

              <label style={{ color: darkMode ? 'white' : '#3d3126' }}>
                이미지 URL
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                style={inputStyle}
              />

              <label style={{ color: darkMode ? 'white' : '#3d3126' }}>
                짧은 설명
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="상품의 짧은 설명을 입력하세요."
                rows="3"
                style={inputStyle}
              />

              <label style={{ color: darkMode ? 'white' : '#3d3126' }}>
                상세 설명
              </label>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="상품 상세 설명을 입력하세요."
                rows="5"
                style={inputStyle}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '18px',
                  border: 'none',
                  borderRadius: '14px',
                  background: loading ? '#aaa' : '#8e735b',
                  color: 'white',
                  fontSize: '16px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: '10px',
                }}
              >
                {loading
                  ? '저장 중...'
                  : editingId
                    ? '상품 수정하기'
                    : '상품 등록하기'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '1px solid #8e735b',
                    borderRadius: '14px',
                    background: 'transparent',
                    color: darkMode ? 'white' : '#8e735b',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '14px',
                  }}
                >
                  수정 취소
                </button>
              )}
            </form>
          </div>

          {/* 상품 목록 */}
          <div>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: '400',
                color: darkMode ? 'white' : '#3d3126',
                marginBottom: '30px',
                textAlign: 'center',
              }}
            >
              등록된 상품
            </h2>

            {listLoading ? (
              <p
                style={{
                  textAlign: 'center',
                  color: darkMode ? 'white' : '#3d3126',
                }}
              >
                상품 목록을 불러오는 중입니다...
              </p>
            ) : products.length === 0 ? (
              <p
                style={{
                  textAlign: 'center',
                  color: darkMode ? 'white' : '#3d3126',
                }}
              >
                등록된 상품이 없습니다.
              </p>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '24px',
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      background: darkMode ? '#1f1f1f' : 'white',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      boxShadow: darkMode
                        ? '0 10px 30px rgba(0,0,0,0.3)'
                        : '0 10px 30px rgba(0,0,0,0.06)',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                      }}
                    />

                    <div style={{ padding: '22px' }}>
                      <h3
                        style={{
                          fontSize: '20px',
                          color: darkMode ? 'white' : '#3d3126',
                          marginBottom: '10px',
                        }}
                      >
                        {product.title}
                      </h3>

                      <p
                        style={{
                          color: '#8e735b',
                          marginBottom: '18px',
                        }}
                      >
                        {Number(product.price).toLocaleString()}원
                      </p>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '10px',
                        }}
                      >
                        <button
                          onClick={() => handleEdit(product)}
                          style={{
                            width: '100%',
                            padding: '13px',
                            border: '1px solid #8e735b',
                            borderRadius: '12px',
                            background: 'transparent',
                            color: darkMode ? 'white' : '#8e735b',
                            cursor: 'pointer',
                          }}
                        >
                          수정
                        </button>

                        <button
                          onClick={() => handleDelete(product.id)}
                          style={{
                            width: '100%',
                            padding: '13px',
                            border: 'none',
                            borderRadius: '12px',
                            background: '#b65f4b',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}