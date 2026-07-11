import React, { useState } from "react";

const Register = () => {
  const [registerData, setregisterData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerData);
    setregisterData({ name: "", phone: "", email: "", password: "" });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">Register</h1>

          <form onSubmit={submitHandler}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                onChange={(e) =>
                  setregisterData({ ...registerData, name: e.target.value })
                }
                type="text"
                name="name"
                value={registerData.name}
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                onChange={(e) =>
                  setregisterData({ ...registerData, phone: e.target.value })
                }
                type="tel"
                name="phone"
                value={registerData.phone}
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) =>
                  setregisterData({ ...registerData, email: e.target.value })
                }
                type="email"
                name="email"
                value={registerData.email}
                className="form-control"
                placeholder="Enter your email"
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) =>
                  setregisterData({ ...registerData, password: e.target.value })
                }
                name="password"
                value={registerData.password}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
