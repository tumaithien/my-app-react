// import './button.scss'
import styles from './Button.module.css'
import React from 'react';

//styled components
const Button = (props) => {
    return (
        <button 
        className={`${styles.button} 
        ${props.secondary ? styles.buttonSecondary: ""}`}>
        {props.children}</button>
    );
};

export default Button;