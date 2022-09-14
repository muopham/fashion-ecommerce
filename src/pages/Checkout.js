import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Row, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";
import { add } from "../redux/orderSlice";
import { clear } from "../redux/cartSlice";
import { cartTotalPriceSelector } from "../redux/selector";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);

  const initial = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const [values, setValues] = useState(initial);
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = {
      cartItem,
      values,
      totalPrice: cartTotalPrice,
    };
    console.log(temp);
    if (dispatch(add(temp))) {
      dispatch(clear());
      setValues(initial);
      toast.success("Order success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(order);
  return (
    <Helmet title="Checkout">
      <ToastContainer />
      <Breadcrumb>Home / Checkout</Breadcrumb>
      <div className="cart">
        <div className="container">
          <Row md={2} sm={1} xs={1}>
            <div className="cart__bill">
              <div className="cart__bill__title">Billing Details</div>
              <div className="cart__bill__content">
                <form onSubmit={handleSubmit}>
                  <div className="cart__bill__content__item">
                    <label>Name</label>
                    <input
                      type="text"
                      className=""
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <Row md={2} sm={1} xs={1}>
                    <div className="cart__bill__content__item">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className=""
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="cart__bill__content__item">
                      <label>Phone</label>
                      <input
                        type="text"
                        className=""
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </Row>
                  <div className="cart__bill__content__item">
                    <label>Address</label>
                    <input
                      type="text"
                      className=""
                      name="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <button type="submit" className="cart__bill__btn">
                    Place Order
                  </button>
                </form>
              </div>
            </div>
            <div className="cart__order">
              <div className="cart__order__title">Your order</div>
              <Table
                borderless
                hover
                responsive
                striped
                className="cart__order__table"
              >
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.title} x {item.quantity}
                      </td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total:</td>
                    <td className="cart__order__table__total">
                      ${cartTotalPrice}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </div>
      </div>
    </Helmet>
  );
};

export default Checkout;
