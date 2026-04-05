const demoProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: '99.99',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    rating: 4.7,
    reviews: 65,
  },
  {
    id: 3,
    name: 'Comfortable Cotton T‑Shirt',
    category: 'Clothing',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rating: 4.6,
    reviews: 200,
  },
]

const StarRow = ({ rating }) => {
  const full = Math.round(rating)
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, idx) => (
        <i
          key={idx}
          className={`ri-star-${idx < full ? 'fill text-amber-400' : 'line text-white/25'} text-[12px]`}
        ></i>
      ))}
    </div>
  )
}

const ProductCard = ({ product }) => {
  return (
    <article className="product-card flex flex-col group bg-[#111] border border-white/10 hover:border-volt-20 rounded-3xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)] animate-[scale-in_0.25s_ease-out]">
      <div className="relative aspect-4/3 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/60 text-white/80 backdrop-blur-sm capitalize">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-white/30 text-[11px] uppercase tracking-[0.12em] font-body clamp-1">
          {product.category}
        </p>
        <h3 className="font-body font-semibold text-white/85 text-sm leading-snug clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 text-[11px]">
          <StarRow rating={product.rating} />
          <span className="text-white/30">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/8">
          <span className="font-heading font-bold text-lg text-volt">${product.price}</span>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold font-body bg-volt text-ink hover:bg-volt-light transition-all duration-150 active:scale-95">
            <i className="ri-shopping-cart-line text-xs"></i>
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-2">All Products</h1>
        <p className="text-white/40 text-sm">{demoProducts.length} products found</p>
      </header>

      <section className="bg-[#111] border border-white/10 rounded-3xl p-4 sm:p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="relative flex-1">
            <i className="ri-search-line text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"></i>
            <input
              className="field h-12 pl-10 pr-4"
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
            />
          </div>

          <div className="relative min-w-37.5">
            <select className="field h-12 pr-9 appearance-none cursor-pointer" defaultValue="all">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-white/30"></i>
          </div>

          <div className="relative min-w-35">
            <select className="field h-12 pr-9 appearance-none cursor-pointer" defaultValue="featured">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-white/30"></i>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {demoProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default Shop
