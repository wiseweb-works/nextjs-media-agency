import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Page() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      isAdmin: true,
      _count: {
        select: {
          comments: true,
          posts: true,
        },
      },
    },
  });

  console.log(users);
  return (
    <div className="grid grid-cols-2 place-items-center gap-y-4 my-6">
      {users.map(({ name, email, id, imageUrl, isAdmin, _count }) => (
        <div
          key={id}
          className="flex bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            src={imageUrl || `https://fakeimg.pl/200`}
            alt="hero image"
            width={200}
            height={200}
            className="object-cover w-50 h-50 rounded-t-lg"
          />
          <div className="flex flex-col place-items-center p-4 leading-normal w-70">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h2>
            <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {email}
            </h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              isAdmin:{" "}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {isAdmin ? "✅" : "❌"}
              </span>
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Post Count:{" "}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {_count.posts}
              </span>
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Comment Count:{" "}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {_count.comments}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
