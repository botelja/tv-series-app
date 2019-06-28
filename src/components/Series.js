import React, { useState, useEffect } from 'react';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries();
  });

  const getSeries = async () => {
    const response = await fetch(
      ' http://api.tvmaze.com/search/shows?q=vikings'
    );
    const data = await response.json();
    setSeries(data);
  };

  return <div>The length of the series array is {series.length}.</div>;
};

export default Series;
