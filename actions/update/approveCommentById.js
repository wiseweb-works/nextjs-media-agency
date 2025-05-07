"use server";

import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function approveCommentById(formData) {
  const commentId = formData.get("commentId");
  await prisma.comment.update({
    where: { id: commentId },
    data: { published: true },
  });

  revalidateTag("comments-count");
  revalidateTag("draft-comments");

  return null;
}
