import React from "react";

const Collection = (props) => {
  const { title, sale, img } = props.data;
  return (
    <div className="banner">
      <div className="banner__img">
        <img src={img} alt={title} />
      </div>
      <div className="banner__info">
        <div className="banner__info__sale">{sale}</div>
        <div className="banner__info__title">{title}</div>
      </div>
    </div>
  );
};

export default Collection;
