// src/components/example-5-css-modules/Button.jsx

import styles from './button.module.css';

const Button = ({ buttonText }) => {
    // compared to CSS in JS (Example 3) << styles >> is an object 
        // instead of a function that creates an object
    return <button className={styles.btn}>{buttonText}</button>;
};

export default Button;
