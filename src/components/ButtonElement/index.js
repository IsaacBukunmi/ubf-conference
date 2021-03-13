import React from 'react';
import styles from './index.module.scss';

const PrimaryButton = ({children, className, ...otherProps}) => {
    return(
        <button className={`${styles.primary_button} ${className}`} {...otherProps}>
            {children}
        </button>
    )
}

export default PrimaryButton