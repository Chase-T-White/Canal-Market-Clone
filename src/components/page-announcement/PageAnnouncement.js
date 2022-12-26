import React from "react";
import "./pageAnnouncement.css";

const PageAnnouncement = ({ icon, heading, subtext }) => {
  return (
    <section className='page-announcement'>
      <div className='icon-container'>{icon}</div>
      <div className='announcement-text'>
        <h2 className='announcement__heading'>{heading}</h2>
        <p className='announcement__subtext'>{subtext}</p>
      </div>
      <div className='icon-container'>{icon}</div>
    </section>
  );
};

export default PageAnnouncement;
