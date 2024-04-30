// // // components/Sidebar.tsx
// // import React from "react";
// // import cn from "classnames";
// // import {
// //   ChevronDoubleLeftIcon,
// //   ChevronDoubleRightIcon,
// // } from "@heroicons/react/24/outline";
// // import { defaultNavItems, NavItem } from "./defaultNavItems";

// // // 👇 props to get and set the collapsed state from parent component

// // const Sidebar = ({ collapsed, setCollapsed, navItems = defaultNavItems }) => {
// //   // 👇 use the correct icon depending on the state.
// //   const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
// //   return (
// //     <div
// //       className={cn({
// //         "bg-indigo-700 text-zinc-50 z-20": true,
// //       })}
// //     >
// //       <div
// //         className={cn({
// //           "flex flex-col justify-between": true,
// //         })}
// //       >
// //         {/* logo and collapse button */}
// //         <div
// //           className={cn({
// //             "flex items-center border-b border-b-indigo-800": true,
// //             "p-4 justify-between": !collapsed,
// //             "py-4 justify-center": collapsed,
// //           })}
// //         >
// //           {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
// //           <button
// //             className={cn({
// //               "grid place-content-center": true, // position
// //               "hover:bg-indigo-800 ": true, // colors
// //               "w-10 h-10 rounded-full": true, // shape
// //             })}
// //             // 👇 set the collapsed state on click
// //             onClick={() => setCollapsed(!collapsed)}
// //           >
// //             <Icon className="w-5 h-5" />
// //           </button>
// //         </div>

// //         <nav className="flex-grow">
// //           <ul
// //             className={cn({
// //               "my-2 flex flex-col gap-2 items-stretch": true,
// //             })}
// //           >
// //             {navItems.map((item, index) => {
// //               return (
// //                 <li
// //                   key={index}
// //                   className={cn({
// //                     "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
// //                     "transition-colors duration-300": true, //animation
// //                     "rounded-md p-2 mx-3 gap-4 ": !collapsed,
// //                     "rounded-full p-2 mx-3 w-10 h-10": collapsed,
// //                   })}
// //                 >
// //                   <a href={item.href} className="flex gap-2">
// //                     {item.icon} <span>{!collapsed && item.label}</span>
// //                   </a>
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </nav>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Sidebar;

// // // me
// // // import { defaultNavItems, NavItem } from "./defaultNavItems";

// // // import React from "react";
// // // import cn from "classnames";
// // // import {
// // //   ChevronDoubleLeftIcon,
// // //   ChevronDoubleRightIcon,
// // // } from "@heroicons/react/24/outline";
// // // import { defaultNavItems, NavItem } from "./defaultNavItems";
// // // // add NavItem prop to component prop

// // // const Sidebar = ({ collapsed, navItems = defaultNavItems, setCollapsed }) => {
// // //   const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
// // //   return (
// // //     <div
// // //       className={cn({
// // //         "bg-indigo-700 text-zinc-50 z-20": true,
// // //         "transition-all duration-300 ease-in-out": true,
// // //       })}
// // //     >
// // //       <div
// // //         className={cn({
// // //           "flex flex-col justify-between ": true,
// // //           "h-full": true,
// // //         })}
// // //       >
// // //         {/* logo and collapse button */}
// // //         {/* ...ommitted for brevity */}
// // //         {/* nav items part */}
// // //         <nav className="flex-grow">
// // //           <ul
// // //             className={cn({
// // //               "my-2 flex flex-col gap-2 items-stretch": true,
// // //             })}
// // //           >
// // //             {navItems.map((item, index) => {
// // //               return (
// // //                 <li
// // //                   key={index}
// // //                   className={cn({
// // //                     "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
// // //                     "transition-colors duration-300": true, //animation
// // //                     "rounded-md p-2 mx-3 gap-4 ": !collapsed,
// // //                     "rounded-full p-2 mx-3 w-10 h-10": collapsed,
// // //                   })}
// // //                 >
// // //                   <a href={item.href} className="flex gap-2">
// // //                     {item.icon} <span>{!collapsed && item.label}</span>
// // //                   </a>
// // //                 </li>
// // //               );
// // //             })}
// // //           </ul>
// // //         </nav>
// // //         {/* profile part ...omitted for brevity */}
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default Sidebar;

