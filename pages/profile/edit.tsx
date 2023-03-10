import Layout from "./../../components/layout";
import Button from "./../../components/button";
function EditProfile() {
  return (
    <Layout title="edit">
      <div className="space-y-4 py-10 px-4">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-500 bg-gray-50 px-2 text-sm text-gray-500">
              +82
            </span>
            <input
              id="input"
              className="w-full appearance-none rounded-md rounded-l-none border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              type="number"
              required
            />
          </div>
        </div>

        <Button text="Update" />
      </div>
    </Layout>
  );
}

export default EditProfile;
