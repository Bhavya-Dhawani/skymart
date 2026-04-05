import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../Components/ProductCard'

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: '99.99',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900',
    rating: 4.5,
    reviews: 120,
    description:
      'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    rating: 4.2,
    reviews: 85,
  },
  {
    id: 3,
    name: 'Professional Camera Lens',
    category: 'Electronics',
    price: '599.99',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800',
    rating: 4.7,
    reviews: 45,
  },
  {
    id: 4,
    name: 'Wireless Gaming Mouse',
    category: 'Electronics',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 5,
    name: '4K Ultra HD Monitor',
    category: 'Electronics',
    price: '349.99',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    rating: 4.6,
    reviews: 88,
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
    rating: 4.9,
    reviews: 142,
  },
]

const Breadcrumbs = ({ category, name }) => (
  <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
    <a className="hover:text-white flex items-center gap-1.5 transition-colors" href="/products">
      <i className="ri-arrow-left-line text-xs"></i>
      Products
    </a>
    <span>/</span>
    <span className="capitalize text-white/50">{category}</span>
    <span>/</span>
    <span className="text-white/70 clamp-1 max-w-60">{name}</span>
  </nav>
)

const ProductGallery = ({ image, name }) => (
  <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square animate-scale-in shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
    />
  </div>
)

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2 text-sm">
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, idx) => (
        <i key={idx} className={`ri-star-${idx < Math.round(rating) ? 'fill' : 'line'} text-[14px]`}></i>
      ))}
    </div>
    <span className="font-semibold text-white/70">{rating}</span>
    <span className="text-white/40">({reviews} reviews)</span>
  </div>
)

const FeaturePill = ({ icon, title, desc }) => (
  <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
    <i className={`text-volt text-lg ri-${icon}`}></i>
    <p className="text-white/60 text-[11px] font-body font-semibold mt-1">{title}</p>
    <p className="text-white/25 text-[10px] font-body">{desc}</p>
  </div>
)

const ProductSummary = ({ product }) => (
  <div className="flex flex-col gap-5 animate-fade-up">
    <span className="badge bg-volt/10 text-volt border border-volt/20 capitalize w-fit text-xs px-3 py-1 rounded-full">
      {product.category}
    </span>
    <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">{product.name}</h1>
    <Rating rating={product.rating} reviews={product.reviews} />
    <div className="py-4 border-y border-white/8">
      <span className="font-heading font-bold text-4xl text-volt">${product.price}</span>
    </div>
    <p className="text-white/50 font-body text-sm leading-relaxed">{product.description}</p>
    <div className="flex gap-3">
      <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 bg-volt text-ink hover:bg-volt-light border border-volt">
        <i className="ri-shopping-cart-line text-lg"></i>
        Add to Cart
      </button>
      <button className="p-3.5 border rounded-2xl transition-all border-white/10 text-white/40 hover:text-rose-400 hover:border-rose-400/30">
        <i className="ri-heart-line text-lg"></i>
      </button>
    </div>
    <div className="grid grid-cols-3 gap-3 mt-1">
      <FeaturePill icon="truck-line" title="Free Delivery" desc="On orders $50+" />
      <FeaturePill icon="shield-check-line" title="Secure Pay" desc="256-bit SSL" />
      <FeaturePill icon="refund-2-line" title="Easy Returns" desc="30-day policy" />
    </div>
    <div className="flex gap-3 mt-4">
      <a
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl transition-all font-heading font-semibold text-sm"
        href="/products/2"
      >
        Next <i className="ri-arrow-right-s-line text-lg"></i>
      </a>
    </div>
  </div>
)

const RelatedProducts = ({ products }) => (
  <section className="mt-16">
    <h2 className="font-heading font-bold text-2xl mb-6">Related Products</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </section>
)

const Product = () => {
  const { id } = useParams()

  const product = useMemo(
    () => sampleProducts.find((item) => String(item.id) === String(id)) || sampleProducts[0],
    [id]
  )

  const related = useMemo(() => sampleProducts.filter((item) => item.id !== product.id).slice(0, 5), [product.id])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs category={product.category} name={product.name} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
        <ProductGallery image={product.image} name={product.name} />
        <ProductSummary product={product} />
      </div>

      <RelatedProducts products={related} />
    </div>
  )
}

export default Product
