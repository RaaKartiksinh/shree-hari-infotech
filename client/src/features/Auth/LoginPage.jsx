import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Button from "../../components/Comman/Buttons/Button";
import CommentLink from "../../components/Comman/Buttons/CommentLink";
import validate from "../../app/common/Validation";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdminAsync,
  selectAdminError,
  selectLoggedInUserToken,
} from "./authSlice";
import CommonSnackbar from "../../components/Snackbar/SnackbarPopup";

export default function LoginPage() {
  const dispatch = useDispatch();
  const isAdminAvailable = useSelector(selectLoggedInUserToken);
  const isAdminError = useSelector(selectAdminError);

  const loginAdmin = async (values) => {
    try {
      let k = dispatch(loginAdminAsync(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAdminError && <CommonSnackbar type="error" message={isAdminError} />}
      {isAdminAvailable && <Navigate to={"/"} replace={true}></Navigate>}
      {isAdminAvailable && (
        <CommonSnackbar
          type="success"
          message={`Welcome ${isAdminAvailable.email}`}
        />
      )}

      <div
        className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8  "
        style={{ height: "100vh" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white px-8 py-1  rounded-3xl">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              return validate(values, "login");
            }}
            onSubmit={(values, { setSubmitting }) => {
              loginAdmin(values);
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
                  sign In
                </h1>
                <span className="mt-3 text-sm text-gray-400">
                  Exclusive Access: Admin Sign-In Only
                </span>

                <div className="mt-4">
                  <Link
                    to="##"
                    className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-400 hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 "
                  >
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <span className="mx-2  ">Sign in with Google</span>
                  </Link>
                </div>

                <p
                  className="loginAfterandBefor mt-4 text-center text-gray-600 dark:text-gray-400"
                  id="loginAfterandBefor"
                >
                  or
                </p>

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
                    name="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-900 focus:border-gray-300 dark:focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div className="text-red-500 mt-1">
                  {errors.email && touched.email && errors.email}
                </div>
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-900 focus:border-gray-300 dark:focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <div className="text-red-500 mt-1 ">
                  {errors.password && touched.password && errors.password}
                </div>
                <div className=" p-0 -my-1 mb-2 flex justify-start ">
                  <CommentLink to="/forgot-password">
                    <span className=" text-sm mx-2  hover:me-5  transition-all p-0 m-0">
                      Forgot Password
                    </span>
                    <MdOutlineDriveFileRenameOutline />
                  </CommentLink>
                </div>

                <div className="mt-6 mb-4">
                  <Button type="submit" disabled={isSubmitting}>
                    Sign in
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md px-8 py-1 mt-4  rounded-3xl ">
          <CommentLink to="/signup">
            <span className="mx-2 hover:mx-5  transition-all">
              Don’t have an account yet? Sign up
            </span>
            <FaArrowRightLong />
          </CommentLink>
        </div>
      </div>
    </>
  );
}
