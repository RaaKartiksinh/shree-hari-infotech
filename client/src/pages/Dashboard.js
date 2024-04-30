/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import SiteCard from "../components/Comman/Cards/SiteCard";
import SupervisorCard from "../components/Comman/Cards/SupervisorCard";
import { IoAddCircle } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";

export default function Dashboard() {
  const [siteList, setSiteList] = useState(false);
  const [supervisorList, setSupervisorList] = useState(false);

  return (
    <div>
      {/* <div className="grid gap-6 max-sm:px-6 px-10 my-10">
        <div className="bg-white  shadow-lg px-4 py-2 rounded-xl font-bold text-xl flex justify-center items-center justify-between">
          Create Site or Supervisor
          <div className="w-14 h-14  flex justify-center items-center  rounded-xl bg-[#42424a] shadow-lg">
            <IoAddCircle className="text-4xl text-[white] " />
          </div>
        </div>
      </div> */}

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
                281
              </div>
            </div>
          </div>
        </div>

        <div
          className=" w-full rounded-xl relative bg-white llg:h-fit sm:h-fit shadow-lg pt-4 lg:pt-4 pb-2 px-5 lg:px-5 max-lg:mb-5 xl:mb-0 cursor-pointer"
          onClick={() => setSupervisorList(true)}
        >
          <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-[#49a3f1] shadow-lg absolute top-[-18px]">
            <MdSupervisorAccount className="text-3xl text-[white]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6c6d] text-[18px] text-right mb-1">
              Supervisor
            </span>
            <span className="text-[#000000de] text-[22px] text-right font-semibold">
              2800
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
      </div>

      {/* {siteList && (
        <>
          <h1 className="text-center">List of Site</h1>
          <SiteCard />
        </>
      )}
      {supervisorList && (
        <>
          <h1 className="text-center">List of Supervisor</h1>
          <SupervisorCard />
        </>
      )} */}
    </div>
  );
}
