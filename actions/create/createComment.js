"use server";

import { getUser } from "@/data/user";

export const createComment = async (state, formData) => {
  const user = await getUser();
  const postId = formData.get("postId");
  const content = formData.get("comment");

  if (!postId || !content) {
    return { errors: { content: ["Required area is missing"] } };
  }

  await prisma.comment.create({
    data: {
      content,
      published: false,
      postId,
      authorId: user.id,
    },
  });
};
