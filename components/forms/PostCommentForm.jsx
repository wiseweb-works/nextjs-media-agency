"use client";

import { createComment } from "@/actions/create/createComment";
import { useActionState } from "react";

export default function PostCommentForm({ postId }) {
  const [state, action, pending] = useActionState(createComment);
  return (
    <form className="mb-6" action={action}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
        {state?.errors?.content && (
          <p className="mt-2 text-sm text-red-500">{state.errors.content[0]}</p>
        )}
        <input type="hidden" name="postId" value={postId} />
      </div>
      <button
        disabled={pending}
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        {pending ? "Comment posting..." : "Post comment"}
      </button>
    </form>
  );
}
