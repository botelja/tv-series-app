import React from 'react';
import './SeriesList.css';

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <li>{series.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
