import React, { Component } from 'react';
import './Nav.css';
import {
  Link,
} from "react-router-dom";
import logoWhite from '../assets/header_logo_white.png';
import { slide as Menu } from 'react-burger-menu';
import { closeIcon, appStore } from './SvgFiles';
import { thinArrowDown } from '../components/SvgFiles';

const pages = [
  {
    name: 'About Us',
    path: 'about-us',
    to: '/about-us',
  },
  // {
  //   name: 'FAQ',
  //   path: 'faq',
  //   to: '/faq',
  // },
  {
    name: 'Privacy Policy',
    path: 'privacy-policy',
    to: '/privacy-policy',
  },
  // {
  //   name: 'Contact Us',
  //   path: 'contact-us',
  //   to: '/contact-us',
  // },
];

const appStoreLink = "https://apps.apple.com/us/app/wearlog/id1489762330";

class Nav extends Component {
  state = {
    showUpArrow: false,
    isMenuOpen: false,
    isDownloadOpen: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentDidUpdate() {
    const { section } = this.props;
    const { isMenuOpen } = this.state;
    if (section > 0 && isMenuOpen) {
      this.closeMenu();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { showUpArrow } = this.state;
    if (window.scrollY > 20) {
      if (!showUpArrow) {
        this.setState({ showUpArrow: true });
      }
    } else {
      if (showUpArrow) {
        this.setState({ showUpArrow: false });
      }
    }
  }

  goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false, isDownloadOpen: false });
  }

  handleStateChange = (state) => {
    this.setState({isMenuOpen: state.isOpen})  
  }

  render() {
    const { active } = this.props;
    const { showUpArrow, isMenuOpen, isDownloadOpen } = this.state;

    return(
      <div className={`Nav ${active === 'homepage' ? 'homepage' : ''}`}>
        <div className="Nav-Logo">
          <Link to="/" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={logoWhite} alt="logo" />
          </Link>
        </div>
        <div className="Nav-Links">
          { pages.map((item, index) => (
            <div key={index}>
            {item.path === active
              ? (
                <div to={item.to} className="Nav-Link active">
                  <div>{item.name}</div>
                </div>
              )
              : (
                <Link to={item.to} className="Nav-Link">
                  <button>{item.name}</button>
                </Link>
              )
            }
            </div>
          ))
          }
          {/* <button className={`Nav-Download ${colorState ? '' : 'white'}`}>Download</button> */}
          <Menu
            right
            disableAutoFocus
            burgerButtonClassName="Nav-Burger-Menu"
            customCrossIcon={closeIcon}
            isOpen={isMenuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            { pages.map((item, index) => (
              <div key={index}>
              {item.path === active
                ? (
                  <div to={item.to} className="Nav-Link-Small active">
                    <div onClick={this.closeMenu}>{item.name}</div>
                  </div>
                )
                : (
                  <Link to={item.to} className="Nav-Link-Small">
                    <button onClick={this.closeMenu}>{item.name}</button>
                  </Link>
                )
              }
              </div>
            ))
            }
            <div className="Nav-Link-Small">
              <button onClick={() => this.setState({ isDownloadOpen: !isDownloadOpen })}>Download</button>
            </div>
            { isDownloadOpen && (
              <div>
                <button className="Nav-Link-Small-Download">
                  <div className="button-icon">{appStore}</div>
                  <a href={appStoreLink}>
                    App Store
                  </a>
                </button>
              </div>
            )}
          </Menu>
        </div>
        <div className={`GoUpArrow ${showUpArrow ? '' : 'hidden'}`} onClick={this.goToTop}>{thinArrowDown}</div>
      </div>
    );
  }
}

export default Nav;