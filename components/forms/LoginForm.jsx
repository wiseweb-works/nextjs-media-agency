"use client";

import { loginUser } from "@/actions/loginUser";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  errors: null,
  success: false,
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginUser, initialState);

  return (
    <form className="space-y-4 md:space-y-6" action={formAction}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
        {state?.errors?.email && (
          <p className="mt-2 text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {state?.errors?.password && (
          <div className="mt-2 text-sm text-red-500 space-y-1">
            {state.errors.password.map((error, i) => (
              <p key={i}>{error}</p>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {pending ? "Signing in..." : "Sign In"}
      </button>

      {state?.errors?.form && (
        <p className="text-sm text-center text-red-500">{state.errors.form}</p>
      )}

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
