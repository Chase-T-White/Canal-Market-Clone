import React from "react";
import "./footer.css";
import Button from "../button/Button";
import { GiPencil } from "react-icons/gi";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { CgArrowLongRight } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <header className='footer__header'>
        <h3>Interested in becoming a vendor?</h3>
        <Button text={"click here"} />
      </header>
      <div className='footer__socials'>
        <a href='/' className='social'>
          <GiPencil className='footer-icon' />
          <p className='social-text'>Email us</p>
        </a>
        <a href='/' className='social'>
          <SlSocialFacebook className='footer-icon' />
          <p className='social-text'>
            Follow us<br></br>on facebook
          </p>
        </a>
        <a href='/' className='social'>
          <SlSocialInstagram className='footer-icon' />
          <p className='social-text'>
            Follow us<br></br>on instagram
          </p>
        </a>
        <div className='newsletter'>
          <p className='newsletter-text'>
            <span>Stay up to date with our newsletter</span>
          </p>
          <form action=''>
            <input type='email' name='' id='' placeholder='Email' />
            <button type='submit'>
              <CgArrowLongRight className='form-icon' />
            </button>
          </form>
        </div>
      </div>
      <div className='footer__legal'>
        <ul className='legal-items'>
          <li className='item'>
            Copyright Canal Street Market {new Date().getFullYear()}
          </li>
          <li className='item'>
            <a href='/'>Privacy Policy</a>
          </li>
          <li className='item'>
            <a href='/'>Vendor Login</a>
          </li>
          <li className='item'>
            <a href='/'>
              Site by <strike>Zero</strike>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
