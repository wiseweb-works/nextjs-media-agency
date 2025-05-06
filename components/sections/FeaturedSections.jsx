import Image from "next/image";
import TagAndDate from "../TagAndDate";
import { getAllPosts } from "@/actions/get/getAllPosts";
import Link from "next/link";

export default async function FeaturedSections() {
  const posts = await getAllPosts();
  return (
    <div className="flex container m-auto my-11">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 flex-8">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/posts/${posts[index + 10].slug}`}>
                <Image
                  src={
                    posts[index + 10].imageUrl || `https://fakeimg.pl/380x250`
                  }
                  alt="placeholder"
                  width={380}
                  height={250}
                  className="object-cover rounded-t-lg w-95 h-62.5"
                />
              </Link>

              <div className="p-5">
                <TagAndDate
                  tag={posts[index + 10].category.name}
                  date={new Date(
                    posts[index + 10].createdAt
                  ).toLocaleDateString("de-DE")}
                />
                <Link href={`/posts/${posts[index + 10].slug}`}>
                  <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {posts[index + 10].title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {posts[index + 10].content}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-2 hidden xl:block dark:border dark:border-white rounded-lg">
        <div className="max-w-xl mx-auto rounded-lg shadow p-6 space-y-8">
          <div>
            <ul className="flex space-x-4 border-b text-sm font-medium">
              <li>
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600 text-lg">
                  Top Posts
                </button>
              </li>
            </ul>
            <div className="pt-4 space-y-4">
              <div className="space-y-4">
                {Array(10)
                  .fill("")
                  .map((_, index) => (
                    <div key={index} className="flex space-x-4 items-start">
                      <span className="text-lg font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-semibold leading-snug">
                          <Link
                            href={`/posts/${posts[index].slug}`}
                            className="hover:underline line-clamp-3"
                          >
                            {posts[index].title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-white/80">
                          {new Date(posts[index].createdAt).toLocaleDateString(
                            "de-DE"
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
