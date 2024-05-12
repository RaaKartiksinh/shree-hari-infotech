import React, { useEffect, useState } from "react";
import SiteCard from "../components/Comman/Cards/SiteCard";
import { IoSearch } from "react-icons/io5";
import { ImBoxRemove } from "react-icons/im";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  getSiteAsync,
  getSiteSupervisorListAsync,
  selectSiteSiteData,
  selectSiteStatus,
} from "./../features/siteSlice";
import { Pagination, Stack } from "@mui/material";
import CreateSiteModel from "../components/Models/CreateSiteModel";
import CardLoder from "../components/Loder/CardLoder";

const SiteManagement = () => {
  const dispatch = useDispatch();

  const getSiteData = useSelector(selectSiteSiteData);
  const getSiteStatus = useSelector(selectSiteStatus);
  const [openSiteModel, setOpenSiteModel] = useState(false);

  useEffect(() => {
    dispatch(getSiteAsync());
    dispatch(getSiteSupervisorListAsync());
  }, [dispatch]);

  return (
    <div className="mt-6  relative  ">
      <section className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
        {getSiteStatus === "loading" ? (
          <CardLoder />
        ) : (
          <>
            {getSiteData && getSiteData.length > 0 ? (
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
                {getSiteData.map((siteData, index) => (
                  <SiteCard key={index} siteData={siteData} />
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

      {/* Models Site  */}
      <CreateSiteModel
        openSiteModel={openSiteModel}
        setOpenSiteModel={setOpenSiteModel}
      />
    </div>
  );
};

export default SiteManagement;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
