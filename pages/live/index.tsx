import Layout from "./../../components/layout";
function Live() {
  return (
    <Layout title="Live">
      <div className="space-y-4 divide-y-4 py-10 px-4 ">
        {[...Array(10)].map((_, i) => (
          <div className="pt-4" key={i}>
            <div className="aspect-video  w-full bg-slate-300 shadow-md" />
            <h3 className="mt-2 text-lg text-gray-700">show video</h3>
          </div>
        ))}
        <button className="fixed bottom-24 right-5 cursor-pointer rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}

export default Live;
