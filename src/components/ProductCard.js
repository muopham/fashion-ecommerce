import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, price, image01, colors, slug } = props.data;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <Link to={`/catalog/${slug}`}>
          <img src={image01} alt={title} />
        </Link>
        <div className="product-card__img__cart">
          <Link to={`/catalog/${slug}`}>
            <div>
              <i className="bx bxs-cart"></i>
            </div>
          </Link>
          <div>
            <i className="bx bxs-heart"></i>
          </div>
          <div>
            <i className="bx bx-search"></i>
          </div>
        </div>
      </div>
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__title">{title}</div>
      </Link>
      <div className="product-card__price">
        <span className="product-card__price__new">${price}</span>
        <span className="product-card__price__old">$79</span>
      </div>
      <div className="product-card__color">
        {colors.map((item, i) => (
          <span key={i} className={`circle bg-${item}`}></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
