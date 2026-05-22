"use client";

import React, { useState } from "react";
import {
  Eye,
  Share2,
  Heart,
  MoreVertical,
  CheckSquare,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DeleteConfirmDialog from "@/components/DeleteConfirmDialog";

const destinations = [
  {
    id: 1,
    name: "Rajshahi",
    country: "Bangladesh",
    date: "Mar 25, 2026",
    budget: "Medium",
    budgetAmount: "18,000",
    budgetColor: "text-amber-600",
    status: "Completed",
    statusColor: "bg-emerald-50 text-emerald-700",
    tag: "Family",
    tagColor: "bg-purple-50 text-purple-600",
    note: "Waiting to see",
    image: "/images/destination1.png",
    favorited: false,
  },
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
    favorited: true,
  },
  {
    id: 3,
    name: "Khulna",
    country: "Bangladesh",
    date: "May 5, 2026",
    budget: "Medium",
    budgetAmount: "10,000",
    budgetColor: "text-amber-600",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    tag: "Solo",
    tagColor: "bg-teal-50 text-teal-600",
    note: "Wonderful place",
    image: "/images/destination3.png",
    favorited: false,
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
    note: "",
    image: "/images/dashboard1.png",
    favorited: true,
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
    note: "",
    image: "/images/dashboard2.png",
    favorited: true,
  },
];

export default function MyDestinationsPage() {
  const [search, setSearch] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; name: string } | null>(null);
  const [favIds, setFavIds] = useState<number[]>(
    destinations.filter((d) => d.favorited).map((d) => d.id)
  );

  const toggleFav = (id: number) => {
    setFavIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            My Destinations
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            All your travel destinations in one place
          </p>
        </div>
        <button
          onClick={() => setSelectMode(!selectMode)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
            selectMode
              ? "bg-emerald-50 text-emerald-700"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <CheckSquare className="size-4" />
          Select
        </button>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((dest) => (
          <div
            key={dest.id}
            className={`rounded-xl bg-white overflow-hidden group transition ${
              selectMode
                ? "ring-2 ring-emerald-200 hover:ring-emerald-400"
                : "ring-1 ring-gray-100 hover:shadow-md"
            }`}
          >
            {/* Image */}
            <div className="relative h-36 sm:h-44 overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              {/* Status badge */}
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${dest.statusColor}`}
              >
                {dest.status}
              </span>
              {/* Favorite */}
              <button
                onClick={() => toggleFav(dest.id)}
                className="absolute top-3 right-3 size-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition"
              >
                <Heart
                  className={`size-4 ${
                    favIds.includes(dest.id)
                      ? "fill-pink-500 text-pink-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
              {/* More */}
              <button className="absolute top-3 right-14 size-8 rounded-full bg-white/80 backdrop-blur-sm items-center justify-center hover:bg-white transition hidden sm:flex">
                <MoreVertical className="size-4 text-gray-600" />
              </button>
            </div>

            {/* Details */}
            <div className="p-4 space-y-2.5">
              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-slate-900">{dest.name}</h3>
                <p className="text-sm text-gray-400">{dest.country}</p>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-400">{dest.date}</p>

              {/* Budget & Tag */}
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

              {/* Note */}
              {dest.note && (
                <p className="text-xs text-gray-400 italic">
                  &ldquo;{dest.note}&rdquo;
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="gap-1.5 flex-1 h-8" asChild>
                  <Link href={`/dashboard/destinations/${dest.id}`}>
                    <Eye className="size-3.5" />
                    View
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 flex-1 h-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => setDeleteTarget({ id: dest.id, name: dest.name })}
                >
                  <Share2 className="size-3.5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DeleteConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        name={deleteTarget?.name ?? ""}
      />
    </div>
  );
}
