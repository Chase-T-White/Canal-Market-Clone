import React from "react";
import "./pageHero.css";

const PageHero = ({ page, heading, info, img, imgAlt, script }) => {
  return (
    <section className='page-hero'>
      <p className='page-hero__info'>{info}</p>
      <div className='page-hero__columns'>
        <div className='page-hero__left'>
          <span className='page-hero__eyebrow'>{page}</span>
          <h1 className='page-hero__heading'>{heading}</h1>
        </div>
        <div className='page-hero__right'>
          <img src={img} alt={imgAlt} className='page-hero__image' />
          <span className='page-hero__script'>{script}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
