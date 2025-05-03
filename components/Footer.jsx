import { footerItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] dark:bg-gray-800 w-full h-12 flex items-center mt-10">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            News Agency™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-black dark:text-white sm:mt-0">
          {footerItems.map((item, index) => (
            <li key={index}>
              <a
                href={item?.href || "#"}
                className="hover:underline me-4 md:me-6"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
