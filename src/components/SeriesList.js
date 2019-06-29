import React from 'react';
import './SeriesList.css';
import SeriesListItem from './SeriesListItem';

const SeriesList = ({ list }) => {
  return (
    <div>
      <ul className="series-list">
        {list.map((series) => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
