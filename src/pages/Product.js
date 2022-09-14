import React from "react";
import { useParams } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/BreadCrumb";
import ProductView from "../components/ProductView";
import Section, { SectionTitle } from "../components/Section";
import { Row } from "reactstrap";
import ProductCard from "../components/ProductCard";
const Product = () => {
  const slug = useParams().slug;
  const product = productData.getProduct(slug);

  return (
    <Helmet title="Product">
      <Breadcrumb>Home / Product</Breadcrumb>
      <div className="product">
        <div className="container">
          <ProductView data={product} />
        </div>
      </div>

      <Section>
        <SectionTitle>RELATED PRODUCTS</SectionTitle>
        <div className="container">
          <Row md={4} sm={2} xs={2}>
            {productData.getRandomProducts(4).map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </Row>
        </div>
      </Section>
    </Helmet>
  );
};

export default Product;
