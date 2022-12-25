import React from "react";
import "./pageAnnouncement.css";

const PageAnnouncement = ({ icon, heading, subtext }) => {
  return (
    <section className='page-announcement'>
      {icon}
      <div className='announcement-text'>
        <h2 className='announcement__heading'>{heading}</h2>
        <p className='announcement__subtext'>{subtext}</p>
      </div>
      {icon}
    </section>
  );
};

export default PageAnnouncement;
