import React from 'react';
import './css/Atom.css';

const Atom = () => {
  return (
    <div className="atom">
      <div className="nucleus"></div>
      <div className="orbit">
        <div className="electron"></div>
      </div>
      <div className="orbit">
        <div className="electron"></div>
      </div>
      <div className="orbit">
        <div className="electron"></div>
      </div>
    </div>
  );
};

export default Atom;

