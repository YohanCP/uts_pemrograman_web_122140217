import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, dispatch } = useCart()

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cart.map(item => (
            <li key={item.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>Qty: {item.quantity}</p>
                <p className="text-sm text-gray-600">${item.price} each</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <a
            href="/checkout"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
            Proceed to Checkout
          </a>
        </div>
      )}
    </div>
  )
}

export default Cart
