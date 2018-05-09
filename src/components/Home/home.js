import React from 'react';
import {Link} from 'react-router-dom';

const home = () => {
  return (
    <div>
      <h1>Perrito</h1>
      <Link to="/signin" > Login Perro</Link>
    </div>
  );
}

export default home;