import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { slug: ["deutschland", "politik"] },
    { slug: ["deutschland", "kultur-und-bildung"] },
    { slug: ["deutschland", "sport"] },
    { slug: ["deutschland", "divers"] },
    { slug: ["deutschland", "deutschland-erleben"] },

    { slug: ["ausland", "politik"] },
    { slug: ["ausland", "kultur-und-bildung"] },
    { slug: ["ausland", "sport"] },
    { slug: ["ausland", "divers"] },
    { slug: ["ausland", "wirtschaft"] },

    { slug: ["international"] },
  ];
}

export default async function Page(props) {
  const { slug } = await props.params;
  const slugPath = slug.join("/");

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto h-full min-h-[calc(100dvh-124px)]">
      <h1 className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-sm bg-red-600 rounded-full text-white px-4 py-1.5 mr-3 capitalize">
          {slug[0]}
        </span>{" "}
        <span className="text-sm font-medium capitalize">
          {slug[1] && String(slug[1]).split("-").join(" ")}
        </span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <Link
              key={index}
              className="group relative block rounded-xl focus:outline-hidden"
              href="#"
            >
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-87.5 before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-gray-900/70">
                <Image
                  className="size-full absolute top-0 start-0 object-cover"
                  src="https://fakeimg.pl/630x350"
                  alt="Blog Image"
                  fill
                />
              </div>

              <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <Image
                        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Avatar"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                      <h4 className="font-semibold text-white">
                        Max Mustermann
                      </h4>
                      <p className="text-xs text-white/80">May 09, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore commodi modi
                  </h3>
                  <p className="mt-2 text-white/80">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
