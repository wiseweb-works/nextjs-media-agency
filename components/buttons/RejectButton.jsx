import { deleteCommentById } from "@/actions/delete/deleteCommentById";

export default function RejectButton({ commentId }) {
  return (
    <form action={deleteCommentById}>
      <input type="hidden" name="commentId" value={commentId} />
      <button
        type="submit"
        className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
      >
        Reject
      </button>
    </form>
  );
}
