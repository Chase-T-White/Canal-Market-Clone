import React from "react";
import "./home.css";
import mainImg from "../../assets/main-img.jpg";
import mainImgLazy from "../../assets/main-img-lazy.jpg";
import canalMap from "../../assets/canal-map.jpg";
import canalMapLazy from "../../assets/canal-map-lazy.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Hero, CompanyInfo, Events } from "./components";
import { Footer } from "../../components";

const Home = () => {
  return (
    <article>
      <Hero />
      <section className='main-img'>
        <LazyLoadImage
          src={mainImg}
          placeholderSrc={mainImgLazy}
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
            <div className='address-container'>
              <h3 className='address'>265 Canal St. New York, NY</h3>
            </div>
          </a>
          <a href='' className='address__column'>
            <div className='map-container'>
              <LazyLoadImage
                src={canalMap}
                placeholderSrc={canalMapLazy}
                effect='blur'
                alt='Gray map of Canal Market'
                className='map'
              />
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default Home;
