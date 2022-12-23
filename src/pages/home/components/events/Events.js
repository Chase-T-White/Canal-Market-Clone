import React from "react";
import "./events.css";
import { Button } from "../../../../components";

const Events = () => {
  return (
    <section className='main-events'>
      <header className='main-events__header'>
        <div className='header__item'>活動</div>
        <div className='header__item'>
          <h2 className='main-events__title'>Market Events</h2>
        </div>
        <div className='header__item'>活動</div>
      </header>
      <div className='main-events__announcements'>
        <div className='announcements-event'>
          <span>12/02</span>
          <p>
            <a href=''>Small Business Retail Pop Up Weekend!</a>
          </p>
        </div>
        <div className='announcements-event'>
          <span>12/07</span>
          <p>
            <a href=''>
              New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
            </a>
          </p>
        </div>
        <div className='announcements-event'>
          <span>12/11</span>
          <p>
            <a href=''>Hack City 12/11</a>
          </p>
        </div>
        <Button className='btn--event' text={"see all"} />
      </div>
    </section>
  );
};

export default Events;
