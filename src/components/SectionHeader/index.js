import React from 'react';
import styles from './index.module.scss';

const SectionHeader = ({heading, subheading}) => {
    return(
        <div className={styles.header}>
            <h2>{heading}</h2>
            <p>{subheading && subheading}</p>
            <svg class="underline" width="5em" height="1.4375em" opacity="0.3" viewBox="0 0 137 23"><path fill="none" fill-rule="evenodd" stroke="#02b0eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.842 9.327C51.628.37 93.864-.375 134.548 7.094 71.485 6.547 26.976 2.864 2 20.745c18.198-5.87 67.32-23.752 131.677-3.208"></path></svg>
        </div>
    )
}
export default SectionHeader;