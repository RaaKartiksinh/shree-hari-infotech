/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartButton from "../Buttons/CartButton";
import { useDispatch } from "react-redux";
import { deleteSiteAsync } from "../../../features/siteSlice";
import CreateSiteModel from "../../Models/CreateSiteModel";
import DeleteModel from "../../Models/DeleteModel";
import CommentLink from "../Buttons/CommentLink";
import { FaLocationArrow } from "react-icons/fa";

export default function SiteCard({ siteData }) {
  const dispatch = useDispatch();
  const [openSiteModel, setOpenSiteModel] = useState(false);
  const [sendToEditSiteDate, setsendToEditSiteDate] = useState({});
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  const handleClose = () => {
    setOpenDeleteModel(false);
  };

  const handleEditSite = (e, siteData) => {
    setsendToEditSiteDate(siteData);
    setOpenSiteModel(true);
  };

  const handleSiteDelete = (e, data) => {
    dispatch(deleteSiteAsync(data.site_id));
  };

  const [imageError, setImageError] = useState(false);

  function handleImageError() {
    setImageError(true);
  }

  return (
    <>
      <section className="pt-2 relative">
        <div className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:px-4 grid grid-cols-12 gap-y-4">
          <div className="col-span-12 lg:col-span-3 flex justify-center items-center bg-gray-100 rounded-lg p-0 lg:p-3">
            <img
              src={
                imageError ? "/images/company_image.jpeg" : siteData.site_photo
              }
              onError={handleImageError}
              alt="Image is not available"
              className="sm:w-[100%] xl:w-[80%] rounded-md"
            />
          </div>

          <div className="col-span-12 lg:col-span-9 detail w-full lg:pl-3 flex flex-col justify-around    ">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-1 text-secondary">
              <h5 className="font-manrope font-bold text-xl leading-9 mb-2 lg:mb-0">
                Site Name: {siteData?.site_name}
              </h5>
              <h3 className="rounded-full group flex items-center justify-center focus-within:outline-red-500 font-bold text-base px-3 py-2 lg:text-lg lg:px-4 lg:py-2 ">
                Site ID: {siteData?.site_id}
              </h3>
            </div>
            <p className="font-normal text-base leading-7  mb-3 text-gray-500     xl:w-4/5 ">
              <span>{siteData?.address_line1} </span>
              <span>{siteData?.pincode} </span>
              <span>{siteData?.city} </span>
              <span>{siteData?.state}</span>
              <span>{siteData?.contry}</span>
            </p>

            {/* Button  */}
            <div className="flex justify-between">
              <CommentLink
                to={`https://maps.google.com/maps?q=${siteData?.latitude},${siteData?.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>view</span>
                <FaLocationArrow className=" ms-2 size-4" />
              </CommentLink>

              <div className="flex flex-row justify-end">
                <div className="mb-2 lg:mb-0">
                  <CartButton
                    type="button"
                    color="blue"
                    className="dark:hover:bg-blue-300 flex items-center"
                    onClick={(e) => handleEditSite(e, siteData)}
                  >
                    <FaEdit className="me-2 text-xl" />
                    Edit
                  </CartButton>
                </div>
                <div>
                  <CartButton
                    type="button"
                    color="red"
                    bgColor="#FFCFCC"
                    className="dark:hover:bg-[#FFCFCC] flex items-center border-[#FFCFCC] border-3 text-red-500"
                    onClick={() => setOpenDeleteModel(true)}
                  >
                    <RiDeleteBin5Line
                      className="me-2 text-xl"
                      style={{ color: "red" }}
                    />
                    Delete
                  </CartButton>
                </div>
              </div>
            </div>
            {/* Button  */}
          </div>
        </div>
        <CreateSiteModel
          openSiteModel={openSiteModel}
          setOpenSiteModel={setOpenSiteModel}
          sendToEditSiteDate={sendToEditSiteDate}
        />
        <DeleteModel
          openDeleteModel={openDeleteModel}
          handleClose={handleClose}
          message="Are you sure you want to delete this Site?"
          onDelete={(e) => handleSiteDelete(e, siteData)}
        />
      </section>
    </>
  );
}
