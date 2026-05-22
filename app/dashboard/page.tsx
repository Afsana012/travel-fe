"use client";

import React, { useState } from "react";
import {
  MapPin,
  CalendarCheck,
  CheckCircle2,
  Heart,
  Eye,
  Share2,
  X,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  {
    label: "Total Destinations",
    value: 5,
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Planned Trips",
    value: 2,
    icon: CalendarCheck,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    label: "Places Visited",
    value: 2,
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    label: "Favorites",
    value: 2,
    icon: Heart,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const destinations = [
  {
    id: 1,
    name: "Natore",
    country: "Bangladesh",
    date: "Apr 20, 2026",
    cost: "Medium",
    costAmount: "$1,000",
    costColor: "text-amber-600",
    status: "Planned",
    statusColor: "bg-blue-50 text-blue-600",
    tag: "Friends",
    tagColor: "text-blue-500",
    image: "/images/dashboard1.png",
    favorited: true,
  },
  {
    id: 2,
    name: "Cox's Bazar",
    country: "Bangladesh",
    date: "May 15, 2026",
    cost: "High",
    costAmount: "$20,000",
    costColor: "text-red-500",
    status: "Planned",
    statusColor: "bg-blue-50 text-blue-600",
    tag: "Friends",
    tagColor: "text-blue-500",
    image: "/images/dashboard2.png",
    favorited: true,
  },
];

const seasons = ["Summer", "Rainy", "Autumn", "Late Autumn", "Winter", "Spring"];
const priorities = ["Low", "Medium", "High"];

export default function DashboardPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string[]>(["Planned"]);
  const [filterSeason, setFilterSeason] = useState<string[]>([]);
  const [filterPriority, setFilterPriority] = useState<string[]>([]);

  const toggleFilter = (
    arr: string[],
    setArr: (v: string[]) => void,
    val: string
  ) => {
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const activeFilters = [
    ...filterStatus.map((s) => ({ label: s, clear: () => setFilterStatus(filterStatus.filter((v) => v !== s)) })),
    ...filterSeason.map((s) => ({ label: s, clear: () => setFilterSeason(filterSeason.filter((v) => v !== s)) })),
    ...filterPriority.map((s) => ({ label: s, clear: () => setFilterPriority(filterPriority.filter((v) => v !== s)) })),
  ];

  const filteredDestinations = destinations.filter((d) => {
    if (filterStatus.length > 0 && !filterStatus.some((s) => d.status.includes(s === "Canceled" ? "Cancel" : s))) return false;
    return true;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Here&apos;s your travel overview.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-4 sm:p-5 ring-1 ring-gray-100"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </p>
                <div className={`rounded-lg p-1.5 sm:p-2 ${stat.bg}`}>
                  <stat.icon className={`size-3.5 sm:size-4 ${stat.color}`} strokeWidth={2} />
                </div>
              </div>
              <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filter toggle for mobile/tablet */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          <SlidersHorizontal className="size-4" />
          Filters
          {activeFilters.length > 0 && (
            <span className="size-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-semibold">
              {activeFilters.length}
            </span>
          )}
        </button>

        {/* Content: Filters + Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Panel */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-64 shrink-0`}
          >
            <div className="rounded-xl bg-white p-5 ring-1 ring-gray-100 space-y-5 lg:sticky lg:top-20">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">Filters</h3>
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => {
                      setFilterStatus([]);
                      setFilterSeason([]);
                      setFilterPriority([]);
                    }}
                    className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
                  >
                    <X className="size-3" />
                    Clear
                  </button>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Status</p>
                {["Planned", "Visited", "Canceled"].map((s) => (
                  <label key={s} className="flex items-center gap-2 py-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterStatus.includes(s)}
                      onChange={() => toggleFilter(filterStatus, setFilterStatus, s)}
                      className="size-3.5 rounded border-gray-300 accent-emerald-600"
                    />
                    <span className="text-sm text-gray-600">{s}</span>
                  </label>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Country</p>
                <Input placeholder="e.g. Bangladesh" className="h-8 text-sm" />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Season</p>
                <div className="grid grid-cols-2 gap-x-3">
                  {seasons.map((s) => (
                    <label key={s} className="flex items-center gap-2 py-0.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterSeason.includes(s)}
                        onChange={() => toggleFilter(filterSeason, setFilterSeason, s)}
                        className="size-3.5 rounded border-gray-300 accent-emerald-600"
                      />
                      <span className="text-sm text-gray-600">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Priority</p>
                {priorities.map((p) => (
                  <label key={p} className="flex items-center gap-2 py-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterPriority.includes(p)}
                      onChange={() => toggleFilter(filterPriority, setFilterPriority, p)}
                      className="size-3.5 rounded border-gray-300 accent-emerald-600"
                    />
                    <span className="text-sm text-gray-600">{p}</span>
                  </label>
                ))}
              </div>

              {activeFilters.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Active</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeFilters.map((f) => (
                      <span
                        key={f.label}
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                      >
                        {f.label}
                        <button onClick={f.clear}>
                          <X className="size-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Destination Cards */}
          <div className="flex-1 space-y-4 min-w-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Your Destinations</h2>
                <p className="text-sm text-gray-400">({destinations.length} of 5)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredDestinations.map((dest) => (
                <div
                  key={dest.id}
                  className="rounded-xl bg-white ring-1 ring-gray-100 overflow-hidden group"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
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
                      <Heart
                        className={`size-4 ${
                          dest.favorited ? "fill-pink-500 text-pink-500" : "text-gray-500"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900">{dest.name}</h3>
                        <p className="text-sm text-gray-400">{dest.country}</p>
                      </div>
                      <span className={`text-xs font-semibold ${dest.tagColor}`}>{dest.tag}</span>
                    </div>
                    <p className="text-sm text-gray-400">{dest.date}</p>
                    <p className={`text-sm font-medium ${dest.costColor}`}>
                      {dest.cost} · {dest.costAmount}
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="gap-1.5 flex-1" asChild>
                        <Link href={`/dashboard/destinations/${dest.id}`}>
                          <Eye className="size-3.5" />
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1.5 flex-1">
                        <Share2 className="size-3.5" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
