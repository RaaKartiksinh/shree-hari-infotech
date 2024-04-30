import React, { useEffect, useState } from "react";
import SiteCard from "../components/Comman/Cards/SiteCard";
import { IoSearch } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getSiteAsync, selectSiteSiteData } from "./../features/siteSlice";
import { Box } from "@mui/material";
import CreateSiteModel from "../components/Models/CreateSiteModel";
import Button from "../components/Comman/Buttons/Button";

const SiteManagement = () => {
  const dispatch = useDispatch();
  const getSiteData = useSelector(selectSiteSiteData);
  const [openSiteModel, setOpenSiteModel] = useState(false);

  console.log("getSiteData", getSiteData);

  useEffect(() => {
    dispatch(getSiteAsync());
    console.log("called get API");
  }, [dispatch]);

  return (
    <div className="mt-12  ">
      <div className="grid gap-6 max-sm:px-1 px-10 my-10">
        <div className="bg-white w-full max-w-7xl md:px-5 lg-6 mx-auto shadow-lg px-4 py-2 rounded-xl font-bold text-xl flex items-center gap-3">
          <Box
            variant="div"
            component="div"
            className="md:hidden bg-blue-500 rounded-lg px-3"
          >
            <Button onClick={() => setOpenSiteModel(true)} className="">
              Create Site
            </Button>
          </Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <IoSearch className="" />
        </div>
      </div>

      {getSiteData.map((siteData, index) => (
        <SiteCard key={index} siteData={siteData} />
      ))}

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
