import Image from "next/image";

export default function PostCommentList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 font-semibold text-md text-gray-900 dark:text-white">
                <Image
                  className="mr-2 w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={
                    comment.author.imageUrl ||
                    `https://flowbite.com/docs/images/people/profile-picture-5.jpg`
                  }
                  width={48}
                  height={48}
                  alt="Profile Foto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {comment.author.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(comment.createdAt).toLocaleDateString("de-DE")}
              </p>
            </div>
          </footer>
          <p className="mt-4">{comment.content}</p>
        </article>
      ))}
    </>
  );
}
