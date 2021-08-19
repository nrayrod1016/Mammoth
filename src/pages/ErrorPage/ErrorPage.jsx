import React from 'react';
import styles from './ErrorPage.module.css'
const CustomErrorPageComponent = (props) => {
  return (
    <>
    <h1 className={styles.header}>404</h1>
    <h2 className={styles.subHeader}>PAGE NOT FOUND</h2>
    <div className={styles.video}>
      <iframe  allow="autoplay" allowfullscreen width="900" height="500" src="https://www.youtube.com/embed/6C8_ZWjUMu0" title="YouTube video player - Near Impossible" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  );
}
 
export default CustomErrorPageComponent;