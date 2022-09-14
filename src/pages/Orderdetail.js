import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";

const Orderdetail = () => {
  const orderItem = useSelector((state) => state.order);
  const id = useParams().id;
  const order = orderItem[id];

  return (
    <Helmet title="Detail">
      <Breadcrumb>Home / Detail</Breadcrumb>
      <div className="detail-order">
        <div className="container">
          <div className="detail-order__title">Details order</div>
          <div className="detail-order__content">
            <div className="detail-order__content__item">
              <p className="detail-order__content__item__title">Full name:</p>
              <span>{order.values.name}</span>
            </div>
            <div className="detail-order__content__item">
              <p className="detail-order__content__item__title">Email:</p>
              <span>{order.values.email}</span>
            </div>
            <div className="detail-order__content__item">
              <p className="detail-order__content__item__title">Phone:</p>
              <span>{order.values.phone}</span>
            </div>
            <div className="detail-order__content__item">
              <p className="detail-order__content__item__title">Address:</p>
              <span>{order.values.address}</span>
            </div>
            <div className="detail-order__content__item">
              <p className="detail-order__content__item__title">Total:</p>
              <span>${order.totalPrice}</span>
            </div>
          </div>
          <div className="detail-order__title">List products:</div>
          <Table bordered hover striped className="detail-order__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.cartItem.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.title}-{item.size}-{item.color}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Helmet>
  );
};

export default Orderdetail;
