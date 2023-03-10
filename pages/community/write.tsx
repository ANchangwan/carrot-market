import Button from "./../../components/button";
import TextArea from "./../../components/textarea";

function Write() {
  return (
    <div className="px-4 py-10">
      <TextArea text="댓글을 입력해주세요" />
      <Button text="submit" />
    </div>
  );
}

export default Write;
