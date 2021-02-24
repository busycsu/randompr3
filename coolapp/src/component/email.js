import React, {Component} from 'react'

class Email extends Component {
    constructor(){
        super();
    }
    ValidateEmail =()=>
    {
        var inputText  = document.getElementById("email").value;
        console.log(inputText)
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.match(mailformat))
        {
            if(inputText.slice(inputText.length-3)=="edu"||inputText.slice(inputText.length-3)=="com"){
                alert("Valid email address!");
                return true;
            }
            else{
                alert("You have entered an invalid email address!");
                return false;
            }
        }
        else
        {
            alert("You have entered an invalid email address!");
            return false;
        }
    }

    render() {
        return (
            <div>
                <form name="form1" action="#"> 

                <label className="emailLabel" for="email">Email:</label>
                   <br />
                        <input className="emailadd" id='email' />

                        <button value="Submit" onClick={this.ValidateEmail}>Submit!</button>
                    
                </form>
            </div>
        );
    }
}

export default Email;