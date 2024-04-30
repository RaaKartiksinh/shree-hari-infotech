/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartButton from "../Buttons/CartButton";
import { useDispatch } from "react-redux";
import { deleteSiteAsync } from "../../../features/siteSlice";
import EditSiteModel from "../../Models/EditSiteModel";
import CreateSiteModel from "../../Models/CreateSiteModel";

export default function SiteCard({ siteData }) {
  const dispatch = useDispatch();
  const [openSiteModel, setOpenSiteModel] = useState(false);
  const [sendToEditSiteDate, setsendToEditSiteDate] = useState({});

  const handleEditSite =(e ,siteData)=>{
    // console.log(siteData)
    setsendToEditSiteDate(siteData)
    setOpenSiteModel(true)
  }

  const handleSiteDelete = (e, data) => {
    dispatch(deleteSiteAsync(data.id));
  };
  return (
    <>
      <section className="py-1 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
          <div className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
            <div className="col-span-12 lg:col-span-3 flex justify-center items-center">
              <img
                src={siteData.sitephoto}
                alt="Image is not Avelable"
                className="max-lg:w-full lg:w-11/12 rounded-lg"
              />
            </div>

            <div className="col-span-12 lg:col-span-9 detail w-full lg:pl-3">
              <div className="flex items-center justify-between w-full  flex-wrap mb-4 text-secondary">
                <h5 className="font-manrope font-bold text-2xl leading-9">
                  Site Name : {siteData.sitename}
                </h5>
                <h3 className="rounded-full group flex items-center justify-center focus-within:outline-red-500 font-bold ">
                  Site ID :{siteData.siteid}
                </h3>
              </div>
              <p className="font-normal text-base leading-7 text-[#101828] mb-6">
                <span> {siteData.houseno} </span>
                <span> {siteData.apartmentname} </span>
                <span> {siteData.addressline1} </span>
                <span> {siteData.pincode} </span>
                <span> {siteData.city} </span>
                <span> {siteData.state} </span>
              </p>
              <div className="flex justify-end  ">
                <div className="me-2">
                  <CartButton
                    type="button"
                    color="blue"
                    className="me-2 dark:hover:bg-blue-300 flex items-center"
                    onClick={(e) => handleEditSite(e , siteData)}
                  >
                    <FaEdit className="me-2 text-xl" />
                    Edit
                  </CartButton>
                </div>
                <div className=" font-manrope font-bold text-2xl leading-9 text-right ">
                  <CartButton
                    type="button"
                    color="red"
                    bgColor="#FFCFCC"
                    className="me-2 dark:hover:bg-[#FFCFCC] flex items-center border-[#FFCFCC] border-3 text-red-500"
                    onClick={(e) => {
                      handleSiteDelete(e, siteData);
                    }}
                  >
                    <RiDeleteBin5Line
                      className="me-2 text-xl "
                      style={{ color: "red" }}
                    />
                    Delete
                  </CartButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateSiteModel
        openSiteModel={openSiteModel}
        setOpenSiteModel={setOpenSiteModel}
        sendToEditSiteDate={sendToEditSiteDate}
      />
      </section>
    </>
  );
}