// // {
// //   "name": "client",
// //   "version": "0.1.0",
// //   "private": true,
// //   "dependencies": {
// //     "@headlessui/react": "^1.7.18",
// //     "@heroicons/react": "^2.1.3",
// //     "@material-tailwind/react": "^2.1.9",
// //     "@reduxjs/toolkit": "^1.9.7",
// //     "@testing-library/jest-dom": "^5.17.0",
// //     "@testing-library/react": "^13.4.0",
// //     "@testing-library/user-event": "^14.5.2",
// //     "formik": "^2.4.5",
// //     "heroicons-react": "^1.4.1",
// //     "react": "^18.2.0",
// //     "react-dom": "^18.2.0",
// //     "react-icons": "^5.0.1",
// //     "react-redux": "^8.1.3",
// //     "react-router-dom": "^6.22.3",
// //     "react-scripts": "^3.0.1",
// //     "web-vitals": "^2.1.4"
// //   },
// //   "scripts": {
// //     "start": "react-scripts start",
// //     "dev": "react-scripts --openssl-legacy-provider start",
// //     "build": "react-scripts build",
// //     "test": "react-scripts test",
// //     "eject": "react-scripts eject"
// //   },
// //   "eslintConfig": {
// //     "extends": [
// //       "react-app",
// //       "react-app/jest"
// //     ]
// //   },
// //   "browserslist": {
// //     "production": [
// //       ">0.2%",
// //       "not dead",
// //       "not op_mini all"
// //     ],
// //     "development": [
// //       "last 1 chrome version",
// //       "last 1 firefox version",
// //       "last 1 safari version"
// //     ]
// //   },
// //   "devDependencies": {
// //     "tailwindcss": "^3.4.3"
// //   }
// // }

// <Formik
//   initialValues={{ sitename: "", siteid: "", sitephoto: "" }}
//   // validationSchema={}
//   onSubmit={(values, { setSubmitting }) => {
//     console.log("Form submitted:", values);
//     // Perform form submission logic here
//     // setSubmitting(false); // Make sure to set submitting to false when done
//   }}
// >
//   {({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isSubmitting,
//   }) => (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col">
//         <div className="flex items-center justify-between mb-8">
//           <span className="text-[#101828] text-[26px] font-semibold">
//             Create Site
//           </span>
//           <IoClose className="text-[#667085] text-[34px]" onClick={onClose} />
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site name
//         </label>
//         <input
//           type="text"
//           name="sitename"
//           placeholder="Site name"
//           className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.sitename}
//         />
//         <div className="text-red-500 mb-1">
//           {errors.sitename && touched.sitename && errors.sitename}
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site ID
//         </label>
//         <input
//           type="number"
//           name="siteid"
//           placeholder="Site id"
//           className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.siteid}
//         />
//         <div className="text-red-500 mb-1">
//           {errors.siteid && touched.siteid && errors.siteid}
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site photo
//         </label>
//         <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-10">
//           <input
//             type="file"
//             name="sitephoto"
//             className="absolute outline-none w-full top-10 mx-auto opacity-0"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.sitephoto}
//           />
//           <img
//             src="/images/FeaturedIcon.svg"
//             alt="uploadimg"
//             className="w-20 h-20 mx-auto mb-6"
//           />
//           <p className="text-[18px] text-[#475467] text-center w-full">
//             <span className="text-[18px] text-[#2D66F4]">Click to upload</span>{" "}
//             or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
//           </p>
//         </div>
//         <div className="text-red-500 mb-1">
//           {errors.sitephoto && touched.sitephoto && errors.sitephoto}
//         </div>
//         <div className="flex justify-end gap-5">
//           <button
//             className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
//             onClick={onClose}
//           >
//             Back
//           </button>
//           <button
//             className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
//             type="submit"
//             disabled={isSubmitting}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </form>
//   )}
// </Formik>;


