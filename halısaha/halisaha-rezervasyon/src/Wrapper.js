import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hali-saha.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 text-white max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
