"use server";

import { slugify } from "@/helpers/slugify";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createCategory = async (state, formData) => {
  const name = formData.get("name");

  if (!name) {
    return { errors: { name: ["Category name is required"] } };
  }

  const slug = slugify(name);

  await prisma.category.create({
    data: {
      name,
      slug,
    },
  });
  redirect("/dashboard");
};
