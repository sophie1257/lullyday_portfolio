import { Link } from 'react-router-dom'
import './Promotion.css'

function Promotion() {
  const promoItems = [
    {
      id: 1,
      label: 'BABY CARE',
      title: 'Baby Care Week',
      subtitle: '아이의 하루를 더 포근하게',
      description:
        '부드러운 소재와 따뜻한 컬러를 중심으로 구성한 아기용품 기획전입니다. 매일 사용하는 담요, 수건, 장난감 등을 특별한 혜택으로 만나보세요.',
      benefit: '최대 20% 할인',
      image:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      label: 'PET DAILY',
      title: 'Pet Daily Items',
      subtitle: '반려동물과 함께하는 편안한 일상',
      description:
        '반려동물과 보호자가 함께 사용하는 라이프스타일 아이템을 모았습니다. 감성적인 디자인과 실용성을 함께 고려한 상품을 제안합니다.',
      benefit: '인기 상품 특별가',
      image:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      label: 'FAMILY LIFE',
      title: 'Family Lifestyle',
      subtitle: '아이와 반려동물이 함께 머무는 공간',
      description:
        '가족 모두가 편안하게 사용할 수 있는 라이프스타일 상품을 소개합니다. 따뜻한 공간을 완성하는 소품과 데일리 아이템을 만나보세요.',
      benefit: '기획전 한정 구성',
      image:
        'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <main className="promotion-page">
      <section className="promotion-hero">
        <div className="promotion-hero-text">
          <span className="promotion-label">PROMOTION</span>
          <h1>아이와 반려동물이 함께하는 따뜻한 일상 기획전</h1>
          <p>
            LullyDay가 제안하는 시즌 프로모션입니다. 육아용품과
            반려동물용품을 감성적인 라이프스타일 무드로 구성했습니다.
          </p>

          <div className="promotion-hero-actions">
            <a href="#promotion-list" className="primary-promo-btn">
              기획전 보기
            </a>
            <Link to="/" className="secondary-promo-btn">
              홈으로 돌아가기
            </Link>
          </div>
        </div>

        <div className="promotion-hero-card">
          <span>NEW SEASON</span>
          <h2>Warm Daily Collection</h2>
          <p>따뜻한 일상을 위한 LullyDay 시즌 혜택</p>
        </div>
      </section>

      <section className="promotion-summary">
        <div>
          <strong>3</strong>
          <span>기획전 구성</span>
        </div>
        <div>
          <strong>20%</strong>
          <span>시즌 최대 할인</span>
        </div>
        <div>
          <strong>2</strong>
          <span>Baby & Pet 카테고리</span>
        </div>
      </section>

      <section id="promotion-list" className="promotion-list">
        <div className="promotion-section-title">
          <span>SEASON EVENT</span>
          <h2>LullyDay Promotion</h2>
          <p>
            아이, 반려동물, 가족의 일상을 기준으로 구성한 시즌별
            프로모션입니다.
          </p>
        </div>

        <div className="promotion-grid">
          {promoItems.map((item) => (
            <article className="promotion-detail-card" key={item.id}>
              <div className="promotion-detail-image">
                <img src={item.image} alt={item.title} />
                <span>{item.benefit}</span>
              </div>

              <div className="promotion-detail-content">
                <span className="promotion-card-label">{item.label}</span>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <Link to="/" className="promotion-card-btn">
                  관련 상품 보러가기
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promotion-banner">
        <div>
          <span>LULLYDAY CAMPAIGN</span>
          <h2>따뜻한 일상을 위한 작은 선택</h2>
          <p>
            LullyDay는 아이와 반려동물이 함께하는 생활 속에서 편안함과
            감성을 전하는 브랜드 경험을 제안합니다.
          </p>
        </div>
        <Link to="/" className="promotion-banner-btn">
          쇼핑 계속하기
        </Link>
      </section>
    </main>
  )
}

export default Promotion