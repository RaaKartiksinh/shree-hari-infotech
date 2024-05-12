import React, { useEffect } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSiteAsync, selectSiteSiteData } from "../features/siteSlice";
import CountUp from "react-countup";
import {
  selectSiteCountComplit,
  selectSupervisorCountComplit,
  setSiteCounterComplit,
  setSupervisorCounterComplit,
} from "../features/commonSlice";
import {
  getSupervisorAsync,
  selectSupervisorData,
} from "../features/supervisorSlice";
import SupervisorAttendance from "../components/Attendance/SupervisorAttendance";



export default function Dashboard() {
  const dispatch = useDispatch();

  const siteCount = useSelector(selectSiteSiteData);
  const supervisoerCounter = useSelector(selectSupervisorData);
  const SiteCounterComplit = useSelector(selectSiteCountComplit);
  const supervisorCounterComplit = useSelector(selectSupervisorCountComplit);

  const handleCountComplete = () => {
    dispatch(setSiteCounterComplit(false));
    dispatch(setSupervisorCounterComplit(false));
  };

  // call apis
  useEffect(() => {
    dispatch(getSiteAsync());
    dispatch(getSupervisorAsync());
  }, [dispatch]);

  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-6 max-sm:px-6   mt-16">
        <div className=" w-full rounded-xl relative bg-white lg:h-fit sm:h-fit shadow-lg pt-4 lg:pt-4 pb-2 px-5 lg:px-5 max-lg:mb-5 xl:mb-0 cursor-pointer">
          <div className="flex flex-col">
            <div className="">
              <div className="w-16 h-16  flex justify-center items-center rounded-xl bg-[#42424a] shadow-lg absolute top-[-18px]">
                <BsBuildingsFill className="text-2xl text-[white] " />
              </div>
            </div>
            <div>
              <div className="text-[#6b6c6d] text-[18px] text-right mb-1">
                Site
              </div>
              <div className="text-[#000000de] text-[22px] text-right font-semibold">
                <span>
                  {SiteCounterComplit && (
                    <CountUp
                      end={siteCount.length}
                      onEnd={handleCountComplete}
                    />
                  )}
                  {!SiteCounterComplit && siteCount.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full rounded-xl relative bg-white llg:h-fit sm:h-fit shadow-lg pt-4 lg:pt-4 pb-2 px-5 lg:px-5 max-lg:mb-5 xl:mb-0 cursor-pointer">
          <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-[#49a3f1] shadow-lg absolute top-[-18px]">
            <MdSupervisorAccount className="text-3xl text-[white]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6c6d] text-[18px] text-right mb-1">
              Supervisor
            </span>
            <span className="text-[#000000de] text-[22px] text-right font-semibold">
              <span>
                {supervisorCounterComplit && (
                  <CountUp
                    end={supervisoerCounter.length}
                    onEnd={handleCountComplete}
                  />
                )}
                {!supervisorCounterComplit && supervisoerCounter.length}
              </span>
            </span>
          </div>
        </div>

        <div className="w-full rounded-xl relative bg-white lg:h-fit sm:h-fit shadow-lg pt-4 lg:pt-4 pb-2 px-5 lg:px-5 max-lg:mb-5 xl:mb-0 cursor-pointer">
          <div className="w-16 h-16  flex justify-center items-center rounded-xl bg-[#EC407A] shadow-lg absolute top-[-18px]">
            <BsGrid1X2Fill className="text-2xl text-[white]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6c6d] text-[18x] text-right mb-1">
              Vender
            </span>
            <span className="text-[#000000de] text-[22px] text-right font-semibold">
              +91
            </span>
          </div>
        </div>

        <div className=" w-full rounded-xl relative bg-white lg:h-fit sm:h-fit shadow-lg pt-4 lg:pt-4 pb-2 px-5 lg:px-5 max-lg:mb-5 xl:mb-0 cursor-pointer">
          <div className="w-16 h-16  flex justify-center items-center rounded-xl bg-[#66BB6A] shadow-lg absolute top-[-18px]">
            <BsGrid1X2Fill className="text-2xl text-[white]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6c6d] text-[18px] text-right mb-1">
              Material
            </span>
            <span className="text-[#000000de] text-[22px] text-right font-semibold">
              234k
            </span>
          </div>
        </div>



        <SupervisorAttendance></SupervisorAttendance>
      </div>
    </div>
  );
}
