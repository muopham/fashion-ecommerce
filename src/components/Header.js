import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const mainNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Product",
      path: "/catalog",
    },
    {
      display: "Accessory",
      path: "/accessories",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];

  const path = useLocation().pathname;
  const cart = useSelector((state) => state.cart);

  const activeNav = mainNav.findIndex((e) => e.path === path);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top__left">Welcome to Out Store</div>
          <div className="header__top__right">
            <div className="header__top__right__item">
              <Link to="#">
                <i className="bx bx-heart"></i>
                <span>Wishlist</span>
              </Link>
            </div>
            <div className="header__top__right__item">
              <Link to="/login">
                <i className="bx bx-user"></i>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom" ref={headerRef}>
        <div className="container">
          <div className="header__logo">
            <Link to="/">Outstock</Link>
          </div>
          <div className="header__menu">
            <div className="header__menu__left" ref={menuRef}>
              <div className="header__menu__left__close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i> <span>Back</span>
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    activeNav === index ? "active" : ""
                  } `}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header__menu__right">
              <div className="header__menu__right__item">
                <i className="bx bx-search"></i>
              </div>
              <div className="header__menu__right__item">
                <Link to="/cart">
                  <i className="bx bx-cart"></i>
                </Link>
                <span>{cart?.length > 0 ? cart?.length : 0}</span>
              </div>
              <div
                className="header__menu__right__item header__menu__right__mobile"
                onClick={menuToggle}
              >
                <i className="bx bx-menu"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
