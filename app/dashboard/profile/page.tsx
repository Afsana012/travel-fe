"use client";

import React, { useState } from "react";
import {
  MapPin,
  CheckCircle2,
  CalendarCheck,
  Globe,
  Star,
  Heart,
  Pencil,
  Mail,
  CalendarDays,
  User,
} from "lucide-react";
import EditProfileDialog from "@/components/EditProfileDialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const travelStats = [
  {
    label: "Total Destinations",
    value: 5,
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Places Visited",
    value: 2,
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    label: "Planned Trips",
    value: 2,
    icon: CalendarCheck,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    label: "Countries",
    value: 1,
    icon: Globe,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    label: "Avg Rating",
    value: "5.0",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    label: "Favorites",
    value: 2,
    icon: Heart,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const recentDestinations = [
  {
    name: "Cox's Bazar",
    country: "Bangladesh",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    image: "/images/dashboard2.png",
  },
  {
    name: "Natore",
    country: "Bangladesh",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    image: "/images/dashboard1.png",
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    status: "Visited",
    statusColor: "bg-emerald-50 text-emerald-600",
    image: "/images/destination2.png",
  },
  {
    name: "Khulna",
    country: "Bangladesh",
    status: "Planned",
    statusColor: "bg-sky-50 text-sky-600",
    image: "/images/destination3.png",
  },
  {
    name: "Rajshahi",
    country: "Bangladesh",
    status: "Cancelled",
    statusColor: "bg-red-50 text-red-500",
    image: "/images/destination1.png",
  },
];

export default function ProfilePage() {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account and view your travel statistics
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar */}
          <div className="size-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
            <User className="size-9 text-white" strokeWidth={1.5} />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Abc</h2>
              <p className="text-sm text-gray-400">abc@gmail.com</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5" />
                abc@gmail.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" />
                Joined 4/3/2026
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            variant="outline"
            className="gap-2 shrink-0"
            onClick={() => setEditOpen(true)}
          >
            <Pencil className="size-3.5" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Travel Statistics */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Travel Statistics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {travelStats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl ${stat.bg} p-5 text-center`}
            >
              <div className="mx-auto mb-3 size-10 rounded-full bg-white/70 flex items-center justify-center">
                <stat.icon className={`size-5 ${stat.color}`} strokeWidth={2} />
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Destinations */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Recent Destinations
        </h3>
        <div className="rounded-2xl bg-white ring-1 ring-gray-100 divide-y divide-gray-100">
          {recentDestinations.map((dest) => (
            <div
              key={dest.name}
              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50/50 transition"
            >
              {/* Thumbnail */}
              <div className="relative size-12 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Country */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800">
                  {dest.name}
                </h4>
                <p className="text-xs text-gray-400">{dest.country}</p>
              </div>

              {/* Status Badge */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${dest.statusColor} shrink-0`}
              >
                {dest.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <EditProfileDialog open={editOpen} onOpenChange={setEditOpen} />
    </div>
  );
}
