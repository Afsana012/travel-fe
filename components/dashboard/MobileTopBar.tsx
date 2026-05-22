"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileTopBar = () => {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="flex items-center justify-center px-4 h-14">
        <Link href="/dashboard">
          <Image
            src="/images/logotb.png"
            alt="Travel Bucket"
            width={120}
            height={30}
            className="h-7 w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
};

export default MobileTopBar;
