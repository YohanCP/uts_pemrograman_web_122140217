import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart(); // Ambil langsung cart dari context

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Checkout Page</h1>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right font-medium">Rp {item.price * item.quantity}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
