"use client"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/15 p-8 backdrop-blur-xl shadow-lg">
        <LoginForm />
      </div>
    </div>
  )
}