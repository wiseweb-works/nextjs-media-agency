import { createPost } from "@/actions/createPost";

export default function CreatePostForm({ authors, categories }) {
  return (
    <form action={createPost}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type post title"
            required={true}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image URL (optional)
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type image URL"
            required={false}
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <select
            id="author"
            name="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Select Author</option>
            {authors.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="published"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Published
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="published"
              name="published"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 relative"></div>
          </label>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your content here"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Add post
      </button>
    </form>
  );
}
