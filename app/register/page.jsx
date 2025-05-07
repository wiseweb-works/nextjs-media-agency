import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 m-auto h-full min-h-[calc(100dvh-124px)]">
      <section className="bg-gray-50 dark:bg-gray-900 m-auto">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
              width={32}
              height={32}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            News Agency
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
