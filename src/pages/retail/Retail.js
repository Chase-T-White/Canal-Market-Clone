import React from "react";
import "./retail.css";
import {
  PageHero,
  ProductGrid,
  PageAnnouncement,
  Footer,
} from "../../components";
import insideStore from "../../assets/inside-store.jpg";
import insideStoreLazy from "../../assets/inside-store-lazy.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GiRose } from "react-icons/gi";
import { retailMarket } from "../../data/data";

const Retail = () => {
  const heroContent = {
    page: "Retail",
    heading: "The Retail Market",
    info: (
      <p className='page-hero__info'>
        Retail Market Hours:
        <br></br>
        Fri - Sun: 11:00AM - 7:00PM
      </p>
    ),
    img: (
      <LazyLoadImage
        src={insideStore}
        placeholderSrc={insideStoreLazy}
        effect='blur'
        alt='Store checkout counter'
      />
    ),
    script: "購物",
  };

  return (
    <article className='retail'>
      <PageHero {...heroContent} />
      <ProductGrid productArray={retailMarket} />
      <PageAnnouncement
        icon={<GiRose className='announcement-icon' />}
        heading={"The Best of NYC"}
        subtext={"All under one roof!"}
      />
      <Footer />
    </article>
  );
};

export default Retail;
