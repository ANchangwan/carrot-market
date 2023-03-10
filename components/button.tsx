interface onButton {
  text: String;
  toggle?: boolean;
  method?: String;
}

export default function Button({ text, method, toggle }: onButton) {
  return (
    <button className="mt-6 w-full rounded-md border border-r-0 border-transparent bg-orange-500 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
      {text}
    </button>
  );
}
