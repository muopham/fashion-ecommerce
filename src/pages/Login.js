import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";
const Login = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const checkUser = () => {
    let temp = user;
    if (temp.name !== name || temp.password !== password) {
      return setError(true);
    }
    return true;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (checkUser()) {
      navigate("/");
    }
  };
  return (
    <Helmet title="Login">
      <Breadcrumb>Home / Login</Breadcrumb>
      <div className="register">
        <div className="container">
          <div className="register__title">CREATE ACCOUNT</div>
          <form className="register__form" onSubmit={handleLogin}>
            <div className="register__form__item">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Enter user name"
                required
              />
            </div>
            <div className="register__form__item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter password"
                required
              />
            </div>
            {error && (
              <p className="register__form__error">
                User account or password incorrect !
              </p>
            )}
            <button type="submit">Sign in</button>
            <Link to="/register">
              <div className="register__creat">Creat acccount!</div>
            </Link>
          </form>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
