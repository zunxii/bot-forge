"use client";

import Link from "next/link";
import { useActionState } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { signInAction, type AuthState } from "@/actions/auth";

const initialState: AuthState = {
  error: null,
  success: null,
};

export default function SignInPage() {
  const [state, formAction, pending] = useActionState(signInAction, initialState);

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue to your Tensor-Bot dashboard and manage your assistant."
    >
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <label className="text-[13px] font-medium text-slate-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="name@company.com"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#8a97ff] focus:ring-4 focus:ring-[#8a97ff]/10"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-medium text-slate-700">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#8a97ff] focus:ring-4 focus:ring-[#8a97ff]/10"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-[13px] text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-[#7d8eff] focus:ring-[#8a97ff]"
            />
            Remember me
          </label>

          <Link href="/forgot-password" className="text-[13px] font-medium text-[#6478ff] hover:underline">
            Forgot password?
          </Link>
        </div>

        {state.error ? (
          <p className="text-sm text-red-500">{state.error}</p>
        ) : null}

        {state.success ? (
          <p className="text-sm text-emerald-600">{state.success}</p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-950 px-6 text-[14px] font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:opacity-70"
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-center text-[14px] text-slate-500">
          New here?{" "}
          <Link href="/sign-up" className="font-semibold text-slate-900 hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}