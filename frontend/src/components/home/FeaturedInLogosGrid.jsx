import React from 'react';
import FeaturedInBrandsSection from '../services/FeaturedInBrandsSection';

export const FeaturedInLogosGrid = ({ data, title, className = '' }) => {
  return <FeaturedInBrandsSection data={data} title={title} className={className} />;
};

export default FeaturedInLogosGrid;

