import React, { Component } from 'react';
import './PrivacyPolicy.css';
import English from '../Languages/English';
import Spanish from '../Languages/Spanish';
import French from '../Languages/French';
import German from '../Languages/German';
import Italian from '../Languages/Italian';
import Dutch from '../Languages/Dutch';
import { arrowDown } from '../components/SvgFiles';

const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Dutch'];

class PrivacyPolicy extends Component {

  state = {
    activeTab: 'English',
    isOpen: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = (lang) => {
    this.setState({ activeTab: lang, isOpen: false });
  }

  renderChooseLanguage = () => {
    const { activeTab, isOpen } = this.state;
    return (
      <div className="Lang-Container">
        <div className="Lang-Selection">
          <div className="Current-Lang">{`Language : ${activeTab}`}</div>
          <button className="Down-Arrow" onClick={() => this.setState({ isOpen: !isOpen })}>{arrowDown}</button>
        </div>
        {isOpen && (
          <div className="Lang-List">
            {languages.map(lang => (
              <button
                key={lang}
                className="Lang-Choice"
                onClick={() => this.onClick(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  renderPrivacyPolicy = () => {
    const { activeTab } = this.state;
    return (
      <div className="Privacy-Policy">
        {activeTab === 'English' && <English />}
        {activeTab === 'Spanish' && <Spanish />}
        {activeTab === 'French' && <French />}
        {activeTab === 'German' && <German />}
        {activeTab === 'Italian' && <Italian />}
        {activeTab === 'Dutch' && <Dutch />}
      </div>
    );
  }

  render() {
    // window.scrollTo(0, 0);
    return (
      <div>
        <div className="Privacy-Policy-Page">
          {this.renderChooseLanguage()}
          {this.renderPrivacyPolicy()}
        </div>
      </div>

    );
  }
}

export default PrivacyPolicy;
