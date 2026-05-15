import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext)

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8f5f1',
          padding: '40px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              color: '#3d3126',
              marginBottom: '20px',
            }}
          >
            Empty Cart
          </h1>

          <p
            style={{
              color: '#8e735b',
              fontSize: '18px',
            }}
          >
            아직 담긴 상품이 없습니다.
          </p>
        </div>
      </section>
    )
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
        }}
      >
        <div
          style={{
            marginBottom: '60px',
          }}
        >
          <p
            style={{
              letterSpacing: '4px',
              color: '#8e735b',
              marginBottom: '20px',
            }}
          >
            YOUR CART
          </p>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: '400',
              color: '#3d3126',
            }}
          >
            Shopping Bag
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '30px',
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns:
                  '160px 1fr auto',
                gap: '30px',
                background: 'white',
                borderRadius: '24px',
                padding: '24px',
                alignItems: 'center',
                boxShadow:
                  '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />

              {/* INFO */}
              <div>
                <h2
                  style={{
                    fontSize: '30px',
                    marginBottom: '14px',
                    color: '#3d3126',
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: '#8e735b',
                    fontSize: '20px',
                    marginBottom: '24px',
                  }}
                >
                  {item.price.toLocaleString()}원
                </p>

                {/* QUANTITY */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    style={qtyButton}
                  >
                    -
                  </button>

                  <span
                    style={{
                      fontSize: '20px',
                      minWidth: '24px',
                      textAlign: 'center',
                      color: '#3d3126',
                      fontWeight: '600',
                      display:'flex',
                      alignItems: 'center',
                      borderRadius: 'center',
                      justifyContent: 'center',
                      background:'#f8f5f1',
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    style={qtyButton}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <p
                  style={{
                    fontSize: '24px',
                    color: '#3d3126',
                    marginBottom: '20px',
                  }}
                >
                  {(item.price * item.quantity).toLocaleString()}원
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  style={{
                    border: 'none',
                    background: '#ece6df',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    color: '#6f6257',
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div
          style={{
            marginTop: '60px',
            background: 'white',
            padding: '40px',
            borderRadius: '24px',
            textAlign: 'right',
            boxShadow:
              '0 10px 30px rgba(0,0,0,0.05)',
          }}
        >
          <p
            style={{
              color: '#8e735b',
              marginBottom: '12px',
              fontSize: '18px',
            }}
          >
            TOTAL PRICE
          </p>

          <h2
            style={{
              fontSize: '42px',
              color: '#3d3126',
              marginBottom: '30px',
            }}
          >
            {totalPrice.toLocaleString()}원
          </h2>

          <button
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
            결제하기
          </button>
        </div>
      </div>
    </section>
  )
}

const qtyButton = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  border: 'none',
  background: '#ece6df',
  cursor: 'pointer',
  fontSize: '20px',
}