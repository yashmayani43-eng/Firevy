import React from 'react';
import FeaturedInBrandsSection from '../services/FeaturedInBrandsSection';

export const WeHaveBeenFeaturedInGrid = ({ title, data, className = '' }) => {
  return <FeaturedInBrandsSection title={title} data={data} className={className} />;
};

export default WeHaveBeenFeaturedInGrid;
