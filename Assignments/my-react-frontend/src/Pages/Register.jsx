import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    toast.success("Registration Successful!");

    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name" required 
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email" required 
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password" required 
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Register</button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;