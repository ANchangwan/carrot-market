export default function Home() {
  return (
    <div className="flex grid min-h-screen flex-col gap-10 space-y-5 bg-slate-400 py-20 px-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg dark:bg-black">
        <span className="text-2xl font-semibold dark:text-white">
          Select Item
        </span>
        <ul>
          <div className="my-3 flex justify-between">
            <span className="text-gray-500 ">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
        </ul>

        <div className="my-3 flex justify-between border-t-2 border-dashed">
          <span className="text-3xl font-semibold">Total</span>s
          <span className="font-semibold">$89</span>
        </div>
        <div className="flex items-center justify-center">
          <button className="mx-auto mt-5 w-3/4 rounded-xl bg-blue-500 p-3 text-center font-medium text-white hover:bg-teal-500 hover:text-black focus:bg-red-500">
            Checkout
          </button>
        </div>
      </div>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-blue-500 p-6 pb-14 landscape:bg-teal-400">
          <span className="text-2xl text-white">profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="mb-1 text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-500 transition-colors group-hover:bg-red-300" />
            <div className="flex flex-col">
              <span className="mb-1 text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,130</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-lg lg:col-span-2 xl:col-span-1">
        <div className="py-1">
          <div className="mb-2 flex justify-between">
            <span>⬅️</span>
            <div className="flex items-center justify-center">
              <span>⭐️</span>
              <span className="mr-2">4.9</span>
              <span>💖</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://i.ibb.co/5963kz8/chair.jpg"
              className="mb-2 bg-gray-500 bg-auto"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-2xl font-medium">Swoon Lounge</span>
              <span className="text-xl text-gray-400">Chair</span>
            </div>
            <div className="flex justify-between py-3 ">
              <div className="space-x-2">
                <button className="h-5 w-5 rounded-full bg-orange-400 ring-orange-400 ring-offset-2 focus:ring-2"></button>
                <button className="h-5 w-5 rounded-full bg-teal-400 ring-teal-400 ring-offset-2 focus:ring-2"></button>
                <button className="h-5 w-5 rounded-full bg-red-400 ring-red-400 ring-offset-2 focus:ring-2"></button>
              </div>
              <div className="mr-8 flex space-x-2">
                <button className="flex aspect-square items-center justify-center rounded-md bg-blue-400">
                  -
                </button>
                <span>1</span>
                <button className="flex aspect-square items-center justify-center rounded-md bg-blue-400">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-xl bg-blue-500 px-5 py-2 text-xl font-medium text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
