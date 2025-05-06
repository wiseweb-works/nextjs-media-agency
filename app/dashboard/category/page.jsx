import CreateCategoryForm from "@/components/forms/CreateCategoryForm";

export default function Page() {
  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900 h-full min-h-[calc(100dvh-124px)]">
        <div className="py-8 px-4 m-auto max-w-2xl lg:py-12">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Create a new Category
          </h2>
          <CreateCategoryForm />
        </div>
      </section>
    </div>
  );
}
