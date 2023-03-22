import Layout from "@components/layout";
function Chats() {
  return (
    <Layout hasTabBar title="Chat">
      <div className="divide-y-[1px] py-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className=" mb-3 flex cursor-pointer items-center space-x-3  px-4 py-3"
          >
            <div className="h-10 w-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">내일 오후에 2시에 만나요</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Chats;
