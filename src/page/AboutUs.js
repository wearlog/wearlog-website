import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import logo from '../assets/logo_pink_calendar.png';
import { Line2 } from '../assets/decor-lines';
import trailer from '../assets/videos/trailer.mp4';

const AboutUs = props => {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    const vH = window.innerHeight;
    const isMobile = !window.matchMedia("(min-width: 992px)").matches;
    if (props.location.state) {
      let scrollHeight = vH*1.6;
      if (isMobile) {
        scrollHeight = vH*2.5;
      }
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
      setAutoPlay(true);
    } else {
      window.scrollTo(0,0);
    }
    }, [autoPlay, props.location.state]);

  return(
    <div className="AboutUs">
      <div className="Section1">
        <div className="Text">
          <div className="Text-Content">
            Remembering what you wore the last time you saw somebody or trying to remember if the person you are to meet has already seen you in a specific outfit can be difficult to keep track of. We all want to wear an outfit as much as possible but not necessarily to be seen by the same people. It can also be difficult to remember what wardrobe choices one has when planning ahead for an event or trip.<br />
            <br />And so <b>WearLog</b> was created: A mobile application that lets the user catalog their outfits by asking the questions,
            <ul>
              <li>
                <i>”What did you wear?”</i> and have them take a picture of themselves, choose a photo from their phone’s gallery, or simply type in a description.
              </li>
              <li>
                <i>“When?”</i> and select a date on the calendar inside the app.
              </li>
              <li>
                <i>“Where?”</i> to choose either a ‘Location’ or an ‘Occasion’ they can type in, and,
              </li>
              <li>
                <i>“Who did you see?”</i>, to enter the names of the people they saw.
              </li>
            </ul>
          </div>
        </div>
        <img src={logo} className="Section1-Image" alt="logo" />
      </div>
      <div className="AboutUs-LineDecor">
        <Line2 color="#C63495" />
      </div>
      <div className="Section2">
        <video autoPlay={autoPlay} controls playsInline>
          <source src={trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="Text">
          <div className="Text-Content">
          Continued use enables the user to see outfits worn for each and every day in the calendar, but also see what a specific person has seen the user wearing through searching the name of that person, as well as by selecting a certain outfit and seeing all the names of the people who has seen the user wearing it. With these easy uploads the user will be archiving their wardrobe items, if needed in different ‘wardrobes’ like a separate one for a vacation home, a dorm, or parents’ home, while cataloging them in categories and sub-categories. <br />
          <br />Additionally a different section features a <b><i>"WishList"</i></b>, where the user can add photos of outfits they would like to own in the future, and next to it <b><i>“WonderLab”</i></b> where they would upload images from anywhere like from a movie, a museum exhibition or an old building façade that inspire them to create different outfit combinations, ways of wearing clothes they already own, or inspire to alter them in a whole other way.<br />
          <br />WearLog is a mobile application imagined, created, designed, developed, funded and protected by a team of diverse Women who care about what they wear, believe in sustainability and simply want to keep an organized track of their outfits on a daily basis.<br />
          <br />WearLog is owned by WearLog, LLC, a US company.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;