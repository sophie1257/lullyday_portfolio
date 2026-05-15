import { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div style={{ padding: '40px' }}>
      <h1>관리자 페이지</h1>

      <input
        type="text"
        placeholder="상품명"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="가격"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <button>상품 등록</button>
    </div>
  )
}