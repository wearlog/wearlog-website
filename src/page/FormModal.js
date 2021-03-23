import React, { Component } from 'react';
import './FormModal.css';
import Form from './Form';
import cancelIcon from '../assets/cancelIcon.png';


class FormModal extends Component {
    
    render() {
    const { closeModal } = this.props;
        return (
            <div className="Form-modal">
                <div className="Form-main">
                    <button className="Form-closeButton" onClick={closeModal}>
                        <img src={cancelIcon} alt="cancelIcon"></img>
                    </button>
                    <div className="Form-body">
                        <div className="Form-header">
                            <text className="Form-header-text">Be a Tester!</text>
                        </div>
                        <div className="Form-text-container">
                            <text className = "Form-text">Please fill this form to test the WearLog Mobile application before it releases!</text>
                        </div>
                        <Form closeModal={closeModal} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FormModal;
