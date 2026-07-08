import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-5">
              <h1 className="fw-bold mb-4">Login</h1>

              <form>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                  <div className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                {/* Remember Me */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>

                {/* Register Link */}
                <p className="text-center mt-4 mb-0">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-decoration-none"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
