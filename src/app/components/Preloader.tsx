import React from 'react';

const Preloader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-950">
    <img src="/pl.gif" alt="Loading..." className="w-16 h-16" />
  </div>
);

export default Preloader;