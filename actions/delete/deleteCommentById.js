"use server";

import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function deleteCommentById(formData) {
  const commentId = formData.get("commentId");
  await prisma.comment.delete({
    where: { id: commentId },
  });

  revalidateTag("comments-count");
  revalidateTag("draft-comments");

  return null;
}
