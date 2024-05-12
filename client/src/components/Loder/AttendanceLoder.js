import { Skeleton } from "@mui/material";
import React from "react";

export default function AttendanceLoder() {
  return (
    <>
      <div className="min-w-[320px] h-[50vh] p-3 ">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={90}
          alt="Image Loading"
          className="rounded-xl"
        />
        <Skeleton
          level="body-xs"
          variant="text"
          width="100%"
          height={60}
          className="mt-2 rounded-xl"
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          alt="Image Loading"
          className="rounded-xl"
        />
      </div>
    </>
  );
}
