import React, { useState } from 'react';
import styles from '../styles/Product.module.css';

const Product = (props) => {
  const [error, setError] = useState('An error occured');
  const { title, description, price } = props.data;
  const validate = () => {
    //If error seterror
    setError('Error Message');
  };
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default Product;
