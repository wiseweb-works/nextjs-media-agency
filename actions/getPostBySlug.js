"use server";

import { prisma } from "@/lib/prisma";

export async function getPostBySlug(slug) {
  return await prisma.post.findUnique({
    where: { slug },
    include: {
      author: {
        include: {
          email: false,
          hashedPassword: false,
          isAdmin: false,
        },
      },
      category: true,
      comments: {
        include: {
          author: {
            include: {
              email: false,
              hashedPassword: false,
              isAdmin: false,
            },
          },
        },
      },
    },
  });
}
