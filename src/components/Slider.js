import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = (props) => {
  const data = props.data;
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    const index = active + 1 === data.length ? 0 : active + 1;
    setActive(index);
  }, [active, data]);

  const prevSlide = () => {
    const index = active - 1 < 0 ? data.length - 1 : active - 1;
    setActive(index);
  };

  useEffect(() => {
    const slideAuto = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(slideAuto);
    };
  }, [nextSlide, props]);

  return (
    <div className="slider">
      {data.map((item, index) => (
        <SliderItem key={index} item={item} active={active === index} />
      ))}

      <div className="slider__control">
        <div className="slider__control__item" onClick={prevSlide}>
          <i className="bx bx-chevron-left"></i>
        </div>
        <div className="slider__control__item" onClick={nextSlide}>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

const SliderItem = (props) => (
  <div className={`slider__item ${props.active ? "active" : ""}`}>
    <div className="slider__item__info">
      <div className="slider__item__info__subtitle">
        <span>Welcome To Fashion</span>
      </div>
      <div className="slider__item__info__title">
        <h1>{props.item.title}</h1>
      </div>
      <div className="slider__item__info__btn">
        <Link to={props.item.path}>shop now</Link>
      </div>
    </div>
    <div className="slider__item__img">
      <img src={props.item.img} alt="banner" />
    </div>
  </div>
);

export default Slider;
