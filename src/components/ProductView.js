import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductView = (props) => {
  const { title, price, image01, image02, colors, size, description, slug } =
    props.data;

  const dispatch = useDispatch();
  const [preview, setPreview] = useState(image01);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [sizes, setSizes] = useState(undefined);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (sizes === undefined) {
      toast.error(`Please choose size!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }
    if (color === undefined) {
      toast.error(`Please choose color!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    return true;
  };
  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: slug,
        title: title,
        color: color,
        size: sizes,
        avatar: image01,
        price: price,
        quantity: quantity,
      };
      if (dispatch(add(newItem))) {
        toast.success("Add success!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="product">
      <ToastContainer />
      <div className="product__img">
        <div className="product__img__list">
          <div
            className="product__img__list__item"
            onClick={() => setPreview(image01)}
          >
            <img src={image01} alt={title} />
          </div>
          <div
            className="product__img__list__item"
            onClick={() => setPreview(image02)}
          >
            <img src={image02} alt={title} />
          </div>
        </div>
        <div className="product__img__main">
          <img src={preview} alt={title} />
        </div>
      </div>
      <div className="product__info">
        <div className="product__info__title">{title}</div>
        <div className="product__info__price">
          <span>${price}</span>
          <del>$79</del>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Size:</div>
          <div className="product__info__item__list">
            {size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item 
                    ${item === sizes ? "active" : " "}`}
                onClick={() => setSizes(item)}
              >
                <span className="product__info__item__size">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Color:</div>
          <div className="product__info__item__list">
            {colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item 
                ${item === color ? "active" : " "}`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Quantity:</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__btn" onClick={() => addToCart()}>
            Add to cart
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Description:</div>
          <p className="product__info__item__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
