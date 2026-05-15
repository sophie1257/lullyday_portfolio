export default function Login() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Login</h1>

      <input type="email" placeholder="email" />

      <input
        type="password"
        placeholder="password"
      />

      <button>로그인</button>
    </div>
  )
}