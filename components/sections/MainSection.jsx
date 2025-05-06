import Image from "next/image";
import TagAndDate from "../TagAndDate";
import { getAllPosts } from "@/actions/get/getAllPosts";
import { getAllCategories } from "@/actions/get/getAllCategories";
import Link from "next/link";

export default async function MainSection() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  return (
    <div className="container m-auto flex my-11 items-center">
      <div className="flex-6 relative">
        <Image
          src={posts[3].imageUrl || `https://fakeimg.pl/500x500`}
          alt="hero image"
          width={500}
          height={500}
          className="object-cover rounded-xl m-auto"
        />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
          <TagAndDate
            tag={posts[3].category.name}
            date={new Date(posts[3].createdAt).toLocaleDateString("de-DE")}
          />
          <Link href={`/posts/${posts[3].slug}`}>
            <h2 className="text-[20px]">{posts[3].title}</h2>
          </Link>
        </div>
      </div>
      <div className="flex-7 mx-8">
        <div className="flex items-center gap-5">
          <Image
            src={posts[4].imageUrl || `https://fakeimg.pl/120`}
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate
              tag={posts[4].category.name}
              date={new Date(posts[4].createdAt).toLocaleDateString("de-DE")}
            />
            <Link href={`/posts/${posts[4].slug}`}>
              <h2 className="text-[20px]">{posts[4].title}</h2>
            </Link>
          </div>
        </div>
        <hr className="w-full my-8" />
        <div className="flex items-center gap-5">
          <Image
            src={posts[5].imageUrl || `https://fakeimg.pl/120`}
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate
              tag={posts[5].category.name}
              date={new Date(posts[5].createdAt).toLocaleDateString("de-DE")}
            />
            <Link href={`/posts/${posts[5].slug}`}>
              <h2 className="text-[20px]">{posts[5].title}</h2>
            </Link>
          </div>
        </div>
        <hr className="w-full my-8" />
        <div className="flex items-center gap-5">
          <Image
            src={posts[6].imageUrl || `https://fakeimg.pl/120`}
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate
              tag={posts[6].category.name}
              date={new Date(posts[6].createdAt).toLocaleDateString("de-DE")}
            />
            <Link href={`/posts/${posts[6].slug}`}>
              <h2 className="text-[20px]">{posts[6].title}</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-4 hidden xl:block">
        <button className="bg-red-200 text-red-900 text-sm font-medium py-2 px-4 rounded-md shadow-sm transition-colors dark:bg-red-800 dark:text-red-100">
          Categories
        </button>
        <hr className="w-75 border border-red-200" />
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div key={index} className="mt-1 relative">
              <Link href={`/posts`}>
                <Image
                  src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7"
                  alt="hero image"
                  width={300}
                  height={120}
                  className="object-cover w-75 h-30"
                />
              </Link>
              <div className="absolute top-1/2 left-5 flex justify-between w-[260px]">
                <span className="bg-white/70 text-gray-700 text-sm font-medium px-4 py-0.5 rounded-md dark:bg-gray-700/50 dark:text-gray-300">
                  {categories[index].name}
                </span>
                <span className="bg-white/70 text-gray-700 text-sm font-medium px-4 py-0.5 rounded-md dark:bg-gray-700/50 dark:text-gray-300">
                  {index}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
