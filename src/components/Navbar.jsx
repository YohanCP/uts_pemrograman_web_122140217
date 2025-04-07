import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/products" className="hover:underline">Products</Link>
      <Link to="/cart" className="hover:underline">Cart</Link>
    </nav>
  )
}

export default Navbar
