"use server";

import CreatePostForm from "@/components/CreatePostForm";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const authors = await prisma.user.findMany({
    select: { id: true, name: true },
  });

  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Create a new Post
          </h2>
          <CreatePostForm authors={authors} categories={categories} />
        </div>
      </section>
    </div>
  );
}
