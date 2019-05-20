import React from "react";

import postAPI from '../js/postAPI'

const UserSignUp = () => {
    
    const handleUserCreate = (e) => {
        e.preventDefault()

        const email = document.getElementById("userEmail").value
        const password = document.getElementById("userPassword").value
        const passwordConfirm = document.getElementById("userPasswordConfirm").value

        
        const newUser = {
            email,
            password,
            passwordConfirm
        }
        debugger
        postAPI("userCreate", newUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(

        <form id="user-signup-form" class="user-form" onSubmit={handleUserCreate}>  
            <label for="userEmail">Email:</label>
            <br/>
            <input type="email" id="userEmail" />

            <br/>

            <label for="userPassword">Password:</label>
            <br/>
            <input type="password" id="userPassword" />
            
            <br/>

            <label for="userPasswordConfirm">Confirm Password:</label>
            <br/>
            <input type="password" id="userPasswordConfirm" />

            <br/>

            <input type="submit" value="Signup" />
        </form>

    )
}

export default UserSignUp;