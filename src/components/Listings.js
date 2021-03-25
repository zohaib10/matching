import React, { useEffect, useState, useContext } from 'react';

import './Listings.css';
import { TextField } from './TextField';

export function Listings({ listings }) {
  const [selectedId, setSelectionId] = useState();

  const handlePairing = (listingId) => {
    // only for debugging
    console.log(listingId);
    setSelectionId(listingId);
    // TODO: call pairing API with listingId..
  }

  return (
    <div className="list-container">
      {listings.map(listing => (<div key={`listing_${listing.listingId}`} className="listing-card">
        <div className="col-1">
          <div className="car-image"></div>
          <TextField label="Vehicle category" value={listing.category} />
        </div>
        <div className="col-2">
          <TextField label="Vehicle" value={listing.vehicle} />
          <TextField label="Trip dates" value={listing.startDate} />
          <TextField value={listing.endDate} />
        </div>
        <div className="col-3">
          <button className="pair-btn" onClick={() => handlePairing(listing.listingId)}>Pair</button>
        </div>
      </div>))}
    </div>
  );
}
