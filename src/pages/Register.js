import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { register } from "../redux/userSlice";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, "Must be 4 characters or more"),
      email: Yup.string().matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address"
      ),
      password: Yup.string().matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
        "Password must be 7-19 characters and contain at least one letter, one number and a special character"
      ),
      confirmedPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: (values) => {
      const { confirmedPassword, ...other } = values;
      dispatch(register(other));
      navigate("/login");
    },
  });

  return (
    <Helmet title="Register">
      <Breadcrumb>Home / Register</Breadcrumb>
      <div className="register">
        <div className="container">
          <div className="register__title">CREATE ACCOUNT</div>
          <form className="register__form" onSubmit={formik.handleSubmit}>
            <div className="register__form__item">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter user name"
                required
              />
              {formik.errors.name && (
                <p className="register__form__error">{formik.errors.name}</p>
              )}
            </div>
            <div className="register__form__item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email"
                required
              />
              {formik.errors.email && (
                <p className="register__form__error">{formik.errors.email}</p>
              )}
            </div>
            <div className="register__form__item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter password"
                required
              />
              {formik.errors.password && (
                <p className="register__form__error">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="register__form__item">
              <label htmlFor="confirmedPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                placeholder="Confirm password"
                required
              />
              {formik.errors.confirmedPassword && (
                <p className="register__form__error">
                  {formik.errors.confirmedPassword}
                </p>
              )}
            </div>
            <button type="submit">Register now</button>
          </form>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
