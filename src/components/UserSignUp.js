import React from "react";

import postAPI from '../js/postAPI'

const UserSignUp = () => {
    
    const handleUserCreate = () => {
        const newUser = {email: "test@email.com", password: "123"}
        postAPI("userCreate", newUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <button onClick={handleUserCreate}>
            Create a new user
        </button>
    )
}

export default UserSignUp;