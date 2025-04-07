import useFetchProducts from '../hooks/useFetchProducts'
import ProductCard from '../components/ProductCard'

function Products() {
  const { data: products, loading, error } = useFetchProducts('https://fakestoreapi.com/products')

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
