import React from 'react';
import loading from '../assets/loading.gif';

const Loader = () => (
  <div>
    <img style={{ width: 75 }} src={loading} alt="Loading gif" />
  </div>
);

export default Loader;
