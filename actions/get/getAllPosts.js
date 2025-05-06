"use server";

import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getAllPosts = cache(async () => {
  return await prisma.post.findMany({
    include: {
      author: {
        include: {
          email: false,
          hashedPassword: false,
          isAdmin: false,
        },
      },
      category: false,
      comments: false,
    },
  });
}, ["posts"]);
