import React, { useContext, useEffect, useState } from "react";
import Background from "../../components/common/Background";
import { Form, Formik } from "formik";
import AppInput from "../../components/input/AppInput";
import { loginValidationSchema } from "../../utils/Validation";
import apiCall from "../../services/APICall";
import { ContextDatas } from "../../services/Context";
import { showToast } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
  let navigate = useNavigate();
  const { User, setUser, seturlPath } = useContext(ContextDatas);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // seturlPath("/");
      // return navigate("/");
      window.location.href = "/";
    }
  }, []);

  const formValues = {
    initialValues: { username: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      Login(values);
    },
  };

  const Login = async (values) => {
    setloading(true);
    const response = await apiCall("post", `/auth/login`, values);
    setloading(false);
    if (response?.status) {
      const { data } = response;

      setUser(data?.profile);
      localStorage.setItem("token", data?.token);
      showToast("Succesfully logged in", true);
      seturlPath("/");
      window.location.href = "/";
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="site-content">
        <section id="sign-up-main" className="background">
          <Background />
          <div className="container">
            <div className="sign-up-wrap position-relative pt-16">
              <div className="sign-up-content pt-24">
                <h1 className="text-start">Welcome Back to ZCP</h1>
                <p className="text-start pt-8">
                  Sign in to access your account
                </p>
              </div>
              <Formik
                initialValues={formValues.initialValues}
                validationSchema={formValues.validationSchema}
                onSubmit={formValues.onSubmit}
              >
                {() => (
                  <Form>
                    <AppInput
                      img="/assets/svg/email.svg"
                      name="username"
                      label="Username"
                      type="text"
                      required
                    />
                    <AppInput
                      img="/assets/svg/email.svg"
                      name="password"
                      label="Password"
                      type="text"
                      icon={<i className="fas fa-eye-slash" id="eye" />}
                      required
                    />

                    <div className="sign-up-btn  pt-24">
                      {loading ? (
                        <button
                          type="submit"
                          style={{ backgroundColor: "black" }}
                        >
                          Loading ...
                        </button>
                      ) : (
                        <button type="submit">Login</button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>

              <footer className="footer">
                <div className="block-footer">
                  <p>
                    Don’t have an account ? Please Contact with your manager.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </section>
        {/* Sign in content end */}
      </div>
    </div>
  );
}

export default LoginPage;
