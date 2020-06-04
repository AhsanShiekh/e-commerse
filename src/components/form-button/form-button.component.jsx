import React from 'react';
import './custom-button.styles.scss';


const FormButton = ({children, isGoogleButton, inverted, ...otherProps}) => (
    <button className={` ${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google-button' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default FormButton;