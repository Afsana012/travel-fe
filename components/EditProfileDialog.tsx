"use client";

import React from "react";
import { User, Mail, Camera } from "lucide-react";
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

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditProfileDialog = ({ open, onOpenChange }: EditProfileDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Edit Profile
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Update your personal information
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-5">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center relative group">
              <User className="size-7 text-white" strokeWidth={1.5} />
              <button
                type="button"
                className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <Camera className="size-5 text-white" />
              </button>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                Profile Photo
              </p>
              <p className="text-xs text-gray-400">
                Click the avatar to upload a new photo
              </p>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="edit-name" className="text-slate-700">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                id="edit-name"
                defaultValue="Abc"
                className="pl-10"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="edit-email" className="text-slate-700">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                id="edit-email"
                type="email"
                defaultValue="abc@gmail.com"
                className="pl-10"
              />
            </div>
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
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
