import React from 'react';
import product from './product';

const Image = ({ image, alt }) => {
  return <img src={image} alt={alt} />;
};

export default Image;
