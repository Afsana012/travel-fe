"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Wallet,
  Tag,
  Thermometer,
  Flag,
  Heart,
  Pencil,
  Trash2,
  Share2,
  NotebookPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const destinationData: Record<
  string,
  {
    name: string;
    country: string;
    date: string;
    budget: string;
    budgetAmount: string;
    budgetColor: string;
    status: string;
    statusColor: string;
    tag: string;
    tagColor: string;
    season: string;
    priority: string;
    priorityColor: string;
    note: string;
    image: string;
    favorited: boolean;
    description: string;
  }
> = {
  "1": {
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
    season: "Winter",
    priority: "Medium",
    priorityColor: "text-amber-600",
    note: "Waiting to see",
    image: "/images/destination1.png",
    favorited: false,
    description:
      "Rajshahi is known for its silk, mangoes, and historical sites. Visit the ancient temples, enjoy the sunset over the Padma River, and explore the vibrant local culture.",
  },
  "2": {
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
    season: "Spring",
    priority: "High",
    priorityColor: "text-red-500",
    note: "Change",
    image: "/images/destination2.png",
    favorited: true,
    description:
      "The capital city of Bangladesh, Dhaka is a bustling metropolis with rich history, vibrant street life, and incredible food. Visit Lalbagh Fort, Ahsan Manzil, and the old town.",
  },
  "3": {
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
    season: "Summer",
    priority: "Medium",
    priorityColor: "text-amber-600",
    note: "Wonderful place",
    image: "/images/destination3.png",
    favorited: false,
    description:
      "Home to the Sundarbans, the world's largest mangrove forest. Explore the wildlife, take a boat safari, and experience the unique ecosystem of this UNESCO World Heritage Site.",
  },
  "4": {
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
    season: "Spring",
    priority: "Low",
    priorityColor: "text-emerald-600",
    note: "Beautiful old buildings",
    image: "/images/dashboard1.png",
    favorited: true,
    description:
      "Famous for the Natore Rajbari, a stunning palace complex. The town offers a peaceful atmosphere with beautiful colonial-era architecture and lush green landscapes.",
  },
  "5": {
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
    season: "Summer",
    priority: "High",
    priorityColor: "text-red-500",
    note: "Longest sea beach",
    image: "/images/dashboard2.png",
    favorited: true,
    description:
      "Home to the world's longest unbroken natural sea beach at 120 km. Enjoy stunning sunsets, fresh seafood, and the vibrant atmosphere of this popular tourist destination.",
  },
};

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [fav, setFav] = useState(
    destinationData[params.id as string]?.favorited ?? false
  );

  const dest = destinationData[params.id as string];

  if (!dest) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-lg font-semibold text-slate-700">
          Destination not found
        </p>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="size-4 mr-1.5" />
          Go Back
        </Button>
      </div>
    );
  }

  const details = [
    { icon: CalendarDays, label: "Travel Date", value: dest.date },
    {
      icon: Wallet,
      label: "Budget",
      value: `${dest.budget} · ${dest.budgetAmount}`,
    },
    { icon: Thermometer, label: "Season", value: dest.season },
    { icon: Flag, label: "Priority", value: dest.priority },
    { icon: Tag, label: "Travel Type", value: dest.tag },
    { icon: MapPin, label: "Country", value: dest.country },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 max-w-4xl">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition"
      >
        <ArrowLeft className="size-4" />
        Back to destinations
      </button>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-80">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <div className="flex items-end justify-between">
            <div>
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${dest.statusColor} mb-2`}
              >
                {dest.status}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {dest.name}
              </h1>
              <p className="text-sm text-white/80 flex items-center gap-1 mt-1">
                <MapPin className="size-3.5" />
                {dest.country}
              </p>
            </div>
            <button
              onClick={() => setFav(!fav)}
              className="size-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition"
            >
              <Heart
                className={`size-5 ${
                  fav ? "fill-pink-500 text-pink-500" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="gap-1.5">
          <Pencil className="size-3.5" />
          Edit
        </Button>
        <Button variant="outline" className="gap-1.5 text-red-500 hover:text-red-600 hover:bg-red-50">
          <Trash2 className="size-3.5" />
          Delete
        </Button>
        <Button variant="outline" className="gap-1.5">
          <Share2 className="size-3.5" />
          Share
        </Button>
      </div>

      {/* Description */}
      <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-800">About</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {dest.description}
        </p>
        {dest.note && (
          <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
            <NotebookPen className="size-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-500 italic">{dest.note}</p>
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-800">Details</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="rounded-lg bg-gray-50 p-3 sm:p-4 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-gray-400">
                <d.icon className="size-3.5" />
                <span className="text-xs font-medium uppercase tracking-wide">
                  {d.label}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
