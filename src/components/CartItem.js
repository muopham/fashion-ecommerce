import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { update, remove } from "../redux/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(props.data);
  const [quantity, setQuantity] = useState(props.data.quantity);

  useEffect(() => {
    setProduct(props.data);
    setQuantity(props.data.quantity);
  }, [props.data]);

  const handlePlus = (product) => {
    dispatch(
      update({
        ...product,
        quantity: product.quantity + 1,
      })
    );
  };
  const handleMinus = (product) => {
    dispatch(
      update({
        ...product,
        quantity: quantity - 1 === 0 ? 1 : quantity - 1,
      })
    );
  };

  const handleRemove = (product) => {
    if (dispatch(remove(product))) {
      toast.success("Delete success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <tr>
        <td className="cart__table__img">
          <Link to={`/catalog/${product.slug}`}>
            <img src={product.avatar} alt={product.title} />
          </Link>
        </td>
        <td className="cart__table__title">
          <Link to={`/catalog/${product.slug}`}>
            <p>
              {product.title} - {product.size} - {product.color}
            </p>
          </Link>
        </td>
        <td className="cart__table__price">
          <p>${product.price}</p>
        </td>
        <td className="cart__table__quantity">
          <div
            className="cart__table__quantity__btn"
            onClick={() => {
              handleMinus(product);
            }}
          >
            <i className="bx bx-minus"></i>
          </div>
          <div className="cart__table__quantity__input">{quantity}</div>
          <div
            className="cart__table__quantity__btn"
            onClick={() => {
              handlePlus(product);
            }}
          >
            <i className="bx bx-plus"></i>
          </div>
        </td>
        <td>
          <div
            className="cart__table__remove"
            onClick={() => {
              handleRemove(product);
            }}
          >
            <i className="bx bx-trash"></i>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
