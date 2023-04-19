import { useState, useReducer } from "react"

import reviewReducer from "./reducers/reviewReducer"
import DrinkName from "./styled/DrinkName"

const initialReviews = [
    {
        id: 1,
        description: "Slap some cheese on this one cos its a fuckin' cracker!",
    },
    {
        id: 2,
        description: "Garbage drink for garbage humans."
    }
]

function Review() {

    // const [reviews, setReviews] = useState(initialReviews)
    // const [reviewText, setReviewText] = useState("")
    // const [showEditBox, setShowEditBox] = useState(false)
    // const [editReviewId, setEditReviewId] = useState(null)
    // const [editReviewText, setEditReviewText] = useState("")

    const initialState = {
        reviews: initialReviews,
        reviewText: "",
        showEditBox: false,
        editReviewId: null,
        editReviewText: "" 
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState)

    const { reviews, reviewText, showEditBox, editReviewId, editReviewText } = store

    const handleOnChange = (event) => {
        dispatch({
            type: 'setReview',
            data: event.target.value
        })
        // setReviewText(event.target.value)
    }

    const addReview = (e) => {
        e.preventDefault()
        //Add review with correct object structure inside 'reviews'
        // setReviews((prevReviews) => {
        //     return [
        //         ...prevReviews,
        //         {id: prevReviews.length+1, description: reviewText }
        //     ]
        // })
        // setReviewText("")
    }

    const deleteReview = (id) => {
        //delete the review with id 'id' from 'reviews'
        const filteredReviews = reviews.filter((review) => review.id !== id)
        // setReviews(filteredReviews)
    }

    const editReview = (id) => {
        // setShowEditBox(true)
        // setEditReviewId(id)
        // setEditReviewText(reviews.find((review) => review.id === id).description)
        

    }

    const handleEditReview = (e) => {
        // setEditReviewText(e.target.value)
    }

    const handleEdit = () => {
        const newReviews = [...reviews]
        //find review with id 'editReviewId'
        const reviewIndexToEdit = reviews.findIndex((review) => review.id === editReviewId)
        //update the description of that review
        newReviews[reviewIndexToEdit].description = editReviewText
        // setReviews(newReviews)
        // setShowEditBox(false)
        // setReviewText("")
        //update the reviews state
    }

    return (
        <div>
            <DrinkName>Reviews</DrinkName>
        {reviews.map((review) => {
            return (
                <div key={review.id} style={{padding:20}}>
                    <div>{review.description}</div>
                    <button onClick={() => editReview(review.id)}>Edit</button>
                    <button onClick={() => deleteReview(review.id)} >Delete</button>
                </div>
            )
        })}
        {showEditBox && ( 
                <div>
                    <textarea value={editReviewText} onChange={handleEditReview}/>
                    <div>
                        <button onClick={handleEdit}> Save </button>
                    </div>
                </div>
            )
        }
        <form>
            <div>Add Review</div>
            <textarea value={reviewText} onChange={handleOnChange}/>
            <div>
                <button onClick={addReview}>Add</button>
            </div>
        </form>
        </div>
    )
}

export default Review