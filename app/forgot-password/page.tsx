"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4faf7] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Mobile logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <img
            src="./images/logotb.png"
            alt="Travel Bucket"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="rounded-2xl bg-white p-5 sm:p-7 md:p-9 shadow-lg shadow-emerald-500/5 ring-1 ring-gray-100">
          {!sent ? (
            <>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                Forgot Password?
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">
                No worries! Enter your email and we&apos;ll send you a reset
                link.
              </p>

              <form className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-11 rounded-lg"
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => setSent(true)}
                  className="w-full h-11 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm sm:text-base font-semibold"
                >
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="mx-auto size-14 rounded-full bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="size-7 text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Check Your Email
              </h2>
              <p className="text-sm text-gray-500">
                We&apos;ve sent a password reset link to your email address.
                Please check your inbox.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => setSent(false)}
                className="text-sm"
              >
                Didn&apos;t receive? Send again
              </Button>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/signin"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              <ArrowLeft className="size-3.5" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
