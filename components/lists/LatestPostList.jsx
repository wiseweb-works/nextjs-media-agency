import Link from "next/link";

export default function LatestPostList({ post }) {
  const { title, author, createdAt, slug } = post;
  return (
    <div className="grid gap-4 pb-4 md:grid-cols-10 md:gap-6 md:pb-6">
      <p className="content-center font-semibold text-gray-900 hover:underline dark:text-white sm:col-span-10 lg:col-span-3">
        {title}
      </p>
      <dl className="flex items-center space-x-2 sm:col-span-4 lg:col-span-3">
        <dt className="font-medium text-gray-900 dark:text-white">Author:</dt>
        <dd className=" text-gray-500 dark:text-gray-400">{author.name}</dd>
      </dl>
      <dl className="flex items-center space-x-2 sm:col-span-4 lg:col-span-3">
        <dt className="font-medium text-gray-900 dark:text-white">
          Create Date
        </dt>
        <dd className=" text-gray-500 dark:text-gray-400">
          {new Date(createdAt).toLocaleDateString("de-DE")}
        </dd>
      </dl>
      <div className="sm:col-span-2 md:justify-self-end lg:col-span-1">
        <Link href={`/posts/${slug}`}>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
