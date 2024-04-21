import React, {useState, useEffect} from "react"

const UserContext = React.createContext()

function UserProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    // console.log(user)

    function login(loggedInUser){
        setUser(loggedInUser)
    }

    function logout(){
        setUser(null)
    }

    function signup(newUser){
        setUser(newUser)
    }

    function handleAddFeedback(addedFeedback) {
        const updatedFeedbacks = [...user.feedbacks, addedFeedback]
        const userCopy = {...user, feedbacks: updatedFeedbacks, feedbacks_count: addedFeedback.user.feedbacks_count}
        setUser(userCopy)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup, handleAddFeedback}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};