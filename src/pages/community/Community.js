import React from "react";
import "./community.css";
import { PageHero, PageAnnouncement, Footer } from "../../components";
import { IoIosRadio } from "react-icons/io";

const Community = () => {
  const heroContent = {
    page: "Community",
    heading: "Canal St. Community",
    info: (
      <p className='page-hero__info'>
        Our mixed-use space hosts
        <br></br>
        ongoing events, podcasts
        <br></br>& artists in residence
      </p>
    ),
    img: null,
    script: "文化",
  };

  return (
    <article className='community'>
      <PageHero {...heroContent} />

      <Footer />
    </article>
  );
};

export default Community;
