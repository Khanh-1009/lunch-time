import React from 'react'

function Feedbacks ({userFeedback}){
    const {subject, feedback} = userFeedback

    return (
            <div className="each-feedback">
                <h3>{subject}</h3>
                <p>{feedback}</p>
            </div>
    )
}

export default Feedbacks