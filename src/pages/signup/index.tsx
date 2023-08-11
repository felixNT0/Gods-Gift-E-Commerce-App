import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import signupIllustration from "./images/signup-illustration.svg"; // Import the SVG illustration
import { Button, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

function SignupPage() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const initialValues = {
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const [step, setStep] = useState(1);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onSubmit = (values: any, { setSubmitting }: any) => {
    // Simulate a signup process (replace with actual signup logic)
    console.log("Signup successful:", values);

    // setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const handleContinue = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen  bg-D19650 bg-opacity-100 flex justify-center items-center">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-lg pointer-events-none z-10"></div>
      <animated.div
        style={fadeIn}
        className="bg-white p-4 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[50%] xl:w-[40%] relative z-20"
      >
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:w-1/3">
          <img
            src={signupIllustration}
            alt="Signup Illustration"
            width="200"
            height="100%"
            className="h-full mx-auto"
          />
        </div>
        <Divider
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          flexItem
        />
        <div className="md:w-2/3 max-sm:mt-2 md:ml-7">
          <h2 className="text-2xl font-semibold text-D19650 mb-4 text-center">
            Are you new here
          </h2>
          <p className="text-gray-600 mb-2 text-center">
            Create your e-commerce account:
          </p>
          <div className="flex justify-center max-sm:mb-3">
            <button className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <FacebookIcon />
            </button>
            <button className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
              <GoogleIcon />
            </button>
          </div>
          <p className="text-gray-600 mb-4 mt-2 text-center">
            Or Create account with your details:
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {step === 2 && (
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 focus:ring-opacity-50 focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="mt-1  text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 focus:ring-opacity-50 focus:outline-none"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={handleContinue}
                    >
                      Continue
                    </Button>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="mt-1  text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 focus:ring-opacity-50 focus:outline-none"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="mt-1  text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 focus:ring-opacity-50 focus:outline-none"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={handleContinue}
                    >
                      Continue
                    </Button>
                  </div>
                )}
                {step === 3 && (
                  <>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          type={passwordVisible ? "text" : "password"}
                          id="password"
                          name="password"
                          className="mt-1 text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 focus:ring-opacity-50 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                        >
                          {passwordVisible ? (
                            <VisibilityOffIcon className="text-D19650" />
                          ) : (
                            <VisibilityIcon className="text-D19650" />
                          )}
                        </button>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Field
                          type={passwordVisible2 ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          className="mt-1 text-black p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650 :ring-opacity-50 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility2}
                          className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                        >
                          {passwordVisible2 ? (
                            <VisibilityOffIcon className="text-D19650" />
                          ) : (
                            <VisibilityIcon className="text-D19650" />
                          )}
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Create Account
                    </Button>
                  </>
                )}
              </Form>
            )}
          </Formik>
          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-D19650 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </animated.div>
    </div>
  );
}

export default SignupPage;
