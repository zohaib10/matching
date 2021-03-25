import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './App.css'
import { Bookings } from './components/Bookings'
import { ListFilter } from './ListFilter'

import { fetchListingsSuccess, reserveListing } from './redux/listings'
import { fetchBookingsSuccess, reserveBooking } from './redux/bookings'

const startDate = new Date()
const endDate = startDate.setDate(startDate.getDate() + 7)

function App({ listings, bookings, fetchListingsSuccess }) {
    const [filter, setFilter] = useState({
        startDate,
        endDate,
        status: 'current',
        category: undefined,
    })

    useEffect(() => {
        //TODO: what TO DO?
    }, [])

    console.log('listings ', listings)
    console.log('bookings ', bookings)
    return (
        <div className="main-panel">
            <Bookings key="bookings" selectionCallback={setFilter} />
            <ListFilter key="listings" filter={filter} />
        </div>
    )
}

const mapStateToProps = state => ({
    listings: state.listings.items,
    bookings: state.bookings.items,
})

export default connect(mapStateToProps, {
    fetchListingsSuccess,
    fetchBookingsSuccess,
    reserveListing,
    reserveBooking,
})(App)
