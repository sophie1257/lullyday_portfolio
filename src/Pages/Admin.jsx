export default function Admin() {
  return (
    <main className="min-h-screen bg-[#F6F1EB] dark:bg-black dark:text-white px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl mb-16">
          ADMIN PAGE
        </h1>

        <div className="bg-white dark:bg-neutral-900 rounded-[30px] p-10">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full mb-4 px-4 py-4 rounded-xl border"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full mb-4 px-4 py-4 rounded-xl border"
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full mb-6 px-4 py-4 rounded-xl border"
          />

          <button className="bg-[#7A5C49] text-white px-8 py-4 rounded-full">
            상품 등록
          </button>
        </div>
      </div>
    </main>
  )
}