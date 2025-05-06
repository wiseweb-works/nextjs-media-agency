"use server";

import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getCommentsCount = cache(async () => {
  const count = await prisma.comment.count({
    where: {
      published: false,
    },
  });

  return count;
}, ["comments-count"]);
