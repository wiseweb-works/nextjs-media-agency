import { getPostBySlug } from "@/actions/get/getPostBySlug";
import PostCommentForm from "@/components/forms/PostCommentForm";
import PostCommentList from "@/components/PostCommentList";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

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

  const post = await getPostBySlug(slug);

  return (
    <div className="h-full min-h-[calc(100dvh-124px)] p-4">
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased text-justify">
        <div className="flex justify-between px-4 mx-auto">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image
                    className="mr-4 w-15 h-15 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src={
                      post.author.imageUrl ||
                      `https://flowbite.com/docs/images/people/profile-picture-5.jpg`
                    }
                    alt="Author"
                    width={64}
                    height={64}
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString("de-DE")}
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post.title}
              </h1>
            </header>
            <figure>
              <img
                src={post.imageUrl || `https://fakeimg.pl/640x360`}
                width={640}
                height={460}
                className="w-170 h-115 object-cover rounded-2xl mb-4"
                alt=""
              />
              <figcaption className="sr-only">
                Figure caption for screen reader
              </figcaption>
            </figure>

            <p className="mt-2">{post.content}</p>

            <section>
              <div className="flex justify-between items-center my-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion ({post.comments.length})
                </h2>
              </div>
              <PostCommentForm postId={post.id} />
              {post.comments?.length > 0 && (
                <PostCommentList comments={post.comments} />
              )}
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
