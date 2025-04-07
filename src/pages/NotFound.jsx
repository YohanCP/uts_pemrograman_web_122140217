import React from "react";

const Products = () => {
  const dummyProducts = [
    { id: 1, name: "Laptop ASUS", price: "Rp5.000.000" },
    { id: 2, name: "Notebook", price: "Rp15.000" },
    { id: 3, name: "Kabel Charger", price: "Rp25.000" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Produk Mahasiswa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition font-medium">
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
