import React, { useContext, useEffect, useState } from 'react';

import './Bookings.css';
import { getBookings } from '../services/bookingApi';
import { TextField } from './TextField';

export function Bookings({ selectionCallback }) {
  const [bookings, setBookings] = useState([]);
  const [selectedId, setSelectionId] = useState();
  const displayStatus = { 'upcoming': true };

  useEffect(() => {
    getBookings()
      .then((items) => {
        // we only care about items with status upcoming
        const displayItems = items.filter((item) => displayStatus[item.status]);
        setBookings(displayItems);
      });
  }, [])

  const setSelection = (booking) => {
    const { category, startDate, endDate } = booking;
    selectionCallback({ category, startDate, endDate });
    setSelectionId(booking.bookingId);
  };

  return (
    <div className="list-container">
      {bookings.map((booking) => (
        <div key={`booking_${booking.bookingId}`}
          className={`booking-card ${booking.bookingId === selectedId ? 'selected' : ''}`}
          onClick={(event) => {
            setSelection(booking);
          }}>
          <div className="col-1">
            <div className="car-image"></div>
            <TextField label="Vehicle category" value={booking.category} />
          </div>
          <div className="col-2">
            <div className="flex-row">
              <TextField label="Customer" value={booking.customerName} />
              <TextField label="Status" value={booking.status} />
            </div>
            <TextField label="Trip dates" value={booking.startDate} />
            <TextField label="" value={booking.endDate} />
          </div>
        </div>))}
    </div>
  )
}
