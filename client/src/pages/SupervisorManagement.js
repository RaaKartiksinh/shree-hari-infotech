import React, { useEffect, useState } from "react";
import SupervisorCard from "../components/Comman/Cards/SupervisorCard";
import { IoSearch } from "react-icons/io5";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import CreateSupervisorModel from "../components/Models/CreateSupervisorModel";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Stack } from "@mui/material";

import {
  getSupervisorAsync,
  selectSupervisorData,
  selectSupervisorSatatus,
} from "../features/supervisorSlice";
import CardLoader from "../components/Loder/CardLoder";
import { ImBoxRemove } from "react-icons/im";

const SupervisorManagement = () => {
  const [openSupervisorModel, setOpenSupervisorModel] = useState(false);

  const dispatch = useDispatch();
  const getSupervisorData = useSelector(selectSupervisorData);
  const getSupervisorStatus = useSelector(selectSupervisorSatatus);
  console.log(getSupervisorData, "getSupervisorData");

  useEffect(() => {
    // dispatch(getSiteAsync());
    dispatch(getSupervisorAsync());
  }, [dispatch]);

  return (
    <>
      <section className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto mt-6">
        {getSupervisorStatus === "loading" ? (
          <CardLoader />
        ) : (
          <>
            {getSupervisorData && getSupervisorData.length > 0 ? (
              <>
                {/* Search  */}
                <div className="rounded-b-3xl  border-2 bg-white border-gray-200 p-4 lg:px-4 grid grid-cols-12 gap-y-4">
                  <div className="col-span-12 lg:col-span-12 flex  items-center  rounded-lg p-0  text-center">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: "100%", border: "none" }}
                      renderInput={(params) => (
                        <TextField {...params} label="search site..." />
                      )}
                    />
                  </div>
                </div>
                {/* Site Cart  */}

                {getSupervisorData.map((items, index) => (
                  <SupervisorCard items={items} key={index} />
                ))}

                {/* Pagination  */}
                <section className=" relative -mt-4">
                  <div className="rounded-b-lg  border-2 bg-white border-gray-200 p-4 lg:px-4 grid grid-cols-12 gap-y-4">
                    <div className="col-span-12 lg:col-span-12 flex  items-center  rounded-lg p-0  text-center">
                      <Stack
                        spacing={2}
                        width={"100%"}
                        className="flex  items-center"
                      >
                        <Pagination count={10} shape="rounded" />
                      </Stack>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <>
                {/* Emty Data Commponents  */}
                <div className="rounded-xl  border-2 bg-white border-gray-200 p-4 lg:px-4 flex items-center   emptyBox">
                  <div className="col-span-12 lg:col-span-12 rounded-lg  text-center bg-slate-50 flex justify-center items-center w-full siteHight">
                    <div className="p-0  text-gray-500 flex justify-center items-center flex-col ">
                      <span className="text-xl"> Sorry, No Data Available</span>
                      <ImBoxRemove className="text-8xl mt-3" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </section>

      <CreateSupervisorModel
        openSupervisorModel={openSupervisorModel}
        setOpenSupervisorModel={setOpenSupervisorModel}
      />
    </>
  );
};

export default SupervisorManagement;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
