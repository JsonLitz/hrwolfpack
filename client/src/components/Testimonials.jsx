import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Carousel, Col, Grid, Row } from 'react-bootstrap';

const imgStyle = {
  width: '100%',
};
const Testimonials = (props) => (
  <div>
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>Voted Best App of 2017!</h1>
          <h3>-Tech Crunch</h3>
        </Carousel.Caption>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://forselfhealing.net/images/news8.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://pinnaclepellet.com/images/900x500-prince-george.jpg"/>
        <Carousel.Caption>
          <h1>"Best thing since the ACA."</h1>
          <h3>-Barack O.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="https://media.mnn.com/assets/images/2014/03/Bahamas-Intro.jpg"/>
        <Carousel.Caption>
          <h1>"It's gonna be YUGE, awesome, you're going to love it." </h1>
          <h3>-Donald T.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://moheban-ahlebeit.com/images/High-Resolution-Nature-Wallpaper/High-Resolution-Nature-Wallpaper-22.jpg"/>
        <Carousel.Caption>
          <h1> "Just stunning. "</h1>
          <h3>-Elon M.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://moheban-ahlebeit.com/images/High-Resolution-Nature-Wallpaper/High-Resolution-Nature-Wallpaper-0.jpg"/>
        <Carousel.Caption>
          <h1> "I can't believe how good this app is."  </h1>
          <h3>-Oleg T.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://moheban-ahlebeit.com/images/High-Resolution-Nature-Wallpaper/High-Resolution-Nature-Wallpaper-25.jpg"/>
        <Carousel.Caption>
          <h1> "The hottest thing since MySpace."  </h1>
          <h3>-Mark Z.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle} width={900} height={500} alt="900x500" src="http://moheban-ahlebeit.com/images/High-Resolution-Nature-Wallpaper/High-Resolution-Nature-Wallpaper-27.jpg"/>
        <Carousel.Caption>
          <h1> "WolfPack is going to change the shape of the world, one bulk purchase at a time." </h1>
          <h3>-Bill G.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

);

export default Testimonials;
