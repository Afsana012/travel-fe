"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  Eye,
  Share2,
  Trash2,
  ArrowUpDown,
  LayoutGrid,
  LayoutList,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const favorites = [
  {
    id: 2,
    name: "Dhaka",
    country: "Bangladesh",
    date: "Apr 10, 2026",
    budget: "High",
    budgetAmount: "10,000",
    budgetColor: "text-red-500",
    status: "Visited",
    statusColor: "bg-blue-50 text-blue-600",
    tag: "Adventure",
    tagColor: "bg-orange-50 text-orange-600",
    note: "Change",
    image: "/images/destination2.png",
  },
  {
    id: 4,
    name: "Natore",
    country: "Bangladesh",
    date: "Apr 20, 2026",
    budget: "Medium",
    budgetAmount: "$1,000",
    budgetColor: "text-amber-600",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    tag: "Friends",
    tagColor: "bg-blue-50 text-blue-600",
    note: "Beautiful old buildings",
    image: "/images/dashboard1.png",
  },
  {
    id: 5,
    name: "Cox's Bazar",
    country: "Bangladesh",
    date: "May 15, 2026",
    budget: "High",
    budgetAmount: "$20,000",
    budgetColor: "text-red-500",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    tag: "Friends",
    tagColor: "bg-blue-50 text-blue-600",
    note: "Longest sea beach",
    image: "/images/dashboard2.png",
  },
];

export default function FavoritesPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = favorites.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            placeholder="Search favorites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={`size-9 rounded-lg flex items-center justify-center transition ${
              view === "grid"
                ? "bg-slate-800 text-white"
                : "bg-white text-gray-400 ring-1 ring-gray-200 hover:text-gray-600"
            }`}
          >
            <LayoutGrid className="size-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`size-9 rounded-lg flex items-center justify-center transition ${
              view === "list"
                ? "bg-slate-800 text-white"
                : "bg-white text-gray-400 ring-1 ring-gray-200 hover:text-gray-600"
            }`}
          >
            <LayoutList className="size-4" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Favorites</h1>
        <p className="text-sm text-gray-500 mt-1">
          {filtered.length} saved destination{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="size-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
            <Heart className="size-7 text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">
            No favorites yet
          </h3>
          <p className="text-sm text-gray-400 mt-1 max-w-xs">
            Heart a destination to save it here for quick access.
          </p>
        </div>
      )}

      {/* Grid View */}
      {view === "grid" && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="rounded-xl bg-white ring-1 ring-gray-100 overflow-hidden group hover:shadow-md transition"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${dest.statusColor}`}
                >
                  {dest.status}
                </span>
                <button className="absolute top-3 right-3 size-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition">
                  <Heart className="size-4 fill-pink-500 text-pink-500" />
                </button>
              </div>

              <div className="p-4 space-y-2.5">
                <div>
                  <h3 className="font-semibold text-slate-900">{dest.name}</h3>
                  <p className="text-sm text-gray-400">{dest.country}</p>
                </div>

                <p className="text-sm text-gray-400">{dest.date}</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-sm font-medium ${dest.budgetColor}`}>
                    {dest.budget} · {dest.budgetAmount}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${dest.tagColor}`}
                  >
                    {dest.tag}
                  </span>
                </div>

                {dest.note && (
                  <p className="text-xs text-gray-400 italic">
                    &ldquo;{dest.note}&rdquo;
                  </p>
                )}

                <div className="flex gap-2 pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 flex-1 h-8"
                  >
                    <Eye className="size-3.5" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 flex-1 h-8"
                  >
                    <Share2 className="size-3.5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === "list" && filtered.length > 0 && (
        <div className="space-y-3">
          {/* Sort header */}
          <div className="hidden md:grid grid-cols-[1fr_100px_100px_100px_80px] gap-3 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
            <span>Destination</span>
            <span>Status</span>
            <span>Date</span>
            <span>Budget</span>
            <span className="text-right">Actions</span>
          </div>

          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="rounded-xl bg-white ring-1 ring-gray-100 p-3 sm:p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                {/* Image */}
                <div className="relative size-16 sm:size-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Country */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-gray-400">{dest.country}</p>
                  {dest.note && (
                    <p className="text-xs text-gray-400 italic mt-0.5 truncate">
                      &ldquo;{dest.note}&rdquo;
                    </p>
                  )}
                </div>

                {/* Status */}
                <span
                  className={`hidden md:block text-xs font-semibold px-2.5 py-1 rounded-full ${dest.statusColor} shrink-0`}
                >
                  {dest.status}
                </span>

                {/* Date */}
                <span className="hidden md:block text-sm text-gray-400 w-28 shrink-0">
                  {dest.date}
                </span>

                {/* Budget */}
                <span
                  className={`hidden md:block text-sm font-medium ${dest.budgetColor} w-24 shrink-0`}
                >
                  {dest.budget} · {dest.budgetAmount}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button className="size-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
                    <Eye className="size-4" />
                  </button>
                  <button className="size-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
                    <Share2 className="size-4" />
                  </button>
                  <button className="size-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>

              {/* Mobile-only tags */}
              <div className="md:hidden flex items-center gap-2 mt-2 pl-20">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${dest.statusColor}`}
                >
                  {dest.status}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${dest.tagColor}`}
                >
                  {dest.tag}
                </span>
                <span className={`text-xs font-medium ${dest.budgetColor}`}>
                  {dest.budget} · {dest.budgetAmount}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
