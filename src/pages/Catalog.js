import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import banner from "../assets/image/img-catalog.jpg";
import productData from "../assets/fake-data/products";
import Breadcrumb from "../components/BreadCrumb";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const sizes = [
    {
      display: "S",
      size: "s",
    },
    {
      display: "M",
      size: "m",
    },
    {
      display: "L",
      size: "l",
    },
    {
      display: "XL",
      size: "xl",
    },
    {
      display: "XXL",
      size: "xxl",
    },
  ];

  const colors = [
    {
      display: "White",
      color: "white",
    },
    {
      display: "Pink",
      color: "pink",
    },
    {
      display: "Black",
      color: "black",
    },
    {
      display: "Yellow",
      color: "yellow",
    },
    {
      display: "Orange",
      color: "orange",
    },
    {
      display: "Blue",
      color: "blue",
    },
    {
      display: "Green",
      color: "green",
    },
  ];

  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchFilter = productList.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setProducts(searchFilter);
  }, [search, productList]);

  const filterRef = useRef(null);
  const showHideFilter = () => filterRef.current.classList.toggle("active");
  return (
    <Helmet title="Category">
      <Breadcrumb>Home / Category</Breadcrumb>
      <div className="catalog">
        <div className="container">
          <div className="catalog__toggle" onClick={showHideFilter}>
            Filter
          </div>
          <div className="catalog__filter" ref={filterRef}>
            <div className="catalog__filter__close" onClick={showHideFilter}>
              <i className="bx bx-chevron-left"></i> <span>Back</span>
            </div>

            <div className="catalog__filter__search">
              <div className="catalog__filter__title">Search</div>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="catalog__filter__size">
              <div className="catalog__filter__title">Size</div>
              {sizes.map((item, index) => (
                <div className="catalog__filter__item" key={index}>
                  <input type="checkbox" />
                  <span>{item.display}</span>
                </div>
              ))}
            </div>
            <div className="catalog__filter__color">
              <div className="catalog__filter__title">Color</div>
              {colors.map((item, index) => (
                <div className="catalog__filter__item" key={index}>
                  <input type="checkbox" />
                  <span>{item.display}</span>
                </div>
              ))}
            </div>
            <div className="catalog__filter__clear">Clear</div>
            <div className="catalog__filter__new">
              <div className="catalog__filter__new__title">New product</div>
              {productData.getRandomProducts(3).map((item, index) => (
                <div className="catalog__product-card" key={index}>
                  <div className="catalog__product-card__img">
                    <Link to={`/catalog/${item.slug}`}>
                      <img src={item.image01} alt={item.title} />
                    </Link>
                  </div>
                  <div className="catalog__product-card__content">
                    <Link to={`/catalog/${item.slug}`}>
                      <div className="catalog__product-card__content__title">
                        {item.title}
                      </div>
                    </Link>
                    <div className="catalog__product-card__content__price">
                      ${item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__content">
            <div className="catalog__content__top">
              <img src={banner} alt="banner" />
            </div>
            <Row md={3} sm={2} xs={2}>
              {products.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
