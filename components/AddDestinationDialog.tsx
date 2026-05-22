"use client";

import React from "react";
import {
  CalendarIcon,
  Upload,
  ImagePlus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddDestinationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddDestinationDialog = ({
  open,
  onOpenChange,
}: AddDestinationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Add New Destination
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Add a new destination to your travel bucket list
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-6">
          {/* Row 1: City + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-slate-700">
                City <span className="text-red-500">*</span>
              </Label>
              <Input id="city" placeholder="e.g., Sylhet" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="text-slate-700">
                Country <span className="text-red-500">*</span>
              </Label>
              <Input id="country" placeholder="e.g., France" />
            </div>
          </div>

          {/* Destination Image */}
          <div className="space-y-2">
            <Label className="text-slate-700">Destination Image (Optional)</Label>
            <div className="flex gap-2">
              <Input placeholder="Enter image URL" className="flex-1" />
              <Button
                type="button"
                variant="outline"
                className="gap-2 shrink-0 border-dashed border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              >
                <ImagePlus className="size-4" />
                Upload
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              Upload an image or enter an image URL. If not provided, a random
              image will be used.
            </p>
          </div>

          {/* Row 2: Date + Budget + Travel Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700">Travel Date</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                <Input type="date" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Budget Type</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Travel Type</Label>
              <Select defaultValue="solo">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Solo</SelectItem>
                  <SelectItem value="friends">Friends</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3: Amount + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700">Amount (Tk) - Optional</Label>
              <Input type="number" placeholder="e.g., 50000" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Status</Label>
              <Select defaultValue="planned">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planned">Planned</SelectItem>
                  <SelectItem value="visited">Visited</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4: Season + Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700">Season</Label>
              <Select defaultValue="summer">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summer">Summer</SelectItem>
                  <SelectItem value="rainy">Rainy</SelectItem>
                  <SelectItem value="autumn">Autumn</SelectItem>
                  <SelectItem value="late-autumn">Late Autumn</SelectItem>
                  <SelectItem value="winter">Winter</SelectItem>
                  <SelectItem value="spring">Spring</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Priority</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label className="text-slate-700">Notes</Label>
            <Textarea
              placeholder="Add any notes about this destination..."
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2 border-t border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto sm:min-w-24"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white sm:min-w-32"
            >
              Add Destination
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDestinationDialog;
