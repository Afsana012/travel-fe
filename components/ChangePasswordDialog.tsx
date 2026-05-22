"use client";

import React from "react";
import { Lock, Eye, EyeOff, Eye as EyeIcon } from "lucide-react";
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

interface ChangePasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChangePasswordDialog = ({
  open,
  onOpenChange,
}: ChangePasswordDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Change Password
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Enter your current password and choose a new one
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="current-pw" className="text-slate-700">
              Current Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                id="current-pw"
                type="password"
                placeholder="Enter current password"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-pw" className="text-slate-700">
              New Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                id="new-pw"
                type="password"
                placeholder="At least 6 characters"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-pw" className="text-slate-700">
              Confirm New Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                id="confirm-pw"
                type="password"
                placeholder="Re-enter new password"
                className="pl-10"
              />
            </div>
          </div>

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
              Update Password
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordDialog;
