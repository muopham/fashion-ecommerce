import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Row, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";
import { updateUser } from "../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const orderItem = useSelector((state) => state.order);
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dispatch(updateUser(password))) {
      toast.success("Change success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Helmet title="Profile">
      <ToastContainer />
      <Breadcrumb>Home / Profile</Breadcrumb>
      <div className="cart">
        <div className="container">
          <Row md={2} sm={1} xs={1}>
            <div className="cart__bill">
              <div className="cart__bill__title">My Account</div>
              <div className="cart__bill__content">
                <form onSubmit={handleSubmit}>
                  <div className="cart__bill__content__item">
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} disabled />
                  </div>
                  <div className="cart__bill__content__item">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      disabled
                    />
                  </div>
                  <div className="cart__bill__content__item">
                    <label>New Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="New password"
                      required
                    />
                  </div>
                  <button type="submit" className="cart__bill__btn">
                    Save
                  </button>
                </form>
              </div>
            </div>
            {orderItem.length === 0 ? (
              <div className="cart__empty">
                <div className="cart__empty__icon">
                  <i className="bx bx-cart"></i>
                </div>
                <div className="cart__empty__content">
                  <p>Your order is empty !</p>
                  <Link to="/catalog" className="cart__empty__content__btn">
                    Shop now
                  </Link>
                </div>
              </div>
            ) : (
              <div className="cart__order">
                <div className="cart__order__title">Purchase order</div>
                <Table
                  borderless
                  responsive
                  striped
                  className="cart__order__table"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItem.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>${item.totalPrice}</td>
                        <td>
                          <Link to={`/order/${index}`}>
                            <span className="cart__order__btn">View</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Row>
        </div>
      </div>
    </Helmet>
  );
};

export default Profile;
