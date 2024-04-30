import React from "react";
import CommentLink from "../../components/Comman/Buttons/CommentLink";
import Button from "../../components/Comman/Buttons/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { Formik } from "formik";
import validate from "../../app/common/Validation";

export default function ForgotPassword() {
  return (
    <div
      className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8  "
      style={{ height: "100vh" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white px-8 py-1  rounded-3xl">
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            console.log(values);

            return validate(values, "forgotPassword");
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
            <form className="w-full max-w-md  " onSubmit={handleSubmit}>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-black">
                Forgot Password
              </h1>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-900 focus:border-gray-300 dark:focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="text-red-500 pt-2">
                {errors.email && touched.email && errors.email}{" "}
              </div>

              <div className=" p-0 -my-1 mb-0 flex justify-end ">
                <CommentLink to="/login">
                  <IoArrowBackSharp />
                  <span className="mx-2 hover:ms-5  transition-all">
                    Back To Login
                  </span>
                </CommentLink>
              </div>

              <div className="mt-6 mb-4">
                <Button type="submit" disabled={isSubmitting}>
                  {" "}
                  Continue
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm px-8 py-1 mt-5  rounded-3xl   bg-slate-300">
        <CommentLink to="/signup">
          <span className="mx-2 hover:mx-5  transition-all">
            Don’t have an account yet? Sign up
          </span>
          <FaArrowRightLong />
        </CommentLink>
      </div>
    </div>
  );
}
