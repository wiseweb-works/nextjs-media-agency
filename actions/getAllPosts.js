"use server";

export default async function getAllPosts() {
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
}
