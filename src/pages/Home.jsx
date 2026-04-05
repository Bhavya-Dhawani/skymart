import Hero from '../Components/Hero'
import DashboardStatCard from '../Components/DashboardStatCard'
import CategoryCard from '../Components/CategoryCard'
import ProductListSection from '../Components/ProductListSection'
import FeatureCard from '../Components/FeatureCard'

const statCards = [
  {
    value: '0',
    label: 'Cart Items',
    hint: 'In your bag',
    accent: 'volt',
    iconClass: 'ri-box-3-line',
  },
  {
    value: '$0.00',
    label: 'Cart Value',
    hint: 'Ready to checkout',
    accent: 'blue',
    iconClass: 'ri-line-chart-line',
  },
  {
    value: '5',
    label: 'Top Products',
    hint: 'Highly rated',
    accent: 'amber',
    iconClass: 'ri-star-line',
  },
  {
    value: '6',
    label: 'Categories',
    hint: 'To explore',
    accent: 'purple',
    iconClass: 'ri-price-tag-3-line',
  },
]

const categories = [
  { emoji: '💻', label: 'Electronics', count: 17 },
  { emoji: '📦', label: 'Clothing', count: 2 },
  { emoji: '📦', label: 'Furniture', count: 3 },
  { emoji: '📦', label: 'Home', count: 14 },
  { emoji: '📦', label: 'Sports', count: 8 },
  { emoji: '📦', label: 'Accessories', count: 6 },
]

const topRated = [
  {
    id: 6,
    name: 'Professional Camera Lens',
    price: '599.99',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400',
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
  },
  {
    id: 13,
    name: '4K Ultra HD Monitor',
    price: '349.99',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
  },
  {
    id: 9,
    name: 'Aromatherapy Essential Oil Diffuser',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
  },
  {
    id: 14,
    name: 'Mechanical Keyboard',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
  },
]

const newArrivals = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: '99.99',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  },
  {
    id: 3,
    name: 'Comfortable Cotton T-Shirt',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
  },
  {
    id: 5,
    name: 'Stainless Steel Water Bottle',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
  },
]

const features = [
  {
    title: 'Fast Delivery',
    subtitle: 'Same-day on select items',
    iconClass: 'ri-flashlight-line',
    iconColor: 'text-volt',
  },
  {
    title: 'Secure Payments',
    subtitle: '100% encrypted checkout',
    iconClass: 'ri-shield-check-line',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Best Prices',
    subtitle: 'Price-match guarantee',
    iconClass: 'ri-price-tag-3-line',
    iconColor: 'text-green-400',
  },
]

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Hero />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
        {statCards.map((card) => (
          <DashboardStatCard key={card.label} {...card} />
        ))}
      </div>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
        <a
          className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
          href="/products"
        >
          View All <i className="ri-arrow-right-line text-xs"></i>
        </a>
      </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ProductListSection title="Top Rated" iconClass="ri-star-line" products={topRated} />
        <ProductListSection
          title="New Arrivals"
          iconClass="ri-flashlight-line"
          products={newArrivals}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default Home
