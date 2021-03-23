import React, { Component } from 'react';
import './HomePage.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import phone from '../assets/WLLogoPhone.png';
import ReactFullpage from '@fullpage/react-fullpage';
import tagIcon from '../assets/homepage-icons/tag.png';
import whatIcon from '../assets/homepage-icons/what.png';
import whenIcon from '../assets/homepage-icons/when.png';
import whereIcon from '../assets/homepage-icons/where.png';
import whoIcon from '../assets/homepage-icons/who.png';
import calendarIcon from '../assets/homepage-icons/calendar.png';
import wardrobeIcon from '../assets/homepage-icons/wardrobe.png';
import searchIcon from '../assets/homepage-icons/search.png';
import whatVid from '../assets/videos/what.mp4';
import tagVid from '../assets/videos/tag.mp4';
import whenVid from '../assets/videos/when.mp4';
import whereVid from '../assets/videos/where.mp4';
import whoVid from '../assets/videos/who.mp4';
import calendarVid from '../assets/videos/calendar.mp4';
import wardrobeVid from '../assets/videos/wardrobe.mp4';
import searchVid from '../assets/videos/search.mp4';
import { Line1, Line2, Line3, Line4, Line5, Line6 } from '../assets/decor-lines';
import shadow from '../assets/shadow.png';
import { thinArrowDown } from '../components/SvgFiles';

const contents = [
  {
    title: <div className="Title"><div className="W">W</div>hat?</div>,
    icon: <img src={whatIcon} alt="icons" />,
    content: 'Start with a photo of you in the outfit.',
    video: whatVid,
    decorLines: <Line1 className="Lines L1" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">T</div>ag</div>,
    icon: <img src={tagIcon} alt="icons" />,
    content: <text>Enter information you would like to add<br />such as designer/brand, category and color.<br/>You can search for anything through these<br />entries later.</text>,
    video: tagVid,
    decorLines: <Line2 className="Lines L2" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">W</div>hen?</div>,
    icon: <img src={whenIcon} alt="icons" />,
    content: <text>Select the date and time on the calendar.<br />Later you would be able to see images<br />of your outfits on this calendar.</text>,
    video: whenVid,
    decorLines: <Line3 className="Lines L3" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">W</div>here?</div>,
    icon: <img src={whereIcon} alt="icons" />,
    content: <text>Record the location or occasion<br />you’re wearing this outfit.</text>,
    video: whereVid,
    decorLines: <Line4 className="Lines L4" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">W</div>ho?</div>,
    icon: <img src={whoIcon} alt="icons" />,
    content: <text>Type or select from your Contacts<br />names of the people you saw on that day.</text>,
    video: whoVid,
    decorLines: <Line5 className="Lines L5" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">C</div>alendar</div>,
    icon: <img src={calendarIcon} alt="icons" />,
    content: <text>See on the calendar what you wore every day<br />for each week of the month<br />and<br />find all the information you entered for<br />any day you choose.</text>,
    video: calendarVid,
    decorLines: <Line6 className="Lines L6" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">W</div>ardrobe</div>,
    icon: <img src={wardrobeIcon} alt="icons" />,
    content: <text>All outfit choices are saved in your Wardrobe<br />in categories such as top, bottom, shoes<br />and subcategories like shirt, blouse, jacket.</text>,
    video: wardrobeVid,
    decorLines: <Line2 className="Lines L7" color="#C63495" />,
  },
  {
    title: <div className="Title"><div className="W">S</div>earch</div>,
    icon: <img src={searchIcon} alt="icons" />,
    content: <text>See all the outfits a person has seen you<br />wearing by searching their name,<br />or find what you own by a specific<br />designer/brand, color or category.</text>,
    video: searchVid,
  },
];

class HomePage extends Component {
  vidRef = document.getElementsByTagName("video");

  state = {
    section : 0,
  }

  onLeave = (origin, destination, direction) => {
    if (destination.index !== 0) {
      this.setState({ section: destination.index });
      var promise = this.vidRef[destination.index-1].play();

      if (promise !== undefined) {
        promise.catch(error => {
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
        }).then(() => {
          // Auto-play started
        });
      }
    }
    if (destination.index === 0)
    this.setState({ section: destination.index });
  }

  goToTop = () => {
    window.fullpage_api.moveTo(1);
  }

  renderPage = (fullpageApi) => (
    contents.map((item, index) => {
      if (index % 2 === 1) {
        return (
          <div className="section" key={index}>
            <div className="Page even" >
              <div className="Description">
                <div className="Description-Wrapper">
                  <div className="Title-Container">
                    {item.icon}
                    {item.title}
                  </div>
                  <div className="Content">{item.content}</div>
                </div>
              </div>
              <div className="Video-Container">
                { item.video
                  ? <video ref={this.vidRef} autoPlay loop muted playsInline className="Video">
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  : <img src={phone} className="Phone" alt="logo" />
                }
                <img className="Phone-Shadow" src={shadow} alt="shadow" />
              </div>
              {item.decorLines}
            </div>
          </div>
        );
      }
      return (
        <div className="section" key={index}>
          <div className="Page odd">
            {item.decorLines}
            <div className="Video-Container">
              { item.video
                ? <video ref={item.ref} autoPlay loop muted={true} playsInline className="Video">
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                : <img src={phone} className="phone" alt="logo" />
              }
              <img className="Phone-Shadow" src={shadow} alt="shadow" />
            </div>
            <div className="Description">
              <div className="Description-Wrapper">
                <div className="Title-Container">
                  {item.icon}
                  {item.title}
                </div>
                <div className="Content">{item.content}</div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );

  renderReactFullPage = () => {
    const { section } = this.state;
    return (
      <div>
        <div className="App-body">
          <ReactFullpage
            //fullpage options
            licenseKey={'68F56326-BFE6408F-A6839529-F8B15C70'}
            scrollingSpeed={700} /* Options here */
            navigation
            bigSectionsDestination='top'
            onLeave={(origin, destination, direction) => this.onLeave(origin, destination, direction)}

            render={({ state, fullpageApi }) => {
              return (
                <div className="Home-Page">
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <div style={{ height: '100%' }}>
                        <Nav active={'homepage'} section={section} />
                        <Header homepage />
                      </div>
                    </div>
                    {this.renderPage(fullpageApi)}
                  </ReactFullpage.Wrapper>
                </div>
              )
            }
            }
          />
        </div>
        <div className={`GoToTop ${section === 0 ? 'hidden' : ''}`} onClick={this.goToTop}>{thinArrowDown}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderReactFullPage()}
      </div>

    );
  }
}

export default HomePage;
