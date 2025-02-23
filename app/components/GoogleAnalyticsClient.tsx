"use client";

import { useEffect } from "react";
import ReactGA from 'react-ga';

const GoogleAnalyticsClient = () => {
  useEffect(() => {
    ReactGA.initialize('UA-000000-01'); // Replace with your actual Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default GoogleAnalyticsClient; 