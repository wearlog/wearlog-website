import React, { Component } from 'react';
import './Slider.css';
import slider1 from '../assets/slider/slider1.png';
import slider2 from '../assets/slider/slider2.png';
import slider3 from '../assets/slider/slider3.png';
import slider4 from '../assets/slider/slider4.png';
import slider5 from '../assets/slider/slider5.png';
import slider6 from '../assets/slider/slider6.png';
import logoTextBlack from '../assets/logo_text_black.png';
import logoBlack from '../assets/logo_black.png';

const sliderData = [
    {
        image: slider1,
        title: <div><text>What do I wear now?<br />What did I wear then?</text></div>,
        text: <text>Record on your calendar <br /> what you wore, <br />when and where and <br />who you saw, <br />while archiving them <br />in your Wardrobes.</text>,
    },
    {
        image: slider2,
        title:  <div>
                    <div>It's very simple with</div>
                    <img src={logoBlack} alt="logoBlack" />
                </div>,
        text: 'Click to add and upload your photo, tag categories, brands and colors, and enter the date, place and person you were with.'
    },
    {
        image: slider3,
        title: <div>Find specific information from your Wardrobes</div>,
        text: 'Search by color, designer, a person you saw, or a certain date.',
    },
    {
        image: slider4,
        title: <div>Record on your calendar</div>,
        text:<text>Plan what to wear ahead of time by browsing in the wardrobe you develop.<br/> Go to any date on the calendar to remember what you wore that day at any hour.</text>,
    },
    {
        image: slider5,
        title: <div>Wishes and Wonders</div>,
        text: <text>Create a WishList <br />for all you would like to own,<br />and upload images of <br />everything that inspires you <br />to create outfits in <br />WonderLand.</text>,
    },
    {
        image: slider6,
        title: <img src={logoTextBlack} alt="logoBlack" />,
        text: <text>A mobile application created, designed, developed, funded and protected by a team of <br /> All-Women.</text>,
    },
];

const arrowRight = (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
);

class Slider extends Component {
    state= {
        index: 0,
    }

    prev = () => {
        let { index } = this.state;
        if (index !== 0) {
            index -= 1;
        } else {
            index = sliderData.length-1;
        }
        this.setState({ index });
    }

    next = () => {
        let { index } = this.state;
        if (index !== sliderData.length-1) {
            index += 1;
        } else {
            index = 0
        }
        this.setState({ index });
    }

    render() {
        const { index } = this.state;
        return (
            <div className="Slider">
                {/* <div className="Text">Been there. Worn that.</div> */}
                <div className="Container">
                    <button className="Prev-Next mobile left" onClick={this.prev}>{arrowRight}</button>
                    <button className="Prev-Next" onClick={this.prev}>Prev</button>
                    <div className="Content-Container">
                        {
                            sliderData.map((data, i) => (
                                <div className={"Content " + (i === index ? 'current' : '')} key={i}>
                                    <div className="Content-ImageContainer">
                                        <img src={data.image} className="Content-Image" alt="logo" />
                                    </div>
                                    <div className="Content-Text">
                                        <div className="Title">{data.title}</div>
                                        <div className="Description">{data.text}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="Prev-Next mobile" onClick={this.next}>{arrowRight}</button>
                    <button className="Prev-Next" onClick={this.next}>Next</button>
                </div>
                <div className="Indicator-Container">
                    <div className="Indicator">
                        {sliderData.map((d, i) => (
                            <div className={"Indicator-Circle " + (i === index ? 'active' : '')} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
