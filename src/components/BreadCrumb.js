import React from "react";

const Breadcrumb = (props) => {
  return (
    <div className="bread-crumb">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Breadcrumb;
