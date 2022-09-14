import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";
import CartItem from "../components/CartItem";
import { cartTotalPriceSelector } from "../redux/selector";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <Helmet title="Cart">
      <ToastContainer />
      <Breadcrumb>Home / Cart</Breadcrumb>
      <div className="cart">
        <div className="container">
          {products.length > 0 ? (
            <>
              <Table responsive striped className="cart__table">
                <thead>
                  <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <CartItem data={item} key={index} />
                  ))}
                </tbody>
              </Table>
              <div className="cart__price">
                <p>Total Price : ${totalPrice}</p>
              </div>
              <div className="cart__checkout">
                <Link to="/catalog">
                  <div className="cart__checkout__btn">Continue shopping</div>
                </Link>
                <Link to="/checkout">
                  <div className="cart__checkout__btn">Check out</div>
                </Link>
              </div>
            </>
          ) : (
            <div className="cart__empty">
              <div className="cart__empty__icon">
                <i className="bx bx-cart"></i>
              </div>
              <div className="cart__empty__content">
                <p>Your cart is empty !</p>
                <Link to="/catalog" className="cart__empty__content__btn">
                  Shop now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
