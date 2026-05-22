"use client";

import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddDestinationDialog from "@/components/AddDestinationDialog";

const DashboardNavbar = () => {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <>
      <div className="sticky top-14 md:top-0 z-30 bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              placeholder="Search destinations..."
              className="pl-10 h-10"
            />
          </div>
          <Button
            onClick={() => setAddOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shrink-0"
          >
            <Plus className="size-4" />
            <span className="hidden sm:inline">Add Destination</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>

      <AddDestinationDialog open={addOpen} onOpenChange={setAddOpen} />
    </>
  );
};

export default DashboardNavbar;
