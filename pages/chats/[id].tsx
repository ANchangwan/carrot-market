import Layout from "./../../components/layout";
import Message from "./../../components/message";
function ChatDetail() {
  return (
    <Layout canGoBack title="Steve">
      <div className="space-y-4 py-10 px-4">
        <Message message="안녕 이거 얼마에 파실거에요?" />
        <Message reversed message="2만원에 파실래요?" />
        <Message message="좀 비싼데 할인해주세요" />
        <form className="fixed inset-x-0 bottom-0  bg-white py-2">
          <div className="-top-15 relative mx-auto flex  w-full max-w-md items-center">
            <input
              type="text"
              className="w-full rounded-full border border-gray-300 py-2  pr-16 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
            <div className="absolute -inset-y-1 right-0 flex py-1.5 pr-1.5">
              <button className="flex items-center rounded-full bg-orange-500 px-3 py-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ChatDetail;
