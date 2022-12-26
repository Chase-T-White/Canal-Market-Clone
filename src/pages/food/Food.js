import React from "react";
import "./food.css";
import {
  PageHero,
  ProductGrid,
  PageAnnouncement,
  Footer,
} from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import sushiPlank from "../../assets/sushi-plank.jpg";
import sushiPlankLazy from "../../assets/sushi-plank-lazy.jpg";
import { foodHall } from "../../data/data";
import { SiFoodpanda } from "react-icons/si";

const Food = () => {
  const heroContent = {
    page: "Food",
    heading: "The Food Hall",
    info: (
      <p className='page-hero__info'>
        Food Hall Hours:
        <br></br>
        Mon - Sun: 11:00AM - 8:00PM
      </p>
    ),
    img: (
      <LazyLoadImage
        src={sushiPlank}
        placeholderSrc={sushiPlankLazy}
        effect='blur'
        alt='Delicious sushi displayed on a plank'
      />
    ),
    script: "餐饮",
  };

  return (
    <article className='food'>
      <PageHero {...heroContent} />
      <ProductGrid productArray={foodHall} />
      <PageAnnouncement
        icon={<SiFoodpanda className='announcement-icon' />}
        heading={"The Best of NYC"}
        subtext={"All under one roof!"}
      />
      <Footer />
    </article>
  );
};

export default Food;
