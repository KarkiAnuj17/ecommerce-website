import { ProductCard } from "@/components/ProductCard"

async function getProducts() {
  const res = await fetch("http://localhost:4000/products")
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts()

  return (
    (<div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>)
  );
}

