"use client";
import { signIn } from "next-auth/react";

export default function AuthButton() {
  return (
    <button
      onClick={() => signIn("github")}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
    >
      Sign In
    </button>
  );
}