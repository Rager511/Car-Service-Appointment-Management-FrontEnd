import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

const LOGIN_URL = "http://localhost:8080/auth/login";

function Basic() {
  const { setAuth } = useAuth();
  const [loginError, setLoginError] = useState(false); // State to track login errors

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters long")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    // Perform custom form field validation using the values
    if (!values.email) {
      toast.error("Email is required");
      return;
    }

    if (!values.password) {
      toast.error("Password is required");
      return;
    }
    try {
      console.log(values);
      // Perform authentication API call here
      const response = await axios.post("http://localhost:8080/auth/login-admin", values);
      // Assuming the API returns a success status or a token indicating successful authentication
      if (response.status === 200) {
        setAuth({
          email: values.email,
          password: values.password,
          accessToken: response.data.accessToken,
        });
        sessionStorage.setItem("auth", JSON.stringify(values));
        navigate("/dashboard");
        toast.success("Sign-in successful!");
      } else {
        // Handle other possible responses from the API, if needed
        toast.error("Email or password incorrect. Please try again.");
        setLoginError(true); // Set login error state to display the error message
      }
    } catch (error) {
      // Handle any errors from the API call
      console.error("API Error:", error); // Log any error that occurs during the API call
      toast.error("An error occurred during login. Please try again later.");
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                name="rememberMe"
              />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={() => formik.setFieldValue("rememberMe", !formik.values.rememberMe)}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Forgot your password?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/forgot-password" // Add the new route here
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Reset password
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </BasicLayout>
  );
}

function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      // Validate the form using Formik's validate function
      const errors = await validationSchema.validate(values, { abortEarly: false });
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, show them using toast.error
        Object.values(errors).forEach((error) => {
          toast.error(error);
        });
        return;
      }

      // If there are no validation errors, proceed with the password reset logic
      // ... Rest of the code ...

      // Show success message after successful API request
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      toast.error("Error occurred. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [message, setMessage] = React.useState("");

  return (
    <BasicLayout>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Reset Password
              </MDButton>
            </MDBox>
            {message && (
              <MDBox mt={2} textAlign="center">
                <MDTypography
                  variant="body2"
                  color={message.startsWith("Error") ? "error" : "success"}
                >
                  {message}
                </MDTypography>
              </MDBox>
            )}
          </MDBox>
        </MDBox>
      </Card>
      {toast.success("Password reset email sent successfully!")}
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </BasicLayout>
  );
}

export default Basic;
export { ForgotPassword };
