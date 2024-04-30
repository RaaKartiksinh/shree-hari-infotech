/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCalendarDay } from "react-icons/fa6";
import CommentLink from "../Buttons/CommentLink";
import CartButton from "../Buttons/CartButton";
import { useDispatch } from "react-redux";
import { deleteSupervisorAsync } from "../../../features/supervisorSlice";
import CreateSupervisorModel from "../../Models/CreateSupervisorModel";

export default function SupervisorCard({ items }) {
  const dispatch = useDispatch();

  const [openSupervisorModel, setOpenSupervisorModel] = useState(false);
  const [sendEditSupervisor, setsendEditSupervisor] = useState({});

  const handleSupervisorDelete = (id) => {
    dispatch(deleteSupervisorAsync(id));
  };
  const handleSupervisorEdit = (editData) => {
    // dispatch(editSupervisorAsync(editData, id))
    setOpenSupervisorModel(true);
    setsendEditSupervisor(editData);
  };
  return (
    <div>
      {" "}
      <section className="py-1 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <div className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-3 ">
            <div className="w-full col-span-12 lg:flex gap-3 max-sm:block img box">
              <img
                src="https://pagedone.io/asset/uploads/1701162826.png"
                // src={items.supervisorphoto}
                alt="speaker image"
                className="max-lg:w-full w-[180px]"
              />

              <div className=" w-full  ps-3 pt-2 flex flex-col gap-5 py-2">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  {items.firstname}
                  {items.lastname}
                </h5>
                <h3 className="rounded-full group bg-backgroundColor1 focus-within:outline-red-500 font-bold  py-2 px-3 w-fit flex items-center text-primary">
                  {/* <TbSquareRoundedFilled className="mx-2 text-[8px]" /> */}
                  {items.addressline1} <br /> {items.addressline2}
                </h3>
                <p className="flex gap-4 font-normal text-base leading-7 text-[#101828] mb-3">
                  {items.supervisoremail}
                  <span>Mob- {items.phonenumber}</span>
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-12 detail w-full lg:pl-3">
              <div className="lg:flex justify-between items-center max-sm:block">
                <div className="flex gap-2">
                  <div className="bg-[#EFF8FF] rounded-lg ">
                    <CommentLink className="">
                      <FaCalendarDay className="text-2xl mx-2 font-bold" />
                      <span className="px-2">Attendance</span>
                    </CommentLink>
                  </div>
                  <CommentLink>
                    <span className="px-3">View Details</span>
                    <CgArrowTopRight className="text-2xl" />
                  </CommentLink>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="me-2">
                    {/* <button
                      type="button"
                      class="text-blue-700 hover:text-white border  border-blue-200 hover:bg-blue-300 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-600 dark:hover:bg-blue-300 dark:focus:ring-blue-300 flex items-center"
                    >
                      <FaEdit className="me-2  text-xl " />
                      Edit
                    </button> */}

                    <CartButton
                      type="button"
                      color="blue"
                      bgColor="pink"
                      className="me-2 dark:hover:bg-blue-300 flex items-center"
                      onClick={() => handleSupervisorEdit(items)}
                    >
                      <FaEdit className="me-2 text-xl" />
                      Edit
                    </CartButton>
                  </div>
                  <div className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right ">
                    <CartButton
                      type="button"
                      color="red"
                      bgColor="#FFCFCC"
                      className="me-2 dark:hover:bg-[#FFCFCC] flex items-center"
                      onClick={() => handleSupervisorDelete(items.id)}
                    >
                      <RiDeleteBin5Line className="me-2 text-xl" />
                      Delete
                    </CartButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {console.log(sendEditSupervisor, "sendEditSupervisor")}
        <CreateSupervisorModel
          openSupervisorModel={openSupervisorModel}
          setOpenSupervisorModel={setOpenSupervisorModel}
          sendEditSupervisor={sendEditSupervisor}
        />
      </section>
    </div>
  );
}
