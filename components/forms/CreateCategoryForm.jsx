"use client";

import { createCategory } from "@/actions/create/createCategory";
import { useActionState } from "react";

export default function CreateCategoryForm() {
  const [state, action, pending] = useActionState(createCategory);
  return (
    <form action={action}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type post title"
            required
          />
          {state?.errors?.name && (
            <p className="mt-2 text-sm text-red-500">{state.errors.name[0]}</p>
          )}
        </div>
      </div>
      <button
        disabled={pending}
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        {pending ? "Creating..." : "Create Category"}
      </button>
    </form>
  );
}
