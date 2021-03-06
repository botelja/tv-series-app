import React, { useState } from 'react';
import SeriesList from './SeriesList';
import Loader from './Loader';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const handleSeriesInputChange = async (e) => {
    setSeriesName(e.target.value);
    setIsFetching(true);
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${e.target.value}`
    );
    const data = await response.json();
    setIsFetching(false);
    setSeries(data);
  };

  return (
    <div>
      The length of the series array is {series.length}.
      <div>
        <input
          value={seriesName}
          type="text"
          onChange={handleSeriesInputChange}
        />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === '' && (
        <p>Please enter series name into input</p>
      )}
      {!isFetching && series.length === 0 && seriesName.trim() !== '' && (
        <p>No TV series was found with this name</p>
      )}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={series} />}
    </div>
  );
};

export default Series;
