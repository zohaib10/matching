//Types
const FETCH_LISTINGS_SUCCESS = 'fetch_listings_success'
const RESERVE_LISTING = 'reserve_listing'

//Actions
//TODO: fetch all listings
export const fetchListingsSuccess = items => ({
    type: FETCH_LISTINGS_SUCCESS,
    payload: items,
})

//TODO: reserve the listing - set bookingId on the listing
export const reserveListing = (listingId) => ({
    type: RESERVE_LISTING,
    payload: { listingId },
})

const INITIAL_STATE = {
    items: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LISTINGS_SUCCESS:
            return {
                items: action.payload,
            }
        case RESERVE_LISTING:
            return {
              ...state
            }
        default:
            return state
    }
}

export default reducer
