import { useSpring, animated } from "react-spring";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import loginIllustration from "./images/login-illustration.svg"; // Import the SVG illustration
import { Button, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function LoginPage() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values: any) => {
    // Simulate a login process (replace with actual authentication logic)
    // const { email, password } = values;
    console.log("Login successful", values);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="min-h-screen bg-D19650 bg-opacity-100 flex justify-center items-center">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-lg pointer-events-none z-10"></div>
      <animated.div
        style={fadeIn}
        className="bg-white p-4 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[50%] xl:w-[40%] relative z-20"
      >
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:w-1/3">
          <img
            src={loginIllustration}
            alt="Login Illustration"
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
            Welcome Back!
          </h2>
          <p className="text-gray-600 mb-2 text-center">
            Login to your e-commerce account:
          </p>
          <div className="flex justify-center max-sm:mb-3">
            <button className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <FacebookIcon />
            </button>
            <button className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
              <GoogleIcon />
            </button>
          </div>
          <p className="text-gray-600 mb-2 text-center">
            Or login with your email:
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
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
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-D19650  focus:ring-opacity-50 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
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
              <Button
                color="primary"
                type="submit"
                variant="contained"
                fullWidth
              >
                Log in
              </Button>
            </Form>
          </Formik>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-D19650 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </animated.div>
    </div>
  );
}

export default LoginPage;
