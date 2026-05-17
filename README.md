# LullyDay

아이와 반려동물이 함께하는 따뜻한 일상을 위한 감성 라이프스타일 쇼핑몰 포트폴리오입니다.  
React와 Firebase를 활용해 상품 등록, 수정, 삭제가 가능한 관리자 페이지와 장바구니 기능을 구현했습니다.

---

## 배포 링크

- Vercel: 배포 후 링크 추가 예정

---

## 프로젝트 소개

LullyDay는 아기용품과 반려동물용품을 함께 다루는 감성 브랜드 콘셉트의 쇼핑몰 웹사이트입니다.

단순한 정적 웹페이지가 아닌, Firebase Firestore와 연동하여 관리자가 직접 상품을 등록하고 수정/삭제할 수 있는 구조로 제작했습니다.  
등록된 상품은 메인 페이지와 상세 페이지에 동적으로 반영되며, 사용자는 상품을 장바구니에 담고 수량을 조절할 수 있습니다.

---

## 주요 기능

### 사용자 기능

- 메인 페이지 상품 목록 조회
- 상품 상세 페이지
- 상품 검색 기능
- 장바구니 담기
- 장바구니 수량 증가/감소
- 장바구니 상품 삭제
- 장바구니 총 금액 계산
- 장바구니 데이터 localStorage 저장
- 다크모드 전환
- 반응형 레이아웃

### 관리자 기능

- Google 로그인
- 관리자 이메일 기반 접근 제한
- 상품 등록
- 상품 조회
- 상품 수정
- 상품 삭제
- Firestore Security Rules 적용

---

## 사용 기술

### Frontend

- React
- Vite
- React Router DOM
- Context API
- Framer Motion
- CSS Inline Styling

### Backend / Database

- Firebase Authentication
- Firebase Firestore

### Deploy

- Vercel

### Version Control

- Git
- GitHub

---

## 폴더 구조

```text
lullyday
├── public
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── context
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── firebase
│   │   └── firebase.js
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   └── Admin.jsx
│   │
│   ├── routes
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js