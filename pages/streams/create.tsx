import Layout from "./../../components/layout";
import TextArea from "./../../components/textarea";
import Button from "./../../components/button";

export default function Create() {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 py-10 px-4">
        <input required label="Name" name="name" type="text" />
        <input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
}
