import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  return (
    <div className="h-full min-h-[calc(100dvh-124px)] p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
