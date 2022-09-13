import React from "react";

const PolicyCard = (props) => {
  const { name, des, icon } = props.data;
  return (
    <div className="policy-card__item">
      <div className="policy-card__item__icon">
        <i className={icon}></i>
      </div>
      <div className="policy-card__item__title">
        <h3>{name}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default PolicyCard;
