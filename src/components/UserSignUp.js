import React, { useState } from "react";

import postAPI from '../js/postAPI'

const UserSignUp = () => {
    
    let [userCredentials, setUserCredentials] = useState({email: null, password: null, passwordConfirm: null })

    const handleUserCreate = (e) => {
        e.preventDefault()
        
        if(userCredentials.password !== userCredentials.passwordConfirm){
            window.alert("The password and confirmation password you entered do not match");
            return
        }
        
        postAPI("userCreate", userCredentials)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const updateUserCredientials = (e) => {
        
        const email = document.getElementById("userEmail").value
        const password = document.getElementById("userPassword").value
        const passwordConfirm = document.getElementById("userPasswordConfirm").value
        const credentials = {email, password, passwordConfirm}
        setUserCredentials(credentials)

        checkPasswordMatch(credentials)
    }

    const checkPasswordMatch = (credentials) => {
        if(credentials.password !== credentials.passwordConfirm && credentials.passwordConfirm.length > 0){
            document.getElementById("userPasswordConfirm").classList = "form-field-error"
        } else {
            document.getElementById("userPasswordConfirm").classList = "form-field-pass"
        }
    }

    return(

        <form id="user-signup-form" class="user-form" onSubmit={handleUserCreate} onChange={updateUserCredientials}>  
            <label for="userEmail">Email:</label>
            <br/>
            <input type="email" id="userEmail" required />

            <br/>

            <label for="userPassword">Password:</label>
            <br/>
            <input type="password" id="userPassword" required />
            
            <br/>

            <label for="userPasswordConfirm">Confirm Password:</label>
            <br/>
            <input type="password" id="userPasswordConfirm" required />

            <br/>

            <input type="submit" value="Signup" />
        </form>

    )
}

export default UserSignUp;