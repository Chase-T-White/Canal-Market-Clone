import React from "react";
import "./food.css";
import { PageHero, Footer } from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import sushiPlank from "../../assets/sushi-plank.jpg";
import sushiPlankLazy from "../../assets/sushi-plank-lazy.jpg";

const Food = () => {
  const heroContent = {
    page: "Food",
    heading: "The Food Hall",
    info: "Food Hall Hours:<br><br/>Mon - Sun: 11:00AM - 8:00PM",
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
      <Footer />
    </article>
  );
};

export default Food;
