"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowLeft,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Globe,
  Plane,
  Compass,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left — Decorative Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white flex-col justify-between p-10 overflow-hidden">
        {/* Floating decorative icons */}
        <div className="absolute top-16 right-16 opacity-10">
          <Globe className="size-40" strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 left-12 opacity-10">
          <Plane className="size-28 -rotate-12" strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-10">
          <Compass className="size-20" strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <MapPin className="size-7" strokeWidth={2.5} />
            <span className="text-2xl font-bold">Travel Bucket</span>
          </Link>
          <h2 className="mt-12 text-3xl font-bold leading-snug max-w-md">
            Explore the world,
            <br />
            one destination
            <br />
            at a time.
          </h2>
          <p className="mt-4 text-emerald-100 max-w-sm leading-relaxed">
            Join thousands of travelers planning their dream trips. Your next
            adventure starts here.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="size-10 rounded-full bg-emerald-400 ring-2 ring-emerald-700 flex items-center justify-center text-xs font-bold">
              A
            </div>
            <div className="size-10 rounded-full bg-teal-400 ring-2 ring-emerald-700 flex items-center justify-center text-xs font-bold text-teal-900">
              R
            </div>
            <div className="size-10 rounded-full bg-emerald-300 ring-2 ring-emerald-700 flex items-center justify-center text-xs font-bold text-emerald-900">
              S
            </div>
          </div>
          <p className="text-sm text-emerald-100">
            <span className="font-semibold text-white">2,500+</span> travelers
            already on board
          </p>
        </div>
      </div>

      {/* Right — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f4faf7] px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link
            href="/"
            className="lg:hidden inline-flex items-center gap-2 mb-6 sm:mb-8"
          >
            <MapPin className="size-6 text-emerald-500" strokeWidth={2.5} />
            <span className="text-xl font-bold text-slate-900">
              Travel Bucket
            </span>
          </Link>

          {/* Card */}
          <div className="rounded-2xl bg-white p-5 sm:p-7 md:p-9 shadow-lg shadow-emerald-500/5 ring-1 ring-gray-100">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Create Your Account
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Start planning your dream destinations today
            </p>

            <form className="mt-5 sm:mt-7 space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10 h-11 rounded-lg"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
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

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 6 characters"
                    className="pl-10 pr-10 h-11 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <Input
                    id="confirm"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className="pl-10 pr-10 h-11 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirm ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-10 sm:h-11 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm sm:text-base font-semibold"
                size="lg"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <button className="flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-slate-700 hover:bg-gray-50 transition">
                <svg className="size-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-slate-700 hover:bg-gray-50 transition">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
