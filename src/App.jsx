export default function LullyDayDynamicWebsite() {
  const products = [
    {
      title: 'Organic Baby Blanket',
      price: '₩39,000',
      image:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
      tag: 'BEST',
      
    },
    {
      title: 'Wood Toy Set',
      price: '₩52,000',
      image:
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
      tag: 'NEW',
    },
    {
      title: 'Baby Linen Bib',
      price: '₩22,000',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
      tag: 'MD PICK',
    },
    {
      title: 'Kids Room Slipper',
      price: '₩29,000',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      tag: 'BEST',
    },
  ]

  const instagramFeed = [
    'https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="bg-[#F6F1EB] text-[#3A3A3A] min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F6F1EB]/90 backdrop-blur border-b border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl tracking-[0.3em] font-light">LULLY DAY</h1>

          <nav className="hidden md:flex gap-10 text-sm tracking-widest">
            <a href="#" className="hover:text-[#7A5C49] transition">NEW</a>
            <a href="#" className="hover:text-[#7A5C49] transition">BEST</a>
            <a href="#" className="hover:text-[#7A5C49] transition">BABY</a>
            <a href="#" className="hover:text-[#7A5C49] transition">LIVING</a>
            <a href="#" className="hover:text-[#7A5C49] transition">EVENT</a>
          </nav>

          <div className="flex gap-4 text-sm">
            <button>Search</button>
            <button>Cart</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full pt-24">
          <div className="max-w-xl backdrop-blur-sm bg-white/20 p-10 rounded-[40px]">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#7A5C49]">
              Baby Lifestyle Brand
            </p>

            <h2 className="text-6xl leading-tight font-serif mb-6 text-[#3A3A3A]">
              Soft moments,
              <br />
              little happiness.
            </h2>

            <p className="text-lg leading-relaxed mb-8 text-[#4d4d4d]">
              아이와 함께하는 하루를 위한
              <br />
              감성 라이프스타일 컬렉션
            </p>

            <button className="bg-[#7A5C49] hover:scale-105 transition text-white px-8 py-4 rounded-full tracking-widest text-sm shadow-lg">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* BEST PRODUCTS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="tracking-[0.3em] text-sm text-[#7A5C49] mb-4">
              BEST COLLECTION
            </p>
            <h3 className="text-5xl font-serif">Loved by little days</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <span className="absolute top-5 left-5 bg-[#7A5C49] text-white text-xs px-4 py-2 rounded-full tracking-widest">
                    {product.tag}
                  </span>
                </div>

                <div className="p-7">
                  <h4 className="text-xl mb-3">{product.title}</h4>
                  <p className="text-[#7A5C49] font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[40px] h-[700px] w-full object-cover"
            />
          </div>

          <div>
            <p className="tracking-[0.3em] text-sm text-[#7A5C49] mb-5">
              BRAND STORY
            </p>

            <h3 className="text-5xl leading-tight font-serif mb-10">
              아이와 함께하는
              <br />
              평범한 하루가
              <br />
              가장 특별한 순간이 되도록.
            </h3>

            <p className="text-lg leading-relaxed text-[#5f5f5f] mb-8">
              LULLY DAY는 부드러운 소재와 따뜻한 디자인으로
              아이와 부모 모두의 하루를 함께합니다.
            </p>

            <button className="border border-[#7A5C49] px-8 py-4 rounded-full hover:bg-[#7A5C49] hover:text-white transition">
              VIEW STORY
            </button>
          </div>
        </div>
      </section>

      {/* PROMOTION BANNER */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto rounded-[50px] overflow-hidden relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
            <p className="tracking-[0.3em] mb-5">NEW COLLECTION</p>
            <h3 className="text-6xl font-serif leading-tight mb-6">
              Warm little
              <br />
              summer
            </h3>

            <button className="w-fit bg-white text-[#3A3A3A] px-8 py-4 rounded-full hover:scale-105 transition">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] text-sm text-[#7A5C49] mb-4">
              INSTAGRAM
            </p>
            <h3 className="text-5xl font-serif">@lullyday_official</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {instagramFeed.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] group cursor-pointer"
              >
                <img
                  src={image}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="tracking-[0.3em] text-sm text-[#7A5C49] mb-5">
            REVIEW
          </p>

          <h3 className="text-5xl font-serif mb-16">
            Loved by parents
          </h3>

          <div className="bg-white rounded-[40px] p-14 shadow-sm">
            <div className="text-3xl mb-5">★★★★★</div>

            <p className="text-2xl leading-relaxed mb-8 text-[#4d4d4d]">
              “포근한 촉감이라 아기가 정말 좋아해요.
              <br />
              선물용으로도 너무 만족했습니다.”
            </p>

            <span className="text-[#7A5C49] tracking-widest text-sm">
              김OO 고객님
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3A3A3A] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl tracking-[0.3em] mb-5">LULLY DAY</h4>
            <p className="text-white/70 leading-relaxed">
              Soft moments for little days.
            </p>
          </div>

          <div>
            <h5 className="mb-4 tracking-widest text-sm">CUSTOMER</h5>
            <ul className="space-y-3 text-white/70">
              <li>공지사항</li>
              <li>배송안내</li>
              <li>교환/반품</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 tracking-widest text-sm">CONTACT</h5>
            <ul className="space-y-3 text-white/70">
              <li>hello@lullyday.com</li>
              <li>Instagram @lullyday_official</li>
              <li>Mon-Fri 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
