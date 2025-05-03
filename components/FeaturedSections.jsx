import Image from "next/image";
import TagAndDate from "./TagAndDate";

export default function FeaturedSections() {
  return (
    <div className="flex container m-auto mt-11">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 flex-8">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  src="https://fakeimg.pl/380x250"
                  alt="placeholder"
                  width={380}
                  height={250}
                  className="object-cover rounded-t-lg w-95 h-62.5"
                />
              </a>

              <div className="p-5">
                <TagAndDate />
                <a href="#">
                  <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Lorem ipsum dolor sit amet.
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  tenetur quaerat possimus odio cum!
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
                          <a href="#" className="hover:underline">
                            Lorem ipsum dolor sit amet consectetur.
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-white/80">
                          März {(index + 1) * 3}, 2025
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
