import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import Section, { SectionTitle } from "../components/Section";
import sliderData from "../assets/fake-data/slider";
import bannerData from "../assets/fake-data/banner";
import productData from "../assets/fake-data/products";
import policyData from "../assets/fake-data/policy";
import paralax from "../assets/image/paralax.jpg";
import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import PolicyCard from "../components/PolicyCard";
import SubBanner from "../components/SubBanner";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* slider */}
      <Slider data={sliderData} />
      {/* end slider */}

      {/* banner */}
      <Section>
        <div className="container">
          <Row md="2" sm="1">
            {bannerData.map((item, index) => (
              <Link key={index} to="/catalog">
                <Collection data={item} />
              </Link>
            ))}
          </Row>
        </div>
      </Section>
      {/* end banner */}

      {/* top sale */}
      <Section>
        <SectionTitle>TOP COLLECTION</SectionTitle>
        <div className="container">
          <Row md={4} sm={2} xs={2}>
            {productData.getRandomProducts(4).map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </Row>
        </div>
      </Section>
      {/* end top sale */}

      {/* banner */}
      <Section>
        <SubBanner img={paralax} />
      </Section>
      {/* end banner */}

      {/* SPECIAL PRODUCTS */}
      <Section>
        <SectionTitle>SPECIAL PRODUCTS</SectionTitle>
        <div className="container">
          <Row md={4} sm={2} xs={2}>
            {productData.getRandomProducts(8).map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </Row>
        </div>
      </Section>
      {/* end SPECIAL PRODUCTS */}

      {/* policy section */}
      <Section>
        <div className="container">
          <div className="policy-card">
            <Row md={3} sm={3} xs={1}>
              {policyData.map((item, index) => (
                <PolicyCard data={item} key={index} />
              ))}
            </Row>
          </div>
        </div>
      </Section>
      {/* end policy section */}
    </Helmet>
  );
};

export default Home;
