import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const { cart } = useContext(CartContext)

  const totalCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  return (
    <header className="header">
      <Link to="/">
        <h1>LullyDay</h1>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({totalCount})
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  )
}