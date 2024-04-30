import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import validate from "../../app/common/Validation";
import { Formik } from "formik";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  createSupervisorAsync,
  editSupervisorAsync,
} from "../../features/supervisorSlice";

const CreateSupervisorModel = ({
  openSupervisorModel,
  setOpenSupervisorModel,
  sendEditSupervisor,
}) => {
  const [supervisorTab, setSupervisorTab] = useState(0);
  const [enableButton, setEnableButton] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [initialSupervisor, setInitialSupervisor] = useState({
    supervisorphoto: "",
    firstname: "",
    lastname: "",
    supervisoremail: "",
    supervisorpassword: "",
    phonenumber: "",
    emergencynumber: "",
    employeeid: "",
    dateofbirth: "",
    addressline1: "",
    addressline2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    joiningdate: "",
  });
  const dispatch = useDispatch();

  const handleNextTab = () => {
    setSupervisorTab(1);
  };

  const handleClose = () => {
    setSupervisorTab(0);
    setOpenSupervisorModel(false);
  };
  const handleCreateSupervisor = (values) => {
    if (isEdit && isEdit.id) {
      dispatch(editSupervisorAsync({ id: isEdit.id, values: values }));
    } else {
      dispatch(createSupervisorAsync(values));
    }
    handleClose();
  };
  useEffect(() => {
    console.log(sendEditSupervisor, "ddd");
    if (sendEditSupervisor && sendEditSupervisor.id) {
      setInitialSupervisor(sendEditSupervisor);
      setIsEdit(true);
      setEnableButton(false)
    }
  }, [sendEditSupervisor]);

  console.log(initialSupervisor, "initialSupervisor ");

  return (
    <Modal
      open={openSupervisorModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="container mx-auto my-20">
        <div className="w-[680px] h-[720px] max-sm:w-full mx-auto rounded-xl bg-white shadow-lg p-5 lg:p-8 overflow-auto">
          <Formik
            initialValues={initialSupervisor}
            validate={(values) => {
              if (supervisorTab === 0) {
                let errors = validate(values, "createSupervisor");
                if (
                  Object.keys(errors).length === 0 &&
                  Object.keys(values).length > 0
                ) {
                  setEnableButton(false);
                } else {
                  setEnableButton(true);
                }
                return errors;
              }
              if (supervisorTab === 1) {
                let errors = validate(values, "createSupervisor1");
                return errors;
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              // setSupervisorTab(1);
              handleCreateSupervisor(values);
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
            }) => (
              <form onSubmit={handleSubmit}>
                {supervisorTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Create Supervisor profile
                      </span>
                      <IoClose
                        className="text-[#667085] w-[26px] h-[26px]"
                        onClick={handleClose}
                      />
                    </div>
                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Supervisor photo
                    </label>
                    <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-10">
                      <input
                        type="file"
                        className="absolute outline-none w-full top-10 mx-auto opacity-0"
                        name="supervisorphoto"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // value={values.supervisorphoto}
                      />
                      <img
                        src="/images/FeaturedIcon.svg"
                        alt="uploadimg"
                        className="w-20 h-20 mx-auto mb-6"
                      />
                      {values.supervisorphoto ? (
                        <p className="text-[18px] text-[#475467] text-center w-full">
                          {values.supervisorphoto}
                        </p>
                      ) : (
                        <p className="text-[18px] text-[#475467] text-center w-full">
                          <span className="text-[18px] text-[#2D66F4]">
                            Click to upload
                          </span>{" "}
                          or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                      )}
                    </div>
                    <div className="text-red-500 mb-1">
                      {errors.supervisorphoto &&
                        touched.supervisorphoto &&
                        errors.supervisorphoto}
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          First name
                        </label>
                        <input
                          type="text"
                          placeholder="First name"
                          name="firstname"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstname}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.firstname &&
                            touched.firstname &&
                            errors.firstname}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Last name
                        </label>
                        <input
                          type="text"
                          placeholder="Last name"
                          name="lastname"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastname}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.lastname &&
                            touched.lastname &&
                            errors.lastname}
                        </div>
                      </div>
                    </div>

                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="supervisoremail"
                      placeholder="you@company.com"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.supervisoremail}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.supervisoremail &&
                        touched.supervisoremail &&
                        errors.supervisoremail}
                    </div>
                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="ABC***12"
                      name="supervisorpassword"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.supervisorpassword}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.supervisorpassword &&
                        touched.supervisorpassword &&
                        errors.supervisorpassword}
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Phone number
                        </label>
                        <input
                          type="number"
                          placeholder="+91 9999999999"
                          name="phonenumber"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phonenumber}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.phonenumber &&
                            touched.phonenumber &&
                            errors.phonenumber}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Emergency phone number
                        </label>
                        <input
                          type="number"
                          name="emergencynumber"
                          placeholder="+91 9999999999"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.emergencynumber}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.emergencynumber &&
                            touched.emergencynumber &&
                            errors.emergencynumber}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-5 mt-6">
                      <button
                        onClick={() => handleNextTab()}
                        disabled={enableButton}
                        className={
                          enableButton
                            ? "bg-blue-500 text-white py-3 px-6 rounded-lg opacity-50 cursor-not-allowed"
                            : "text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {supervisorTab === 1 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Create Supervisor profile
                      </span>
                      <IoClose
                        className="text-[#667085] w-[26px] h-[26px]"
                        onClick={handleClose}
                      />
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Employee ID
                        </label>
                        <input
                          type="text"
                          placeholder="11###1"
                          name="employeeid"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.employeeid}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.employeeid &&
                            touched.employeeid &&
                            errors.employeeid}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Date of birth
                        </label>
                        <input
                          type="date"
                          placeholder="DD/MM/YYYY"
                          name="dateofbirth"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.dateofbirth}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.dateofbirth &&
                            touched.dateofbirth &&
                            errors.dateofbirth}
                        </div>
                      </div>
                    </div>

                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Address line 1
                    </label>
                    <input
                      type="text"
                      placeholder="House no/Building name"
                      name="addressline1"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.addressline1}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.addressline1 &&
                        touched.addressline1 &&
                        errors.addressline1}
                    </div>
                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Address line 2
                    </label>
                    <input
                      type="text"
                      placeholder="Road/Area"
                      name="addressline2"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.addressline2}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.addressline2 &&
                        touched.addressline2 &&
                        errors.addressline2}
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Landmark
                        </label>
                        <input
                          type="text"
                          placeholder="Near by landmark"
                          name="landmark"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.landmark}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.landmark &&
                            touched.landmark &&
                            errors.landmark}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          pincode
                        </label>
                        <input
                          type="number"
                          placeholder="000000"
                          name="pincode"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.pincode}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.pincode && touched.pincode && errors.pincode}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="Ex. Mumbai"
                          name="city"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
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
                          name="state"
                          placeholder="Ex. Maharashtra"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
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
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
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
                          Joining date
                        </label>
                        <input
                          type="date"
                          placeholder="DD/MM/YY"
                          name="joiningdate"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.joiningdate}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.joiningdate &&
                            touched.joiningdate &&
                            errors.joiningdate}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-5 mt-6">
                      <button
                        className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
                        onClick={() => setSupervisorTab(0)}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        disabled={isSubmitting}
                      >
                        Create Supervisor
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

export default CreateSupervisorModel;
