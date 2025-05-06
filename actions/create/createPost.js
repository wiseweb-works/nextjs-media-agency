"use server";

import { slugify } from "@/helpers/slugify";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createPost = async (formData) => {
  const title = formData.get("title");
  const content = formData.get("content");
  const imageUrl = formData.get("imageUrl");
  const published = formData.get("published") === "on";
  const authorId = formData.get("author");
  const categoryId = formData.get("category");

  if (!title || !content || !authorId || !categoryId) {
    throw new Error("Required fields missing");
  }

  const slug = slugify(title);

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      imageUrl: imageUrl || null,
      published,
      authorId,
      categoryId,
    },
  });
  // redirect("/posts");
};
