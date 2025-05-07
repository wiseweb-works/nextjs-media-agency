import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full min-h-[calc(100dvh-124px)] container mx-auto px-4 py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Über Uns
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-colors duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src="https://fakeimg.pl/120"
                alt="personel image"
                width={120}
                height={120}
                className="object-cover w-28 h-28 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Max Mustermann
              </h2>
              <div className="space-y-1">
                <h3 className="text-gray-700 dark:text-gray-300 text-sm">
                  First Title
                </h3>
                <h3 className="text-gray-700 dark:text-gray-300 text-sm">
                  Second Title
                </h3>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
