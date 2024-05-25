import React from 'react'

function Feedbacks ({userFeedback}){
    const {subject, feedback, rating} = userFeedback

    return (
            <div className="each-feedback">
                <h3>{subject} - {rating} &#11088;</h3>
                <p>{feedback}</p>
            </div>
    )
}

export default Feedbacks