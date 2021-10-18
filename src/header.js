import React from 'react';
import { Icon } from '@iconify/react';
import {ReactComponent as Logo} from './static/images/logo.svg';
// import { gsap } from 'gsap';

function Header() {

  return (
    <header>
      <div className="title__header">
        <Logo className="logo__header"/>
        <div className="info__header">
          <p className="grettings__header">
            <Icon className="hand" icon="emojione:waving-hand-medium-light-skin-tone" />
            Hi there! I'm
          </p>
          <h1>Mr. Lopez</h1>
          <h2>Design & Development</h2>
          <p>I'm in the process of bringing this to life!</p>
          {/* <p>Any enquiry just drop me a message down below!</p> */}
          {/* <button className="primaryButton">Primary Button...</button> */}
          {/* <button className="secondaryButton">Secondary Button...</button> */}
      
        </div>
      </div>
    </header>
  );
}
  
  export default Header;