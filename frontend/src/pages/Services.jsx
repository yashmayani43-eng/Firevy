import React from 'react';
import WebDevelopmentService from '../components/services/WebDevelopmentService';

export const Services = () => {
  return (
    <WebDevelopmentService
      canonical="/services"
      serviceTitle="IT Outsourcing Services"
      serviceName="IT Outsourcing"
      companyTitle="IT Outsourcing Company"
      challengeTitle="Have An IT Outsourcing Challenge To Address ?"
      heroImage="/images/node_js_team_laptop_illustration.svg"
      expertsImage="/images/php_developers_team_illustration.svg"
    />
  );
};

export default Services;
