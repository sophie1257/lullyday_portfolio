import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F6F1EB] min-h-screen">
      <Header />

      <HeroSlider />

      <ProductGrid />

      <Footer />
    </main>
  )
}