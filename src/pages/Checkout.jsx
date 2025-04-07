import React from 'react';
import { useCart } from '../context/CartContext';
import useDocumentTitle from '../hooks/useDocumentTitle'

const Checkout = () => {
  const { cart } = useCart()
  useDocumentTitle('Checkout E-Commerce Mahasiswa')

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang kosong</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg border"
            >
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right font-semibold">
                Rp {(item.price * item.quantity).toLocaleString('id-ID')}
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-4 border-t font-bold text-lg">
            <p>Total</p>
            <p>
              Rp{' '}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString('id-ID')}
            </p>
          </div>
          <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Konfirmasi Pembayaran
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
