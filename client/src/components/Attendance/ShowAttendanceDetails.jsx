import React from "react";
import { Avatar } from "@mui/material";

export default function ShowAttendanceDetails({ getCurrentDateDetails }) {
  console.log("getCurrentDateDetails ", getCurrentDateDetails);

  let reasonComponents = null;

  // Check if getCurrentDateDetails.isPresent is undefined
  if (getCurrentDateDetails?.isPresent === undefined) {
    return;
    // return (reasonComponents = (
    //   <div className="font-bold text-sm pt-1.5 text-purple-300 ">Data not available</div>
    // ));
  } else {
    // Proceed with the switch statement if isPresent is defined
    switch (getCurrentDateDetails.isPresent) {
      case "present":
        reasonComponents = (
          <div className="flex justify-between items-center mt-4">
            <div>
              <Avatar
                alt="Remy Sharp"
                // src="/me/1.jpeg"
                src={
                  getCurrentDateDetails.attendanceImage ||
                  "/images/Supervisor.png"
                }
                sx={{ width: 56, height: 56 }}
              />
            </div>
            <div className="px-2 font-bold text-sm">
              <p>
                <span className="text-purple-300"> Start Time : </span>
                {getCurrentDateDetails.startTime}
              </p>
              <p className="pt-1.5">
                <span className="text-purple-300"> End Time : </span>
                {getCurrentDateDetails.endTime}
              </p>
            </div>
          </div>
        );
        break;

      case "absent":
        reasonComponents = (
          <div className="font-bold text-sm pt-1.5">
            <span className="text-purple-300">Absent Reason : </span>
            {getCurrentDateDetails.reason}
          </div>
        );
        break;

      case "leave":
        reasonComponents = (
          <div className="font-bold text-sm pt-1.5">
            <span className="text-purple-300"> Leave Reason : </span>
            {getCurrentDateDetails.reason}
          </div>
        );
        break;

      default:
        reasonComponents = (
          <div className="font-bold text-sm pt-1.5 text-purple-300">
            Sorry, Data not available
          </div>
        );
        break;
    }
  }

  return (
    <section className="col-span-12 lg:col-span-12">
      <div className="text-center text-lg bg-gray-500 p-1 rounded-lg">
        {getCurrentDateDetails?.sdate || null}
      </div>
      {reasonComponents}
    </section>
  );
}
