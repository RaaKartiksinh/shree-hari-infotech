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
import { convertLength } from "@mui/material/styles/cssUtils";

const CreateSupervisorModel = ({
  openSupervisorModel,
  setOpenSupervisorModel,
  sendEditSupervisor,
}) => {
  const [supervisorTab, setSupervisorTab] = useState(0);
  const [enableButton, setEnableButton] = useState(true);
  const [isEdit, setIsEdit] = useState({});
  const [initialSupervisor, setInitialSupervisor] = useState({
    supervisor_photo: "",
    firstname: "",
    lastname: "",
    supervisor_email: "",
    supervisor_password: "",
    phone_number: "",
    emergency_number: "",
    dateofbirth: "",
    address_line1: "",
    address_line2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    joining_date: "",
  });
  const dispatch = useDispatch();

  const handleNextTab = () => {
    setSupervisorTab(1);
  };

  const handleClose = () => {
    setSupervisorTab(0);
    setOpenSupervisorModel(false);
    setIsEdit({});
  };

  const handleCreateSupervisor = (values) => {
    if (isEdit && isEdit.supervisor_id) {
      dispatch(editSupervisorAsync({ id: isEdit.supervisor_id, values: values }));
    } else {
      dispatch(createSupervisorAsync(values));
    }
    handleClose();
  };
  useEffect(() => {
    if (sendEditSupervisor && sendEditSupervisor.supervisor_id) {
      setInitialSupervisor(sendEditSupervisor);
      setIsEdit(sendEditSupervisor);
      setEnableButton(false);
    }
  }, [sendEditSupervisor]);

  return (
    <Modal
      open={openSupervisorModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[90vw] sm:w-[35rem] lg:w-[52rem] mx-auto my-2 overflow-auto h-full">
        {/* <div className="w-[680px] h-[720px] max-sm:w-full mx-auto rounded-xl bg-white shadow-lg p-5 lg:p-8 overflow-auto"> */}
        <div className=" max-sm:w-full mx-auto rounded-xl bg-white shadow-lg p-5 lg:p-8">
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
              setFieldTouched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {supervisorTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        {isEdit && isEdit.supervisor_id
                          ? "Edit Supervisor profile"
                          : "Create Supervisor profile"}
                      </span>
                      <IoClose
                        className="text-[#667085] text-[30px] hover:bg-lightBlue-100 hover:rounded-md"
                        onClick={handleClose}
                      />
                    </div>

                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[20px] font-medium text-[#344054] mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          placeholder="First name"
                          name="firstname"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]*$/;
                            if (
                              inputValue.length <= 50 &&
                              regex.test(inputValue)
                            ) {
                              setFieldTouched("firstname", true, true);
                              handleChange(e);
                            }
                          }}
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
                        <label className="text-[20px] font-medium text-[#344054] mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          placeholder="Last name"
                          name="lastname"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]*$/;
                            if (
                              inputValue.length <= 50 &&
                              regex.test(inputValue)
                            ) {
                              setFieldTouched("lastname", true, true);
                              handleChange(e);
                            }
                          }}
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

                    <label className="text-[20px] font-medium text-[#344054] mb-2 mt-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="supervisor_email"
                      placeholder="you@company.com"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                      onChange={(e) => {
                        setFieldTouched("supervisor_email", true, true);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      value={values.supervisor_email}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.supervisor_email &&
                        touched.supervisor_email &&
                        errors.supervisor_email}
                    </div>
                    <label className="text-[20px] font-medium text-[#344054] mb-2 mt-3">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="ABC***12"
                      name="supervisor_password"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])$/;
                        if (inputValue.length <= 50) {
                          setFieldTouched("supervisor_password", true, true);
                          handleChange(e);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.supervisor_password}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.supervisor_password &&
                        touched.supervisor_password &&
                        errors.supervisor_password}
                    </div>
                    <div className="lg:grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label className="text-[20px] font-medium text-[#344054] mb-2 mt-3">
                          Phone number
                        </label>

                        <input
                          type="text"
                          placeholder="+91 9999999999"
                          name="phone_number"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^\d{0,10}$/;
                            if (regex.test(inputValue)) {
                              setFieldTouched("phone_number", true, true);
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          value={values.phone_number}
                        />

                        <div className="text-red-500 mb-1">
                          {errors.phone_number &&
                            touched.phone_number &&
                            errors.phone_number}
                        </div>
                      </div>
                      <div className="grid">
                        <label className="text-[20px] font-medium text-[#344054] mb-2 mt-3">
                          Emergency phone number
                        </label>

                        <input
                          type="text"
                          placeholder="+91 9999999999"
                          name="emergency_number"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[19px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^\d{0,10}$/;
                            if (regex.test(inputValue)) {
                              setFieldTouched("emergency_number", true, true);
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          value={values.emergency_number}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.emergency_number &&
                            touched.emergency_number &&
                            errors.emergency_number}
                        </div>
                      </div>
                    </div>
                    <span>
                      <label className="text-[20px] font-medium text-[#344054] mb-2 mt-3">
                        Supervisor photo
                      </label>
                      <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-3">
                        <input
                          type="file"
                          className="absolute outline-none w-full top-10 mx-auto opacity-0"
                          name="supervisor_photo"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // value={values.supervisor_photo}
                        />
                        <img
                          src="/images/FeaturedIcon.svg"
                          alt="uploadimg"
                          className="w-20 h-20 mx-auto mb-6"
                        />
                        {values.supervisor_photo ? (
                          <p className="text-[18px] text-[#475467] text-center w-full">
                            {values.supervisor_photo}
                          </p>
                        ) : (
                          <p className="text-[18px] text-[#475467] text-center w-full">
                            <span className="text-[18px] text-[#2D66F4]">
                              Click to upload
                            </span>{" "}
                            or drag and drop SVG, PNG, JPG or GIF (max.
                            800x400px)
                          </p>
                        )}
                      </div>

                      <div className="text-red-500 mb-2">
                        {errors.supervisor_photo &&
                          touched.supervisor_photo &&
                          errors.supervisor_photo}
                      </div>
                    </span>

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
                        {isEdit && isEdit.supervisor_id
                          ? "Edit Supervisor profile"
                          : "Create Supervisor profile"}
                      </span>
                      <IoClose
                        className="text-[#667085] text-[30px] hover:bg-lightBlue-100 hover:rounded-md"
                        onClick={handleClose}
                      />
                    </div>
                    {/* <div className="lg:grid grid-cols-2 gap-5"> */}
                    {/* <div className="grid">
                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Employee ID
                        </label>
                        <input
                          type="text"
                          placeholder="11###1"
                          name="employeeid"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.employeeid}
                        />
                        <div className="text-red-500 mb-1">
                          {errors.employeeid &&
                            touched.employeeid &&
                            errors.employeeid}
                        </div>
                      </div> */}
                    {/* <div className="grid">
                      <label className="text-[22px] font-medium text-[#344054] mb-3">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        placeholder="DD/MM/YYYY"
                        name="dateofbirth"
                        className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                        onChange={(e) => {
                          // const inputValue = e.target.value;
                          // if (inputValue <= new Date()) {
                          //   setFieldTouched("firstname", true, true);
                          // handleChange(e);
                          // }
                          const selectedDate = new Date(values.dateofbirth);
                          const currentDate = new Date();

                          if (selectedDate > currentDate) {
                            // setErrors({
                            //   dateofbirth:
                            //     "Please select a past or present date",
                            // });
                            setFieldTouched("dateofbirth", true, true);
                            handleChange(e);
                          }
                        }}
                        onBlur={handleBlur}
                        value={values.dateofbirth}
                      />

                   

                      <div className="text-red-500 mb-1">
                        {errors.dateofbirth &&
                          touched.dateofbirth &&
                          errors.dateofbirth}
                      </div>
                    </div> */}

                    <div className="grid">
                      <label className="text-[22px] font-medium text-[#344054] mb-3">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        name="dateofbirth"
                        className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                        onChange={(e) => {
                          const selectedDate = new Date(e.target.value);
                          const currentDate = new Date();
                          const minDate = new Date(
                            currentDate.getFullYear() - 18,
                            currentDate.getMonth(),
                            currentDate.getDate()
                          );

                          if (selectedDate > currentDate) {
                            alert(
                              "Please select a date in the past or present."
                            );
                          } else if (selectedDate > minDate) {
                            alert("You must be at least 18 years old.");
                          } else {
                            handleChange(e);
                          }
                        }}
                        onBlur={handleBlur}
                        value={values.dateofbirth}
                      />
                      <div className="text-red-500 mb-1">
                        {errors.dateofbirth &&
                          touched.dateofbirth &&
                          errors.dateofbirth}
                      </div>
                    </div>

                    {/* </div> */}

                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Address line 1
                    </label>
                    {/* <input
                      type="text"
                      placeholder="House no/Building name"
                      name="address_line1"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address_line1}
                    /> */}
                    {/* 
                    <input
                      type="text"
                      placeholder="Road/Area"
                      name="address_line1"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const regex = /^[a-zA-Z0-9\s]{0,50}$/;

                        if (regex.test(inputValue)) {
                          setFieldTouched("address_line1", true, true);
                          handleChange(e);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.address_line1}
                    /> */}

                    <input
                      type="text"
                      placeholder="Road/Area"
                      name="address_line1"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const regex = /^[a-zA-Z0-9\s-,./s]{0,70}$/;

                        if (regex.test(inputValue)) {
                          setFieldTouched("address_line1", true, true);
                          handleChange(e);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.address_line1}
                    />

                    <div className="text-red-500 mb-1">
                      {errors.address_line1 &&
                        touched.address_line1 &&
                        errors.address_line1}
                    </div>
                    <label className="text-[22px] font-medium text-[#344054] mb-3">
                      Address line 2
                    </label>
                    <input
                      type="text"
                      placeholder="Road/Area"
                      name="address_line2"
                      className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const regex = /^[a-zA-Z0-9\s-,./s]{0,70}$/;

                        if (regex.test(inputValue)) {
                          setFieldTouched("address_line1", true, true);
                          handleChange(e);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.address_line2}
                    />
                    <div className="text-red-500 mb-1">
                      {errors.address_line2 &&
                        touched.address_line2 &&
                        errors.address_line2}
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
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]*$/;
                            if (
                              inputValue.length <= 40 &&
                              regex.test(inputValue)
                            ) {
                              setFieldTouched("firstname", true, true);
                              handleChange(e);
                            }
                          }}
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
                        {/* <input
                          type="number"
                          placeholder="000000"
                          name="pincode"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.pincode}
                        /> */}

                        <input
                          type="text"
                          placeholder="000000"
                          name="pincode"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            setFieldTouched("pincode", true, true);
                            const input = e.target.value.replace(/\D/g, "");
                            const limitedInput = input.slice(0, 6);
                            setFieldValue("pincode", limitedInput);
                          }}
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
                        {/* <input
                          type="text"
                          placeholder="Ex. Mumbai"
                          name="city"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        /> */}
                        <input
                          type="text"
                          placeholder="Ex. Surat"
                          name="city"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]{0,30}$/;

                            if (regex.test(inputValue)) {
                              setFieldTouched("city", true, true);
                              handleChange(e);
                            }
                          }}
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
                        {/* <input
                          type="text"
                          name="state"
                          placeholder="Ex. Maharashtra"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                        /> */}
                        <input
                          type="text"
                          placeholder="Ex. Benglore"
                          name="state"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]{0,15}$/;

                            if (regex.test(inputValue)) {
                              setFieldTouched("state", true, true);
                              handleChange(e);
                            }
                          }}
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
                        {/* <input
                          type="text"
                          placeholder="india"
                          name="country"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.country}
                        /> */}

                        <input
                          type="text"
                          placeholder="india"
                          name="country"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            const regex = /^[a-zA-Z\s]{0,20}$/;

                            if (regex.test(inputValue)) {
                              setFieldTouched("state", true, true);
                              handleChange(e);
                            }
                          }}
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
                        {/* <input
                          type="date"
                          placeholder="DD/MM/YY"
                          name="joining_date"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.joining_date}
                        /> */}

                        {/* <input
                          type="date"
                          name="joining_date"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            const currentDate = new Date();
                            if (selectedDate > currentDate) {
                              alert(
                                "Please select a date in the past or present."
                              );
                            } else {
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          value={values.joining_date}
                        /> */}

                        <input
                          type="date"
                          name="joining_date"
                          className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            const currentDate = new Date();
                            const futureDate = new Date();
                            futureDate.setDate(currentDate.getDate() + 15); // Allow 15 days in the future

                            if (selectedDate > futureDate) {
                              alert(
                                "Please select a date within the next 15 days."
                              );
                            } else {
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          value={values.joining_date}
                        />

                        <div className="text-red-500 mb-1">
                          {errors.joining_date &&
                            touched.joining_date &&
                            errors.joining_date}
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
                        {isEdit && isEdit.supervisor_id
                          ? "Edit Supervisor"
                          : "Create Supervisor"}
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
