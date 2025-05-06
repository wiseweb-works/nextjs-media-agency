import Image from "next/image";
import SocialLinks from "../SocialLinks";
import TagAndDate from "../TagAndDate";
import Link from "next/link";
import { getAllPosts } from "@/actions/get/getAllPosts";

export default async function CategorieSection() {
  const posts = await getAllPosts();
  return (
    <div className="bg-[#f7f7f7] dark:bg-gray-800 py-11">
      <div className="container m-auto flex items-center gap-3">
        <h2 className="flex-1 text-2xl text-center">New Posts</h2>
        <hr className="flex-8 h-0.5 border border-red-600" />
        <div className="flex-3"></div>
      </div>
      <section className="container m-auto flex">
        <aside className="flex-4 flex flex-col justify-center items-center">
          <Image
            src={posts[7].imageUrl || `https://fakeimg.pl/480x360`}
            alt="hero image"
            width={480}
            height={360}
            className="object-cover rounded-t-2xl w-120 h-90"
          />
          <div className="bg-white dark:bg-gray-900/70 w-full max-w-120 rounded-b-2xl">
            <div className="m-auto flex items-center gap-6 w-4/5 px-2 py-4">
              <TagAndDate
                tag={posts[7].category.name}
                date={new Date(posts[7].createdAt).toLocaleDateString("de-DE")}
              />
            </div>
            <div className="m-auto w-4/5 px-2 pt-2 pb-4">
              <Link href={`/posts/${posts[7].slug}`}>
                <h2 className="text-2xl">{posts[7].title}</h2>
              </Link>
            </div>
          </div>
        </aside>
        <aside className="flex-5 flex flex-col gap-10 justify-center items-center max-w-137.5 mx-10">
          <div className="relative">
            <Image
              src={posts[8].imageUrl || `https://fakeimg.pl/550x225`}
              alt="hero image"
              width={550}
              height={225}
              className="object-cover rounded-2xl w-137.5 h-56"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
              <TagAndDate
                tag={posts[8].category.name}
                date={new Date(posts[8].createdAt).toLocaleDateString("de-DE")}
              />
              <Link href={`/posts/${posts[8].slug}`}>
                <h2 className="text-2xl">{posts[8].title}</h2>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={posts[9].imageUrl || `https://fakeimg.pl/550x225`}
              alt="hero image"
              width={550}
              height={225}
              className="object-cover rounded-2xl w-137.5 h-56"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
              <TagAndDate
                tag={posts[9].category.name}
                date={new Date(posts[9].createdAt).toLocaleDateString("de-DE")}
              />
              <Link href={`/posts/${posts[9].slug}`}>
                <h2 className="text-2xl">{posts[9].title}</h2>
              </Link>
            </div>
          </div>
        </aside>
        <aside className="hidden xl:block flex-3">
          <button
            type="button"
            className="py-2.5 px-5 me-2 text-sm font-medium text-red-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-red-700 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Social Feed
          </button>
          <hr className="w-full border border-white" />
          <SocialLinks />
        </aside>
      </section>
    </div>
  );
}
