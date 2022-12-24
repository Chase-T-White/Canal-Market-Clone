import React from "react";
import "./company-info.css";
import storeFront from "../../../../assets/store-front.jpg";
import storeFrontLazy from "../../../../assets/store-front-lazy.jpg";
import insideStore from "../../../../assets/inside-store.jpg";
import insideStoreLazy from "../../../../assets/inside-store-lazy.jpg";
import sushiPlank from "../../../../assets/sushi-plank.jpg";
import sushiPlankLazy from "../../../../assets/sushi-plank-lazy.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CompanyInfo = () => {
  return (
    <section className='main-company-info'>
      <h2 className='main-company-info-heading'>A New Kind of Market</h2>
      <div className='main-company-info__columns'>
        <div className='info__column'>
          <LazyLoadImage
            src={storeFront}
            placeholderSrc={storeFrontLazy}
            effect='blur'
            alt='Store front with sign'
            className='info__column-img'
          />
          <p className='info__column-text'>
            Merging retail, food, art, and culture, Canal Street Market
            highlights top retail and design concepts, restaurants, and
            up-and-coming players in the downtown New York City community.
          </p>
        </div>
        <div className='info__column'>
          <LazyLoadImage
            src={insideStore}
            placeholderSrc={insideStoreLazy}
            effect='blur'
            alt='Store checkout counter'
            className='info__column-img'
          />
          <p className='info__column-text'>
            Retail Market Hours:<br></br>Fri - Sun: 11:00AM - 7:00PM
          </p>
        </div>
        <div className='info__column'>
          <LazyLoadImage
            src={sushiPlank}
            placeholderSrc={sushiPlankLazy}
            effect='blur'
            alt='Delicious sushi displayed on a plank'
            className='info__column-img'
          />
          <p className='info__column-text'>
            Food Hall Hours:<br></br>Mon - Sun: 11:00AM - 8:00PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
