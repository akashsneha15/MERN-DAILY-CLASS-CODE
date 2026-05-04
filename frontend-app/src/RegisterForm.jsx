import React from "react"
import { Component } from "react"
class RegisterForm extends Component{
render(){
    return(
        <form action="">
        <fieldset>
        <h1>Regstration Form</h1>
        <p>
            <label htmlFor="">Name</label>
            <input type="text"placeholder="Enter your name " id=""/><br /><br />

            <label htmlFor="">Password</label>
            <input type="text"placeholder="Enter password " id=""/><br /><br />

            <label htmlFor="">PhoneNo</label>
            <input type="tel" pattern="[6-9]{1} [0-9]{9}" placeholder="+91" id=""/><br /><br />

            <button type="submit">Register</button>
            <button type="reset">Reset</button>
            
        </p>
        </fieldset>
        </form>

    
    )
}

}

export default RegisterForm ;