"use server";

import { prisma } from "@/lib/prisma";

export async function getPostsByCategory(slug) {
  return await prisma.category.findUnique({
    where: { slug },
    include: {
      posts: {
        include: {
          author: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });
}
