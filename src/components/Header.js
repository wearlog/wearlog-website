import React from 'react';
import { Link } from  'react-router-dom';
import './Header.css';
import phone from '../assets/WLLogoPhone.png';
import { appStore, googlePlay, thinArrowDown, playButton } from './SvgFiles';
import { Line1, Line2 } from '../assets/decor-lines';
import scrollIcon from '../assets/scrollicon.png';
import shadow from '../assets/shadow.png';

const appStoreLink = "https://apps.apple.com/us/app/wearlog/id1489762330";
const googlePlayLink = "/";

const Header = ({ homepage }) => {
  if (homepage) {
    return (
      <div className="Header HomePage">
        <div className="Header-ScrollIcon">
          <img src={scrollIcon} alt="scroll" />
          <div className="Header-ArrowDown">{thinArrowDown}</div>
        </div>
        <div className="Left">
          <img className="Phone" src={phone} alt="logo" />
          <img className="Header-Phone-Shadow" src={shadow} alt="shadow" />
        </div>
        <div className="Right">
          <div className="Header-Sub-Title">
            Keep a log of your outfits on the calendar, together with the place and the names of the people that saw you wearing them.
          </div>
          <div className="Header-Download">
            <div className="Header-PlayTrailer">
              <Link to={{ pathname: '/about-us', state:{ fromHome: true }}} >
                <button className="Header-DownloadButton">
                  <div className="button-icon">{playButton}</div>
                  Play Trailer
                </button>
              </Link>
            </div>
            <div className="Header-DownloadText">Download The App</div>
            <div className="Header-DownloadButtons">
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                <div className="Header-DownloadButton">
                  <div className="button-icon">{appStore}</div>
                  App Store
                </div>
              </a>
              <a href={googlePlayLink} className="Header-DownloadButton" style={{ display: 'none' }}>
                <div className="button-icon">{googlePlay}</div>
                GOOGLE PLAY
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
      <div className="Header">
        <Line1 className="Decor-Line-1" color="white" />
        <Line2 className="Decor-Line-2" color="white" />
        <div className="Left">
          <img className="Phone" src={phone} alt="logo" />
        </div>
        <div className="Right">
          <div className="Header-Sub-Title">
            Keep a log of your outfits on the calendar, together with the place and the names of the people that saw you wearing them.
          </div>
          <div className="Header-Download">
            <div className="Header-PlayTrailer">
              <Link to={{ pathname: '/about-us', state:{ fromHome: true }}} >
                <button className="Header-DownloadButton">
                  <div className="button-icon">{playButton}</div>
                  Play Trailer
                </button>
              </Link>
            </div>
            <div className="Header-DownloadButtons">
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
                <button className="Header-DownloadButton">
                  <div className="button-icon">{appStore}</div>
                  App Store
                </button>
              </a>
              <button className="Header-DownloadButton" style={{ display: 'none' }}>
                <div className="button-icon">{googlePlay}</div>
                GOOGLE PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;