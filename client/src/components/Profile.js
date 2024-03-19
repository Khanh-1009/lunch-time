import React, { useContext } from 'react'
import { UserContext } from '../user';
import Feedbacks from './Feedbacks';

function Profile(){
    const {user} = useContext(UserContext)

    if (user) {
        return (
            <div className="profile-page">
                <div className="profile">
                    <h2>{user.username}</h2>
                    <hr/>
                    <p>{user.email}</p>
                    <p>{user.user_company}</p>
                </div>
                {user.feedbacks === undefined ? " " :
                <div className="profile-reviews">
                    <h2>Your Feedbacks ({user.feedbacks_count})</h2>
                    {user.feedbacks.map((userFeedback) => (
                    <Feedbacks key={userFeedback.id} userFeedback={userFeedback}/>
                ))}
                </div>}
            </div>
        )
    } else {
        return (
            ""
        )
    }
}

export default Profile;