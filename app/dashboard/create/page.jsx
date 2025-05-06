"use server";

import { getAllCategories } from "@/actions/get/getAllCategories";
import CreatePostForm from "@/components/forms/CreatePostForm";
import { getUser } from "@/data/user";

export default async function Page() {
  const author = await getUser();

  const categories = await getAllCategories();

  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900 h-full min-h-[calc(100dvh-124px)]">
        <div className="py-8 px-4 m-auto max-w-2xl lg:py-12">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Create a new Post
          </h2>
          <CreatePostForm author={author} categories={categories} />
        </div>
      </section>
    </div>
  );
}
