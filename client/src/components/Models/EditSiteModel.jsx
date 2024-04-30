import { Modal } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import validate from "../../app/common/Validation";
import { useDispatch } from "react-redux";
import { editSiteAsync } from "../../features/siteSlice";

const EditSiteModel = ({ setOpenEdit, openEdit }) => {
  const [editTab, setEditTab] = useState(0);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenEdit(false);
  };
  return (
    <Modal
      open={openEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[fit-content] mx-auto my-2">
        <div className=" max-sm:w-full mx-auto rounded-xl bg-white shadow-lg p-5 lg:p-8">
          <Formik
            initialValues={{
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
            }}
            validate={(values) => {
              //   return validate(values, "createSite");
              let errors = validate(values, "createSite");

              console.log(errors, "result");
              //   if (
              //     errors.addressline1 &&
              //     errors.apartmentname &&
              //     errors.city &&
              //     errors.country &&
              //     errors.houseno &&
              //     errors.latitude &&
              //     errors.longitude &&
              //     errors.addressline1 &&
              //     errors.state &&
              //     !errors.sitename &&
              //     !errors.siteid &&
              //     !errors.sitephoto &&
              //     createTab === 0
              //   ) {
              //     setSiteData(values);
              //     setCreateTab(1);
              //     errors = {};
              //   } else {
              //     return errors;
              //   }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form submitted:", values);
              //   dispatch(createSiteAsync(values));
              // dispatch(editSiteAsync(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                {editTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Edit site
                      </span>
                      <IoClose
                        className="text-[#667085] text-[32px]"
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
                        value={values.sitephoto}
                      />
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
                      <button
                        className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
                        onClick={handleClose}
                      >
                        Back
                      </button>

                      <button
                        className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        type="submit"
                        disabled={isSubmitting}
                        onClick={() => setEditTab(1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {editTab === 1 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Edit site
                      </span>
                      <IoClose
                        className="text-[#667085] text-[32px]"
                        onClick={handleClose}
                      />
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          House no
                        </label>
                        <input
                          type="text"
                          placeholder="1202"
                          name="houseno"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.houseno}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.houseno && touched.houseno && errors.houseno}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Apartment name
                        </label>
                        <input
                          type="text"
                          placeholder="000000"
                          name="apartmentname"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.apartmentname}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.apartmentname &&
                            touched.apartmentname &&
                            errors.apartmentname}
                        </div>
                      </div>
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
                          {errors.pincode && touched.pincode && errors.sitename}
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
                          {errors.country && touched.country && errors.country}
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

                    <div className="flex justify-end gap-5 mt-6">
                      <button
                        className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
                        onClick={() => setEditTab(0)}
                      >
                        Back
                      </button>
                      <button
                        className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Edit site
                      </button>
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
};

export default EditSiteModel;
