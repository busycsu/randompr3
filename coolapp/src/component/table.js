import React, {Component} from 'react'

class Table extends Component {
    render() {
        

        return (
            <div>
                <h1>Projects</h1>  
                <table class="table">
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Details</b></td>
                        <td style={{paddingRight:"5px", paddingLeft:"5px"}}><b>Year</b></td>
                    </tr>
                    <tr>
                        <td width = {200}><a href="https://github.com/busycsu/WHP"><img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width:"100%"}} /></a></td>
                        <td>Transcribe the conversation between the patients and doctors. Generate a post-visit reports for patienst to review. Save the time for doctor to write the report for patients</td>
                        <td class="year">2020</td>
                    </tr>
                    <tr>
                        <td width = {200} ><a href="https://github.com/busycsu/finance-tracker"><img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width:"100%"}} /></a></td>
                        <td>Developed a finace tracker social media app based on Ruby framework. Allows user to track their stocks in real time. Allows users to find their friends' stocks. Implmented mySql for database.</td>
                        <td class="year">2020</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;