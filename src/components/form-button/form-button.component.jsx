import React from 'react';
import './custom-button.styles.scss';


const FormButton = ({children,isGoogleButton, ...otherProps}) => (
    <button className={`${isGoogleButton ? 'google-button' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default FormButton;