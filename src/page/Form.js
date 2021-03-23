/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Formik } from 'formik';
import FormElement from './FormElement';
import * as Yup from 'yup';
import axios from 'axios';

const Validator = Yup.object().shape({
  modal: Yup.string()
  .min(2, 'Too Short')
  .max(50, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Invalid Email'),
  explanation: Yup.string()
    .required('Required'),
});

class FormikForm extends Component {
  
  handleSend = (values) => {
    const { closeModal } = this.props;
    const { email, name, explanation, modal } = values;
      console.log('Send ! ',values);
      closeModal();
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name,   
            email,  
            explanation,
            modal,
        }
    }).then((response)=>{
      console.log('Response : ',response);
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }
  render() {
    return (
        <div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              modal: '',
              explanation: '',
            }}
            onSubmit={this.handleSend}
            validationSchema={Validator}
            render={props => (
                <div className="FormikForm-container">
                  <FormElement
                    type="name"
                    name="name"
                    placeholder="Name"
                    error={props.errors.name}
                    touched={props.touched.name}
                  />
                  <FormElement
                    type="email"
                    name="email"
                    placeholder="Email"
                    error={props.errors.email}
                    touched={props.touched.email}
                    />
                    <FormElement
                      type="email"
                      name="modal"
                      placeholder="Phone Modal"
                      error={props.errors.modal}
                      touched={props.touched.modal}
                    />
                  <FormElement
                    isTextBox
                    name="explanation"
                    placeholder="Why do you want to be a tester?"
                    error={props.errors.explanation}
                    touched={props.touched.explanation}
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
      </div>
    );
  }
}

export default FormikForm;
