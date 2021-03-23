import React, { Component } from "react";
import classNames from "classnames";
import { Field, ErrorMessage } from "formik";
import './FormModal.css';


class TextInput extends Component {
    render() {
        const {
            placeholder,
            name,
            type,
            error,
            touched,
            isTextBox
        } = this.props;
        const style = isTextBox ? 'FormElement-textarea' : 'FormElement';
        return (
            <div className="FormElement_Container">
                <Field
                    type={type}
                    name={name}
                    rows={5}
                    placeholder={placeholder}
                    component={isTextBox? "textarea" : "input"}
                    className={ classNames(style,
                        { "FormElement_Error": error && touched },
                        { "FormElement_Success": (!error && touched) } ) }
                />
                <div className="FormElement_ErrorMessage ">
                    <ErrorMessage name={name} />
                </div>
            </div>
        );
    }
}


export default TextInput;
