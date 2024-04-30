import React, { useEffect, useState } from "react";
import SupervisorCard from "../components/Comman/Cards/SupervisorCard";
import { IoSearch } from "react-icons/io5";
import { Box, Button } from "@mui/material";
import CreateSupervisorModel from "../components/Models/CreateSupervisorModel";
import { useDispatch, useSelector } from "react-redux";
import {
  getSupervisorAsync,
  selectSupervisorData,
} from "../features/supervisorSlice";

const SupervisorManagement = () => {
  const [openSupervisorModel, setOpenSupervisorModel] = useState(false);

  const dispatch = useDispatch();
  const getSupervisorData = useSelector(selectSupervisorData);
  console.log(getSupervisorData, "getSupervisorData");

  useEffect(() => {
    dispatch(getSupervisorAsync());
    console.log("called get API");
  }, [dispatch]);
  return (
    <>
      <div className="mt-20">
        <div className="grid gap-6 max-sm:px-6 px-10 my-10">
          <div className="bg-white  shadow-lg px-4 py-2 rounded-xl font-bold text-xl flex items-center">
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg py-1 px-4">
              <Box
                variant="div"
                component="div"
                className="md:hidden bg-blue-500 rounded-lg px-3"
              >
                <Button onClick={() => setOpenSupervisorModel(true)}>
                  Create Supervisor
                </Button>
              </Box>
              <IoSearch className="" />
              <input
                type="text"
                className="text-[20px] border-none outline-none"
                placeholder="Create Supervisor"
              />
            </div>
          </div>
        </div>
        {getSupervisorData?.map((items, index) => (
          <SupervisorCard items={items} key={index} />
        ))}
      </div>

      <CreateSupervisorModel
        openSupervisorModel={openSupervisorModel}
        setOpenSupervisorModel={setOpenSupervisorModel}
      />
    </>
  );
};

export default SupervisorManagement;
