import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFeedBack } from '../userSlice'

function FeedBackForm() {
    const [subject, setSubject] = useState("")
    const [feedback, setFeedback] = useState("")
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    function handleChangeSubject(e){
        setSubject(e.target.value)
    }

    function handleChangeFeedback(e){
        setFeedback(e.target.value)
    }

    function handleChangeRating(e){
        setRating(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/feedbacks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject: subject,
                feedback: feedback,
                rating: rating
            })
        })
        .then(res => {
            if (res.ok){
                res.json().then((newFeedback) => {
                    console.log(newFeedback)
                    dispatch(addFeedBack(newFeedback))
                    alert("Thanks for giving us feedback! We'll respond to you shortly.")
                    setSubject("")
                    setFeedback("")
                    setRating(0)
                })
            } else {
                res.json().then(err => {
                    console.log(err.errors)
                    setErrors(err.errors)
                    setTimeout(() => {
                        setErrors([])
                        setSubject("")
                        setFeedback("")
                        setRating(0)
                    }, 4000)
                }) 
            }
        })
    }

    return (
        <div className="feedback-form">
           <h1>Tell us how you like your lunch</h1>
           <p>We're always working to make our ideas better. Now that you've had your order for a bit, we would like your thoughts.</p>
           <br/>
           <form onSubmit={handleSubmit}>
                <label>Subject</label>
                <br/>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={handleChangeSubject}
                />
                <br/>
                <label>Feedback</label>
                <br/>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={handleChangeFeedback}
                />
                <br/>
                <br/>
                <label>Rate Your Experience</label>
                <select value={rating} onChange={handleChangeRating}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <br/>
                <br/>
                <button id="btn-feedback">Send FeedBack</button>
                <button id="btn-cancel" >Cancel</button>
                {errors.length > 0 && (
                <div>
                {errors.map((error) => (
                    <ul className="error-review" key={error}><span>!</span>{error}</ul>
                ))}
                </div>
                )}
           </form>
           
        </div>
    )
}

export default FeedBackForm;