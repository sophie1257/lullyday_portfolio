export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F6F1EB] dark:bg-black dark:text-white">
      <div className="bg-white dark:bg-neutral-900 p-12 rounded-[30px] w-full max-w-md">
        <h1 className="text-4xl mb-10 text-center">
          LOGIN
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-4 rounded-xl border"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-4 rounded-xl border"
        />

        <button className="w-full bg-[#7A5C49] text-white py-4 rounded-xl">
          Login
        </button>
      </div>
    </main>
  )
}