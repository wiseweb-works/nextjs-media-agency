import { approveCommentById } from "@/actions/update/approveCommentById";

export default function ApproveButton({ commentId }) {
  return (
    <form action={approveCommentById}>
      <input type="hidden" name="commentId" value={commentId} />
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-auto"
      >
        Approve
      </button>
    </form>
  );
}
