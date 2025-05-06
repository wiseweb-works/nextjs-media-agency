"use server";

import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getAllComments = cache(async () => {
  const count = await prisma.comment.findMany({
    where: {
      published: false,
    },
    include: {
      author: {
        include: {
          email: false,
          hashedPassword: false,
          isAdmin: false,
        },
      },
    },
  });

  return count;
}, ["draft-comments"]);
