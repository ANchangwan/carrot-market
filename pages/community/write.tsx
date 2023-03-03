function Write() {
  return (
    <div className="px-4 py-10">
      <textarea
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        rows={4}
        placeholder="댓글을 달아주세요"
      />
      <button className="mt-2 w-full rounded-md border border-r-0 border-transparent bg-orange-500 py-2 px-4  text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Submit
      </button>
    </div>
  );
}

export default Write;
