/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCalendarDay } from "react-icons/fa6";
import CommentLink from "../Buttons/CommentLink";
import CartButton from "../Buttons/CartButton";
import { useDispatch } from "react-redux";
import {
  deleteSupervisorAsync,
  getSupervisorAttendanceAsync,
} from "../../../features/supervisorSlice";
import CreateSupervisorModel from "../../Models/CreateSupervisorModel";
import DeleteModel from "../../Models/DeleteModel";
import SupervisorAttendance from "../../Attendance/SupervisorAttendance";
import { Button, Menu } from "@mui/material";

export default function SupervisorCard({ items }) {
  const dispatch = useDispatch();
  const [openSupervisorModel, setOpenSupervisorModel] = useState(false);
  const [sendEditSupervisor, setsendEditSupervisor] = useState({});
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [imageError, setImageError] = useState(false);
  // Attendance
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  function handleImageError() {
    setImageError(true);
  }

  const handleClose = () => {
    setOpenDeleteModel(false);
  };

  const handleSupervisorEdit = (e, editData) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSupervisorModel(true);
    setsendEditSupervisor(editData);
  };

  const handleSupervisorDelete = (supervisor_id) => {
    dispatch(deleteSupervisorAsync(supervisor_id));
  };
  const handleClick = (event, s_id) => {
    // event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    if (!open) {
      dispatch(getSupervisorAttendanceAsync(s_id));
    }
  };

  const handleCloseAttendance = () => {
    setAnchorEl(null);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <section className="pt-2 relative">
        <div className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:px-4 grid grid-cols-12 gap-y-4">
          <div className="w-full col-span-12 flex  max-sm:block img box">
            <div className="col-span-2 lg:col-span-2 flex justify-center items-center bg-gray-100 rounded-lg p-3 lg:p-3">
              <img
                src={
                  imageError
                    ? "/images/supervisorDummy.png"
                    : items.supervisor_photo
                }
                onError={handleImageError}
                alt="Image is not available"
                className="sm:w-[200px] xl:w-[200px] rounded-md"
              />
            </div>

            <div className="col-span-10 lg:col-span-10 detail w-full pl-3 flex flex-col justify-around">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-1 text-secondary">
                <h5 className="font-manrope font-bold text-xl leading-9 mb-2 lg:mb-0">
                  <span className="text-purple-800"> Name: </span>
                  {`${items.firstname} ${items.lastname}`}
                </h5>
                <h3 className="rounded-full group flex items-center justify-center focus-within:outline-red-500 font-bold text-base px-3 py-2 lg:text-lg lg:px-4 lg:py-2 ">
                  <span className="text-purple-800"> Supervisor ID:</span>
                  {items?.supervisor_id}
                </h3>
              </div>

              <div className="flex max-[1024px]:grid gap-6 mb-3  text-gray-500  ">
                <span className="font-normal text-[18px] leading-7 ">
                  <span className="text-purple-800 font-bold"> Email : </span>
                  {`${items.supervisor_email}`}
                </span>
                <span className="font-normal text-[18px] leading-7 ">
                  <span className="text-purple-800 font-bold">
                    Phone Number :
                  </span>
                  {`${items.phone_number}`}
                </span>
              </div>

              <p className="font-normal text-base leading-7  mb-3 text-gray-500     xl:w-4/5 ">
                <span>{items?.address_line1} </span>
                <span>{items?.pincode} </span>
                <span>{items?.city} </span>
                <span>{items?.state}</span>
                <span>{items?.contry}</span>
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-12 detail w-full lg:pl-3">
            <div className="lg:flex justify-between items-center max-sm:block">
              <div className="flex gap-1">
                <div className="bg-[#EFF8FF] rounded-lg flex ">
                  {/* dkjdijfshfviusdhfkjasdhflkdsjkjfhdkjfkjfdjfhdfhdjfhdjfhdjfhdjfjdfhdjhfh */}

                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(e) => handleClick(e, items.supervisor_id)}
                    style={{ color: "gray" }}
                    className=" font-medium text-gray-800 hover:text-gray-800 dark:text-gray-500 text-base flex items-center justify-center text-center"
                    sx={{ paddingY: "0px" }}
                  >
                    <FaCalendarDay className="text-2xl mx-2 font-bold" />{" "}
                    Attendance
                  </Button>
                  <Menu
                    autoFocus={false}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCloseAttendance();
                    }}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    className="bg-red"
                  >
                    <SupervisorAttendance></SupervisorAttendance>
                  </Menu>

                  {/* dfdfdfdkfnkjbvjbvdsklfhskfhkjgfdskjfaskjgbgjslkbafklbadskjgblkafsjgb */}
                </div>
                <CommentLink className="ms-5">
                  <span className="px-3 pt-2">View Details</span>
                  <CgArrowTopRight className="text-2xl" />
                </CommentLink>
              </div>
              <div className="flex justify-end">
                <div className="me-2">
                  <CartButton
                    type="button"
                    color="blue"
                    bgColor="pink"
                    className="me-2 dark:hover:bg-blue-300 flex items-center text-[18px]"
                    onClick={(e) => handleSupervisorEdit(e, items)}
                  >
                    <FaEdit className="me-2 text-[18px]" />
                    Edit
                  </CartButton>
                </div>
                <div className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right ">
                  <CartButton
                    type="button"
                    color="red"
                    bgColor="#FFCFCC"
                    className="me-2 dark:hover:bg-[#f8c1bd] text-red-500 border border-red-500 flex items-center text-[18px]"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenDeleteModel(true);
                    }}
                  >
                    <RiDeleteBin5Line className="me-2 text-[18px]" />
                    Delete
                  </CartButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <CreateSupervisorModel
          openSupervisorModel={openSupervisorModel}
          setOpenSupervisorModel={setOpenSupervisorModel}
          sendEditSupervisor={sendEditSupervisor}
        />
      </section>
      <DeleteModel
        openDeleteModel={openDeleteModel}
        handleClose={handleClose}
        message="Are you sure you want to delete this Supervisor?"
        onDelete={() => handleSupervisorDelete(items.supervisor_id)}
      />
    </div>
  );
}

// style
