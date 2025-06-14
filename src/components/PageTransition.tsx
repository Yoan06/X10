import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className={`page-transition-${location.pathname === '/' ? 'home' : 'page'}`}>
      {children}
    </div>
  );
};

export default PageTransition; 