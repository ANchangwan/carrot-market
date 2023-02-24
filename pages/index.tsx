export default function Home() {
  return (
    <div className="flex min-h-screen flex-col space-y-5 bg-slate-400 py-20 px-10">
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <span className="text-3xl font-semibold">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="my-3 flex justify-between first:bg-blue-500"
            >
              <span className="text-gray-500 ">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="my-3 flex justify-between border-t-2 border-dashed">
          <span class="text-3xl font-semibold">Total</span>s
          <span className="font-semibold">$89</span>
        </div>
        <div className="flex items-center justify-center">
          <button className="mx-auto mt-5 w-3/4 rounded-xl bg-blue-500 p-3 text-center font-medium text-white hover:bg-teal-500 hover:text-black focus:bg-red-500">
            Checkout
          </button>
        </div>
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="bg-blue-500 p-6 pb-14">
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
      <div className="items-center rounded-2xl bg-white p-10 shadow-lg">
        <div className="mb-5 flex justify-between ">
          <span className="">⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>
        <div className="w-70 mb-5 h-80 bg-gray-500" />
        <div className="flex flex-col">
          <span className="font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-3">
              <button className="h-5 w-5 rounded-full bg-yellow-300 ring-yellow-300 ring-offset-2 transition focus:ring-2"></button>
              <button className=" h-5 w-5 rounded-full bg-indigo-300 ring-indigo-300  ring-offset-2 transition focus:ring-2"></button>
              <button className="h-5 w-5 rounded-full bg-teal-300 ring-teal-300 ring-offset-2 transition focus:ring-2"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className=" aspect-square w-7 items-center justify-center rounded-lg bg-blue-500 text-xl font-medium text-gray-200">
                -
              </button>
              <span>1</span>
              <button className=" aspect-square w-7 items-center justify-center rounded-lg bg-blue-500 text-xl font-medium text-gray-200">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium">$450</div>
            <button className="rounded-lg  bg-blue-500 py-2 px-6 text-center text-xl font-medium text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
    </div>
  );
}
