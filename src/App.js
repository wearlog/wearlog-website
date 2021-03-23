import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import PrivacyPolicy from './page/PrivacyPolicy';
import HomePage from './page/HomePage';
import FormModal from './page/FormModal';
import AboutUs from './page/AboutUs';
import FAQ from './page/FAQ';
// import ContactUs from './page/ContactUs';

class App extends React.Component {
  state = {
    formModal: false,
    isMobile: !window.matchMedia("(min-width: 992px)").matches,
  };

  openModal = () => {
    console.log('AA');
    this.setState({ formModal: true });
  }
  closeModal = () => {
    this.setState({ formModal: false });
  }
  render() {
    const { formModal, isMobile } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about-us">
              <Nav active={'about-us'} />
              <Header />
            </Route>
            <Route path="/faq">
              <Nav active={'faq'} />
              {isMobile ? <Header homepage /> : <Header />}
            </Route>
            <Route path="/privacy-policy">
              <Nav active={'privacy-policy'} />
              <Header />
            </Route>
            {/* <Route path="/contact-us">
              <Nav active={'contact-us'} />
              <Header />
            </Route> */}
            <Route path="/" component={HomePage} />
          </Switch>
          <div className="App-body">
            <Switch>
              <Route path="/about-us" component={AboutUs} />
              <Route path="/faq" component={FAQ} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              {/* <Route path="/contact-us" component={ContactUs} /> */}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <div className="Footer">
            <div />
            <div className="Copyright">
              <div>WEARLOG ©</div>
              <div>All rights reserved.</div>
            </div>
          </div>
        </Router>
        {formModal && (
          <FormModal closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
