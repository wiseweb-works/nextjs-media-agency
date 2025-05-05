import Image from "next/image";
import TagAndDate from "../TagAndDate";

export default function MainSection() {
  return (
    <div className="container m-auto flex my-11 items-center">
      <div className="flex-6 relative">
        <Image
          src="https://fakeimg.pl/500x500"
          alt="hero image"
          width={500}
          height={500}
          className="object-cover rounded-xl m-auto"
        />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
          <TagAndDate />
          <h2 className="text-2xl">Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>
      <div className="flex-7 mx-8">
        <div className="flex items-center gap-5">
          <Image
            src="https://fakeimg.pl/120"
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate />
            <h2 className="text-[20px]">Lorem ipsum dolor sit amet.</h2>
          </div>
        </div>
        <hr className="w-full my-8" />
        <div className="flex items-center gap-5">
          <Image
            src="https://fakeimg.pl/120"
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate />
            <h2 className="text-[20px]">Lorem ipsum dolor sit amet.</h2>
          </div>
        </div>
        <hr className="w-full my-8" />
        <div className="flex items-center gap-5">
          <Image
            src="https://fakeimg.pl/120"
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <TagAndDate />
            <h2 className="text-[20px]">Lorem ipsum dolor sit amet.</h2>
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
              <Image
                src="https://fakeimg.pl/300x120"
                alt="hero image"
                width={300}
                height={120}
                className="object-cover w-75 h-30"
              />
              <div className="absolute top-1/2 left-5 flex justify-between w-[260px]">
                <span className="bg-white/70 text-gray-700 text-sm font-medium px-4 py-0.5 rounded-md dark:bg-gray-700/50 dark:text-gray-300">
                  Title
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
