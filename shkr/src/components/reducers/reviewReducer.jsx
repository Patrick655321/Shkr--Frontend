function reviewReducer(state, action) {
    switch(action.type) {
        case 'setReview': {
            return {
                ...state,
                reviewText: action.data
            }
        }
        default:
            return state
    }
}

export default reviewReducer