import React from "react";
import "./home.css";
import mainImg from "../../assets/main-img.jpg";
import mainImgLazy from "../../assets/main-img-lazy.jpg";
import canalMap from "../../assets/canal-map.jpg";
import canalMapLazy from "../../assets/canal-map-lazy.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Hero, CompanyInfo, Events } from "./components";

const Home = () => {
  return (
    <article>
      <Hero />
      <section className='main-img'>
        <LazyLoadImage
          src={mainImg}
          PlaceholderSrc={mainImgLazy}
          effect='blur'
          alt='Peaceful outdoor scenery'
          className='main-img__img'
        />
      </section>
      <CompanyInfo />
      <Events />
      <section className='main-address'>
        <div className='main-address__columns'>
          <a href='' className='address__column'>
            <h3 className='address'>265 Canal St. New York, NY</h3>
          </a>
          <a href='' className='address__column'>
            <LazyLoadImage
              src={canalMap}
              PlaceHolderSrc={canalMapLazy}
              effect='blur'
              alt='Gray map of Canal Market'
              className='map'
            />
          </a>
        </div>
      </section>
    </article>
  );
};

export default Home;
