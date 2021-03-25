//Types
const FETCH_BOOKINGS_SUCCESS = 'fetch_bookings_success';
const RESERVE_BOOKINGS = 'reserve_bookings';

//Actions
//TODO: fetch all bookings
export const fetchBookingsSuccess = items => ({
    type: FETCH_BOOKINGS_SUCCESS,
    payload: items,
})

//TODO: reserve the booking - set listingId on the booking
export const reserveBooking = (bookingId) => ({
    type: RESERVE_BOOKINGS,
    payload: { bookingId },
})

const INITIAL_STATE = {
    items: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_BOOKINGS_SUCCESS:
            return {
                items: action.payload,
            }
        case RESERVE_BOOKINGS:
            //TODO: reserve the booking
            return {
              ...state
            }
        default:
            return state
    }
}

export default reducer
