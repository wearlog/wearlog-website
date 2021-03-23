import React, { Component } from 'react';
import { Formik } from 'formik';
import FormElement from './FormElement';
import * as Yup from 'yup';
import './ContactUs.css';
import image from '../assets/header_logo_color.png';

const Validator = Yup.object().shape({
  topic: Yup.string()
    .required('Required'),
  message: Yup.string()
    .required('Required'),
});

class ContactUs extends Component {

  handleSend = (values) => {
    console.log('Form Values : ', values);
  }

  renderForm = () => (
    <Formik
      initialValues={{
        topic: '',
        message: '',
      }}
      onSubmit={this.handleSend}
      validationSchema={Validator}
      render={props => (
        <div className="FormikForm-container">
          <FormElement
            type="topic"
            name="topic"
            placeholder="What’s this about?"
            error={props.errors.topic}
            touched={props.touched.topic}
          />
          <FormElement
            isTextBox
            name="message"
            placeholder="Write us what do you think?"
            error={props.errors.message}
            touched={props.touched.message}
          />
          <button
            className="Form-saveButton"
            onClick={props.handleSubmit}
          >
            Send
          </button>
        </div>
      )}
    />
  )

  render() {
    return (
      <div className="ContactUs">
        <div className="ContactUs-LeftRight">
          <div className="ContactUs-Image">
            <img src={image} alt="wearlog" />
          </div>
        </div>
        <div className="ContactUs-LeftRight">
          <div className="ContactUs-Form">
            Contact Us
            {this.renderForm()}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;