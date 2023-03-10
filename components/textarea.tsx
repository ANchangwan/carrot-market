interface onTextArea {
  text: string;
  id: string;
  label?: boolean;
}

export default function TextArea({ text, id, label }: onTextArea) {
  return (
    <div>
      {label ? (
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {text}
        </label>
      ) : null}
      <textarea
        id={id}
        className="mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        rows={4}
        placeholder={!label ? text : null}
      />
    </div>
  );
}
