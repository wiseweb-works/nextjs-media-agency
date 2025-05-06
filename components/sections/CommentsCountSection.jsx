import { getCommentsCount } from "@/actions/get/getCommentsCount";

export default async function CommentsCountSection() {
  const count = getCommentsCount();
  return (
    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
      {count}
    </span>
  );
}
