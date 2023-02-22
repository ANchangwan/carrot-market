export default function Home() {
  return (
    <div className="flex flex-col space-y-5 bg-slate-400 py-20 px-10">
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <span className="text-3xl font-semibold">Select Item</span>

        <div className="my-3 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="my-3 flex justify-between border-t-2 border-dashed">
          <span class="text-3xl font-semibold">Total</span>
          <span className="font-semibold">$89</span>
        </div>
        <div className="mx-auto mt-5 w-2/4 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
    </div>
  );
}
