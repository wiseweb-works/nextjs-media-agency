import Image from "next/image";
import TagAndDate from "./TagAndDate";

export default function HeroSection() {
  return (
    <div className="w-[1800px] max-w-[100dvw] h-[700px] max-h-[70dvh] relative flex md:flex">
      <Image
        src="https://fakeimg.pl/1800x700"
        alt="hero image"
        fill
        className="object-cover absolute"
      />
      <section className="relative m-auto w-full max-w-[77dvw] h-full max-h-[250px] flex flex-col gap-5 items-center lg:items-start">
        <TagAndDate />
        <div className="max-w-xl">
          <p className="text-5xl">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Bordered avatar"
            width={40}
            height={40}
          />
          <p className="text-gray-500">
            By{" "}
            <span className="text-white text-shadow-2xs">Max Mustermann</span>
          </p>
        </div>
      </section>
      <section className="hidden lg:flex absolute bottom-0 right-20 bg-white dark:bg-gray-800 w-[840px] rounded-t-2xl p-5 flex-row justify-around items-center gap-11">
        <aside className="flex items-center gap-5">
          <Image
            src="https://fakeimg.pl/120"
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <p>März 8, 2025</p>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
        </aside>
        <hr className="h-20 border border-[#eee]" />
        <aside className="flex items-center gap-5">
          <Image
            src="https://fakeimg.pl/120"
            alt="hero image"
            width={120}
            height={120}
            className="object-cover rounded-2xl w-30 h-30"
          />
          <div>
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <p>März 8, 2025</p>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
        </aside>
      </section>
    </div>
  );
}
