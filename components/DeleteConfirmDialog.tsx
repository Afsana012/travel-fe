"use client";

import React from "react";
import { Trash2, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  onConfirm?: () => void;
}

const DeleteConfirmDialog = ({
  open,
  onOpenChange,
  name,
  onConfirm,
}: DeleteConfirmDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto size-12 rounded-full bg-red-50 flex items-center justify-center mb-2">
            <AlertTriangle className="size-6 text-red-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-slate-900 text-center">
            Delete Destination?
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-center">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-700">{name}</span>? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto sm:min-w-24"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              onConfirm?.();
              onOpenChange(false);
            }}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white gap-2 sm:min-w-32"
          >
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
