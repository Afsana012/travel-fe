"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Heart,
  UserRound,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Map, label: "My Destinations", href: "/dashboard/destinations" },
  { icon: Heart, label: "Favorites", href: "/dashboard/favorites" },
  { icon: UserRound, label: "Profile", href: "/dashboard/profile" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 flex-col bg-white border-r border-gray-100 h-screen sticky top-0 shrink-0">
        <div className="p-5">
          <Link href="/">
            <Image
              src="/images/logotb.png"
              alt="Travel Bucket"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <item.icon className="size-5" strokeWidth={isActive ? 2 : 1.5} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition"
          >
            <LogOut className="size-5" strokeWidth={1.5} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-pb">
        <div className="flex items-center justify-around h-16">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-400"
                }`}
              >
                <item.icon className="size-5" strokeWidth={isActive ? 2.2 : 1.5} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
