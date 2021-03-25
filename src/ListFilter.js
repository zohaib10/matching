import React, { useEffect, useState } from 'react';

import { getListings } from './services/listingApi';
import { Listings } from './components/Listings';

export function ListFilter({ filter }) {
  const [list, setList] = useState([]);

  const [results, setResults] = useState([]);
  const doesMatch = (item, filter) =>
    (!filter.category || item.category.toLowerCase() === filter.category.toLowerCase())
    && (!filter.startDate || item.startDate <= filter.startDate)
    // TODO: enable endDate filter below
    // temporarily disabled as sample data set has no results with both start and end date
    // && (!filter.endDate || item.endDate >= filter.endDate)
    && (item.status === "current");

  useEffect(() => {
    getListings()
      .then(items => {
        setList(items);
        setResults(items.filter(item => doesMatch(item, filter)));
      });
  }, [filter])

  return (
    <>
      {results.length ?
        <Listings listings={results} /> :
        <div className="list-container">
          <div className="listings-placeholder">No matching items</div></div>}
    </>
  );
}
