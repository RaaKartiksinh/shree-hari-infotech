import { Modal } from "@mui/material";
import React from "react";

export default function DeleteModel({
  openDeleteModel,
  handleClose,
  message,
  onDelete,
}) {
  const handelDelete = () => {
    onDelete();
    handleClose();
  };
  return (
    <Modal
      open={openDeleteModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="mt-10 opacity-1 transition-all sm:max-w-lg sm:w-full sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto p-6 ">
          <h1 className="text-[18px] font-medium">{message}</h1>
          <div className="flex justify-end items-center gap-x-3 pt-3">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-400 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-red-600 border border-red-700 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                handelDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
