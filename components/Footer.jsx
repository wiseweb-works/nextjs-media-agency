import { footerItems } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] dark:bg-gray-800 w-full h-12 flex items-center">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            News Agency™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-black dark:text-white sm:mt-0">
          {footerItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.href || "#"}
                className="hover:underline me-4 md:me-6"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