//   <Formik
//   initialValues={{ sitename: "", siteid: "", sitephoto: "" }}
//   validate={(values) => {
//     // console.log(values);
//     return validate(values, "createSite");
//   }}
//   // onSubmit={(values, { setSubmitting }) => {
//   //   console.log(setSubmitting, "setSubmitting");
//   //   console.log(values, "values");
//   //   // setCreateTab(1);
//   //   // onClick={() => setCreateTab(1)}
//   // }}
//   onSubmit={(values, { setSubmitting }) => {
//     console.log("Form submitted:", values);
//     // Perform form submission logic here
//     // setSubmitting(false); // Make sure to set submitting to false when done
//   }}
// >
//   {({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isSubmitting,
//   }) => (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col">
//         <div className="flex items-center justify-between mb-8">
//           <span className="text-[#101828] text-[26px] font-semibold">
//             Create Site
//           </span>
//           <IoClose
//             className="text-[#667085] text-[34px]"
//             onClick={onClose}
//           />
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site name
//         </label>
//         <input
//           type="text"
//           name="sitename"
//           placeholder="Site name"
//           className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.sitename}
//         />
//         <div className="text-red-500 mb-1">
//           {errors.sitename && touched.sitename && errors.sitename}
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site ID
//         </label>
//         <input
//           type="number"
//           name="siteid"
//           placeholder="Site id"
//           className="border-[#D0D5DD] rounded-xl outline-none p-4 text-[20px] mb-5"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.siteid}
//         />
//         <div className="text-red-500 mb-1">
//           {errors.siteid && touched.siteid && errors.siteid}
//         </div>
//         <label className="text-[22px] font-meduim text-[#344054] mb-3">
//           Site photo
//         </label>
//         <div className="relative border border-[#D0D5DD] rounded-2xl p-5 mb-10">
//           <input
//             type="file"
//             name="sitephoto"
//             className="absolute outline-none w-full top-10 mx-auto opacity-0"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.sitephoto}
//           />
//           <img
//             src="/images/FeaturedIcon.svg"
//             alt="uploadimg"
//             className="w-20 h-20 mx-auto mb-6"
//           />
//           <p className="text-[18px] text-[#475467] text-center w-full">
//             <span className="text-[18px] text-[#2D66F4]">
//               Click to upload
//             </span>{" "}
//             or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
//           </p>
//         </div>
//         <div className="text-red-500 mb-1">
//           {errors.sitephoto && touched.sitephoto && errors.sitephoto}
//         </div>
//         <div className="flex justify-end gap-5">
//           <button
//             className="text-[#344054] text-[20px] border border-[#D0D5DD] rounded-lg px-6 py-3"
//             onClick={onClose}
//           >
//             Back
//           </button>
//           <button
//             className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
//             // onClick={() => setCreateTab(1)}
//             // onClick={handleSubmit}
//             type="submit"
//             disabled={isSubmitting}
//           >
//             Next
//           </button>
//           <button
//             className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
//             type="submit"
//             disabled={isSubmitting}
//           >
//             Next
//           </button>

//           {/* <Button type="submit" disabled={isSubmitting}>
//               Sign in
//             </Button> */}
//         </div>
//       </div>
//     </form>
//   )}
// </Formik>



import { Box, Button, Modal } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import validate from "../../app/common/Validation";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createSiteAsync } from "../../features/siteSlice";

export default function CreateSiteModel({ openSiteModel, setOpenSiteModel }) {
  const dispatch = useDispatch();

  const [createTab, setCreateTab] = useState(0);
  const [siteData, setSiteData] = useState({});

  const handalCreateSite = (values) => {
    dispatch(createSiteAsync(values));
    handleClose();
  };

  const handleNextTab = () => {
    setCreateTab(1);
  };

  const handleClose = () => {
    setCreateTab(0);
    setOpenSiteModel(false);
  };

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
              if (
                errors.addressline1 &&
                errors.apartmentname &&
                errors.city &&
                errors.country &&
                errors.houseno &&
                errors.latitude &&
                errors.longitude &&
                errors.addressline1 &&
                errors.state &&
                !errors.sitename &&
                !errors.siteid &&
                !errors.sitephoto &&
                createTab === 0
              ) {
                setSiteData(values);
                setCreateTab(1);
                errors = {};
              } else {
                return errors;
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form submitted:", values);
              handalCreateSite(values);
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
                {createTab === 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Create site
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
                        // type={createTab === 0 ? "submit" : "button"} // Conditionally set the type attribute
                        // disabled={isSubmitting}
                        onClick={(e) => handleNextTab(e)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {createTab === 1 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#101828] text-[26px] font-semibold">
                        Create site
                      </span>
                      <IoClose
                        className="text-[#667085] w-[26px] h-[26px]"
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
                        onClick={() => setCreateTab(0)}
                      >
                        Back
                      </button>
                      <button
                        className="text-[white] text-[20px] bg-[#2D66F4] rounded-lg px-6 py-3"
                        type={createTab === 1 ? "submit" : "button"}
                        disabled={isSubmitting}
                      >
                        Create site
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
}
