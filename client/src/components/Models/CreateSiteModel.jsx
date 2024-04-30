import { Modal } from "@mui/material";
import { Formik, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import validate from "../../app/common/Validation";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createSiteAsync, updateSiteAsync } from "../../features/siteSlice";
import Button from "../Comman/Buttons/Button";
import { FaLocationDot } from "react-icons/fa6";

export default function CreateSiteModel({
  openSiteModel,
  setOpenSiteModel,
  sendToEditSiteDate,
}) {
  const dispatch = useDispatch();
  const formik = useFormikContext();

  const [createTab, setCreateTab] = useState(0);
  const [changeTab, setchangeTab] = useState(true);
  const [isEdit, setIsEdit] = useState({});
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [formikinItialValues, setformikinItialValues] = useState({
    sitename: "",
    siteid: "",
    sitephoto: "",
    houseno: "",
    apartmentname: "",
    addressline1: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    longitude: "",
    latitude: "",
  });
  console.log(isEdit);
  const handalCreateSite = (values) => {
    if (isEdit && isEdit.id) {
      dispatch(updateSiteAsync({ id: isEdit.id, values: values }));
    } else {
      dispatch(createSiteAsync(values));
    }
    handleClose();
  };

  const handleNextTab = () => {
    setCreateTab(1);
  };

  const handleClose = () => {
    setCreateTab(0);
    setOpenSiteModel(false);
    setIsEdit({});
    setchangeTab(true);
  };

  const handleSetLocation = () => {
    formik.setValues({
      ...formik.values,
      latitude: 6454545,
      longitude: position?.longitude,
    });
  };

  console.log(position);
  useEffect(() => {
    if (sendToEditSiteDate && sendToEditSiteDate.id) {
      setIsEdit(sendToEditSiteDate);
      setformikinItialValues(sendToEditSiteDate);
      setchangeTab(false);
    }
  }, [sendToEditSiteDate]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      console.log(p);
      setPosition((pre) => ({ ...pre, latitude: p.coords.latitude }));
      setPosition((pre) => ({ ...pre, longitude: p.coords.longitude }));
    });
  }, []);

  return (
    <Modal
      open={openSiteModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[fit-content] mx-auto my-2">
        <div className=" max-sm:w-full mx-auto rounded-xl bg-white shadow-lg p-5 lg:p-8">
          <Formik
            initialValues={formikinItialValues}
            validate={(values) => {
              if (createTab === 0) {
                let errors = validate(values, "createSite");
                if (
                  Object.keys(errors).length === 0 &&
                  Object.keys(values).length > 0
                ) {
                  console.log("submint valudesggdfgff");
                  setchangeTab(false);
                } else {
                  setchangeTab(true);
                }

                return errors;
              }
              if (createTab === 1) {
                let errors = validate(values, "createSite1");
                console.log(errors);
                return errors;
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form submitted:", values);
              handalCreateSite(values);
            }}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {createTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        {isEdit.id ? "Edit site" : "Create site"}
                      </span>
                      <IoClose
                        className="text-[#667085] text-[34px]"
                        onClick={handleClose}
                      />
                    </div>
                    <label className="text-[22px] font-meduim text-[#344054] mb-3">
                      Site name
                    </label>
                    <input
                      type="text"
                      name="sitename"
                      placeholder="Site name"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.sitename || ""}
                    />

                    <div className="text-red-500 mb-1">
                      {errors.sitename && touched.sitename && errors.sitename}
                    </div>
                    <label className="text-[22px] font-meduim text-[#344054] mb-3">
                      Site ID
                    </label>
                    <input
                      type="number"
                      name="siteid"
                      placeholder="Site id"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.siteid}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.siteid && touched.siteid && errors.siteid}
                    </div>
                    <label className="text-[22px] font-meduim text-[#344054] mb-3">
                      Site photo
                    </label>
                    <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-10">
                      <input
                        type="file"
                        name="sitephoto"
                        className="absolute outline-none w-full top-10 mx-auto opacity-0"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {/* Find Errors this_  */}
                      <img
                        src="/images/FeaturedIcon.svg"
                        alt="uploadimg"
                        className="w-20 h-20 mx-auto mb-6"
                      />
                      {values.sitephoto ? (
                        <p className="text-[18px] text-[#475467] text-center w-full">
                          {values.sitephoto}
                        </p>
                      ) : (
                        <p className="text-[18px] text-[#475467] text-center w-full">
                          <span className="text-[18px] text-[#2D66F4]">
                            Click to upload
                          </span>
                          or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                      )}
                    </div>
                    <div className="text-red-500 mb-1">
                      {errors.sitephoto &&
                        touched.sitephoto &&
                        errors.sitephoto}
                    </div>
                    <div className="flex justify-end gap-5">
                      <Button
                        onClick={() => {
                          handleNextTab();
                        }}
                        disabled={changeTab}
                        className={
                          changeTab
                            ? "bg-blue-500 text-white py-3 px-6 rounded-lg opacity-50 cursor-not-allowed"
                            : "text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        }
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {createTab === 1 && (
                  <div className="">
                    <div className="">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-[#101828] text-[26px] font-semibold">
                            {isEdit.id ? "Edit site" : "Create site"}
                          </span>
                          <IoClose
                            className="text-[#667085] w-[26px] h-[26px]"
                            onClick={handleClose}
                          />
                        </div>

                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Address line 1
                        </label>
                        <input
                          type="text"
                          placeholder="Road/Area"
                          name="addressline1"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.addressline1}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.addressline1 &&
                            touched.addressline1 &&
                            errors.addressline1}
                        </div>
                        <div className="lg:grid grid-cols-2 gap-5">
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              Pincode
                            </label>
                            <input
                              type="number"
                              placeholder="000000"
                              name="pincode"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pincode}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.pincode &&
                                touched.pincode &&
                                errors.pincode}
                            </div>
                          </div>
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              City
                            </label>
                            <input
                              type="text"
                              placeholder="Ex. Surat"
                              name="city"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.city}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.city && touched.city && errors.city}
                            </div>
                          </div>
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              State
                            </label>
                            <input
                              type="text"
                              placeholder="Ex. Benglore"
                              name="state"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.state}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.state && touched.state && errors.state}
                            </div>
                          </div>
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              Country
                            </label>
                            <input
                              type="text"
                              placeholder="india"
                              name="country"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.country}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.country &&
                                touched.country &&
                                errors.country}
                            </div>
                          </div>
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              Longitude
                            </label>
                            <input
                              type="number"
                              placeholder="000"
                              name="longitude"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.longitude}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.longitude &&
                                touched.longitude &&
                                errors.longitude}
                            </div>
                          </div>
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              Latitude
                            </label>
                            <input
                              type="number"
                              placeholder="000"
                              name="latitude"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.latitude}
                            />

                            <div className="text-red-500 mb-1">
                              {errors.latitude &&
                                touched.latitude &&
                                errors.latitude}
                            </div>
                          </div>
                        </div>

                        {/* location  */}
                        <div className=" text-right ">
                          <button
                            type="button"
                            // onClick={() => handleSetLocation()}
                            onClick={() => {
                              setFieldValue("longitude", position?.longitude);
                              setFieldValue("latitude", position?.latitude);
                            }}
                            // setFieldValue
                            className="bg-slate-300 rounded-xl px-3  py-1 w-fit flex justify-center items-center"
                          >
                            <FaLocationDot />
                            <span className="px-2"> Get Current location </span>
                          </button>
                        </div>

                        <div className="flex justify-end gap-5 mt-6">
                          <button
                            className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
                            onClick={() => setCreateTab(0)}
                          >
                            Back
                          </button>
                          <button
                            className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                            // type={createTab === 1 ? "submit" : "button"}
                            type={"submit"}
                            disabled={isSubmitting}
                          >
                            {isEdit.id ? "Edit site" : "Create site"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
}
