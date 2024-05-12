import { Modal } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import validate from "../../app/common/Validation";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  createSiteAsync,
  getSiteSupervisorListAsync,
  selectSiteSupervisorList,
  selectSiteSupervisorStatus,
  updateSiteAsync,
} from "../../features/siteSlice";
import Button from "../Comman/Buttons/Button";
import { FaLocationDot } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const supervisorDataForId = [
  {
    supervisor_id: "bb1c",
    firstname: "oeireyirw",
    lastname: "sdfmnbds",
  },
  {
    supervisor_id: "66b4",
    firstname: "Piyushabhai",
    lastname: "sarvaiya",
  },
  {
    supervisor_id: "e40b",
    firstname: "sgr",
    lastname: "sarvaiya",
  },
  {
    supervisor_id: "0568",
    firstname: "sgr",
    lastname: "kartiksinh",
  },
  {
    supervisor_id: "29d3",
    firstname: "Piyushabhai",
    lastname: "sarvaiya",
  },
];
export default function CreateSiteModel({
  openSiteModel,
  setOpenSiteModel,
  sendToEditSiteDate,
}) {
  const dispatch = useDispatch();

  const SiteSupervisorList = useSelector(selectSiteSupervisorList);
  const SiteSupervisorStatus = useSelector(selectSiteSupervisorStatus);

  // const formik = useFormikContext();

  const [createTab, setCreateTab] = useState(0);
  const [changeTab, setchangeTab] = useState(true);
  const [isEdit, setIsEdit] = useState({});
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [formikinItialValues, setformikinItialValues] = useState({
    site_name: "",
    supervisor_id: "",
    site_photo: "",
    address_line1: "",
    pincode: "",
    city: "",
    state: "",
    contry: "",
    longitude: "",
    latitude: "",
  });
  const handalCreateSite = (values) => {
    if (isEdit && isEdit.site_id) {
      dispatch(updateSiteAsync({ id: isEdit.site_id, values: values }));
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
    setSelectedFiles([]);
    // formik.setValues({});
  };

  useEffect(() => {
    if (sendToEditSiteDate && sendToEditSiteDate.site_id) {
      setIsEdit(sendToEditSiteDate);
      setformikinItialValues(sendToEditSiteDate);
      setchangeTab(false);
    }
  }, [sendToEditSiteDate]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setPosition((pre) => ({ ...pre, latitude: p.coords.latitude }));
      setPosition((pre) => ({ ...pre, longitude: p.coords.longitude }));
    });
  }, []);

  // File uplod

  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setSelectedFiles((prevFiles) => [...prevFiles, ...imageFiles]);
    setFieldValue("site_photo", event.target.value);
  };

  const removeFile = (index, setFieldValue) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    const updatedFiles = selectedFiles.filter((file, i) => i !== index);
    setFieldValue("site_photo", "");
  };

  const calculateTotalSize = () => {
    let totalSize = 0;
    selectedFiles.forEach((file) => {
      totalSize += file.size;
    });
    return totalSize;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <Modal
      open={openSiteModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[90vw] sm:w-[35rem] lg:w-[52rem] mx-auto my-2 overflow-auto h-full">
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
                  setchangeTab(false);
                } else {
                  setchangeTab(true);
                }
                return errors;
              }
              if (createTab === 1) {
                let errors = validate(values, "createSite1");
                return errors;
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
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
              setFieldTouched,
            }) => (
              <form onSubmit={handleSubmit}>
                {createTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        {isEdit.site_id ? "Edit site" : "Create site"}
                      </span>
                      <IoClose
                        className="text-[#667085] text-[30px] hover:bg-lightBlue-100 hover:rounded-md"
                        onClick={handleClose}
                      />
                    </div>

                    {/* Site Name */}
                    <>
                      <label
                        htmlFor="fileInput"
                        className="text-[22px] font-medium text-[#344054] mb-2"
                      >
                        Site Name
                      </label>
                      <input
                        type="text"
                        name="site_name"
                        placeholder="Site name"
                        className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const regex = /^[a-zA-Z\s]*$/;
                          if (
                            inputValue.length <= 30 &&
                            regex.test(inputValue)
                          ) {
                            setFieldTouched("site_name", true, true);
                            handleChange(e);
                          }
                        }}
                        onBlur={handleBlur}
                        value={values?.site_name || ""}
                      />
                      <div className="text-red-500 mb-1">
                        {errors.site_name &&
                          touched.site_name &&
                          errors.site_name}
                      </div>
                    </>

                    {/* Supervisor Name  */}
                    <>
                      <label
                        htmlFor="supervisor_id"
                        className="text-[22px] font-medium text-[#344054] mb-2"
                      >
                        Supervisor Name
                      </label>
                      <Autocomplete
                        disablePortal
                        disableClearable
                        sx={{ width: "full" }}
                        style={{
                          border: "1px solid #D0D5DD ",
                          borderRadius: "6px",
                        }}
                        name="supervisor_id"
                        id="supervisor_id"
                        options={SiteSupervisorList}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, value) => {
                          setFieldTouched("supervisor_id", true, true);
                          setFieldValue("supervisor_id", value?.id || "");
                        }}
                        value={
                          SiteSupervisorList.find(
                            (option) => option.id === values?.supervisor_id
                          ) || null
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputLabelProps={{
                              shrink: false,
                            }}
                            focused={true}
                            placeholder="Select Supervisor"
                            sx={{
                              "& .MuiInputBase-input": {
                                border: "none", // Remove border from the input
                              },
                              "& .Mui-focused": {
                                "& .MuiInputBase-input": {
                                  border: "none", // Remove border when focused
                                },
                              },
                            }}
                          />
                        )}
                      />

                      <div className="text-red-500 mb-1">
                        {errors.supervisor_id &&
                          touched.supervisor_id &&
                          errors.supervisor_id}
                      </div>
                    </>

                    {/* Site photo */}
                    <>
                      <label
                        htmlFor="fileInput"
                        className="text-[22px] font-medium text-[#344054] mb-2"
                      >
                        Site photo
                      </label>
                      <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-10">
                        <label htmlFor="fileInput" className="cursor-pointer">
                          <input
                            type="file"
                            id="fileInput"
                            name="site_photo"
                            className="absolute outline-none w-full top-10 mx-auto opacity-0"
                            // onChange={handleChange}
                            onChange={(e) => handleFileChange(e, setFieldValue)}
                            onBlur={handleBlur}
                            multiple
                            accept="image/*"
                          />

                          <img
                            src="/images/FeaturedIcon.svg"
                            alt="uploadimg"
                            className="w-20 h-20 mx-auto mb-6"
                          />
                          <p className="text-[18px] text-[#475467] text-center w-full">
                            {selectedFiles.length > 0 ? (
                              <span className="text-[18px] text-[#2D66F4]">
                                Files selected
                              </span>
                            ) : (
                              <span className="text-[18px] text-[#2D66F4]">
                                Click to upload
                              </span>
                            )}{" "}
                            or drag and drop SVG, PNG, JPG or GIF (max.
                            800x400px)
                          </p>
                          {selectedFiles.length > 0 && (
                            <p className="text-[18px] text-[#475467] text-center w-full">
                              Total size: {formatFileSize(calculateTotalSize())}
                            </p>
                          )}
                        </label>
                        <div className="bg-gray-100 z-10 rounded-xl">
                          {selectedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="relative inline-block mx-2 mt-2"
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`uploaded-${index}`}
                                className="w-20 h-20 mx-auto cursor-pointer rounded-lg"
                                onClick={() => removeFile(index, setFieldValue)}
                              />
                              <button
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                                onClick={() => removeFile(index, setFieldValue)}
                              >
                                x
                              </button>
                            </div>
                          ))}
                          <div className="text-red-500 mb-1">
                            {errors.site_photo &&
                              touched.site_photo &&
                              errors.site_photo}
                          </div>
                        </div>
                      </div>
                    </>

                    {/* button  */}
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
                            {isEdit.site_id ? "Edit site" : "Create site"}
                          </span>
                          <IoClose
                            className="text-[#667085] text-[30px] hover:bg-lightBlue-100 hover:rounded-md"
                            onClick={handleClose}
                          />
                        </div>

                        <label className="text-[22px] font-medium text-[#344054] mb-3">
                          Address Line
                        </label>
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
                        <div className="lg:grid grid-cols-2 gap-5">
                          <div className="grid">
                            <label className="text-[22px] font-medium text-[#344054] mb-3">
                              Pin Code
                            </label>
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
                              placeholder="Ex. Benglore"
                              name="city"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const regex = /^[a-zA-Z\s]{0,25}$/;

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
                            <input
                              type="text"
                              placeholder="Ex. Karnataka"
                              name="state"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              // onChange={(e) => {
                              //   setFieldTouched("state", true, true);
                              //   handleChange(e);
                              // }}

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
                              Contry
                            </label>
                            <input
                              type="text"
                              placeholder="India"
                              name="contry"
                              className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-0"
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const regex = /^[a-zA-Z\s]{0,20}$/;
                                if (regex.test(inputValue)) {
                                  setFieldTouched("contry", true, true);
                                  handleChange(e);
                                }
                              }}
                              onBlur={handleBlur}
                              value={values.contry}
                            />
                            <div className="text-red-500 mb-1">
                              {errors.contry && touched.contry && errors.contry}
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
                              // onChange={handleChange}
                              onChange={(e) => {
                                setFieldTouched("longitude", true, true);
                                handleChange(e);
                              }}
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
                              onChange={(e) => {
                                setFieldTouched("latitude", true, true);
                                handleChange(e);
                              }}
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
                            onClick={async () => {
                              await setFieldValue(
                                "longitude",
                                position?.longitude
                              );
                              await setFieldValue(
                                "latitude",
                                position?.latitude
                              );
                            }}
                            className="bg-slate-300 rounded-xl px-3 py-1 w-fit flex justify-center items-center"
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
                            type={"submit"}
                            disabled={isSubmitting}
                          >
                            {isEdit.site_id ? "Edit site" : "Create site"}
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
