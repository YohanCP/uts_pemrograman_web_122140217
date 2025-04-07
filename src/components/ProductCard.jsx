import { useCart } from '../context/CartContext'
import { Toaster } from 'react-hot-toast'
function ProductCard({ product }) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    toast.success('Produk berhasil ditambahkan ke keranjang')
  }

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-2"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
