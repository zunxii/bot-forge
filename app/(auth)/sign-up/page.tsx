"use client";

import Link from "next/link";
import { useActionState } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { signUpAction, type AuthState } from "@/actions/auth";

const initialState: AuthState = {
  error: null,
  success: null,
};

export default function SignUpPage() {
  const [state, formAction, pending] = useActionState(signUpAction, initialState);

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start building your assistant with a clean, secure sign up flow."
    >
      <form action={formAction} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-slate-700">First name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Junaid"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#8a97ff] focus:ring-4 focus:ring-[#8a97ff]/10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-slate-700">Last name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Khan"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#8a97ff] focus:ring-4 focus:ring-[#8a97ff]/10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-medium text-slate-700">Work email</label>
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
            placeholder="Create a strong password"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#8a97ff] focus:ring-4 focus:ring-[#8a97ff]/10"
          />
        </div>

        <label className="flex items-start gap-3 text-[13px] leading-6 text-slate-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#7d8eff] focus:ring-[#8a97ff]"
          />
          I agree to the Terms and Privacy Policy.
        </label>

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
          {pending ? "Creating account..." : "Create account"}
        </button>

        <p className="text-center text-[14px] text-slate-500">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-slate-900 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}