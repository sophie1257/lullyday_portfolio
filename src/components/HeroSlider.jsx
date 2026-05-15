import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const slides = [
  {
    title: 'Soft moments',
    subtitle: 'Premium Baby Lifestyle',
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Natural mood',
    subtitle: 'Organic Living',
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      loop
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="bg-black/20 absolute inset-0" />

            <div className="relative z-10 text-center text-white px-6">
              <p className="tracking-[0.3em] mb-6">
                {slide.subtitle}
              </p>

              <h1 className="text-6xl md:text-8xl mb-8">
                {slide.title}
              </h1>

              <button className="bg-white text-black px-8 py-4 rounded-full">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}