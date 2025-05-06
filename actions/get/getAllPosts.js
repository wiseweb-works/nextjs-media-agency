"use server";

import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getAllPosts = cache(async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        include: {
          email: false,
          hashedPassword: false,
          isAdmin: false,
        },
      },
      category: true,
      comments: false,
    },
  });
}, ["posts"]);
