import React from "react";
import Background from "../../components/common/Background";
import { Link } from "react-router-dom";
import { BasePathUrl, ClientsListPathUrl } from "../../services/UrlPaths";

function LoginPage() {
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
              <form className="sign-up-form pt-24">
                <div>
                  <label htmlFor="email" className="name-txt">
                    Username
                  </label>
                  <div className="input-wrapper">
                    <span className="icon me-0">
                      <img src="/assets/svg/email.svg" alt="email-icon" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      placeholder="Username"
                      autoComplete="off"
                      className="p-0"
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <label htmlFor="password" className="name-txt">
                    Password
                  </label>
                  <div className="input-wrapper">
                    <span className="icon me-0">
                      <img src="/assets/svg/password.svg" alt="password-icon" />
                    </span>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="off"
                      className="p-0"
                    />
                    <i className="fas fa-eye-slash" id="eye" />
                  </div>
                </div>
              </form>
              <div className="sign-up-btn  pt-24">
                <Link to={BasePathUrl + ClientsListPathUrl}>Sign In</Link>
              </div>

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
