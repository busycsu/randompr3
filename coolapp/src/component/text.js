import React, {Component} from 'react'

class Text extends Component {
    render() {
        return (
                <div class="row_2"> 
                    <div class="column_3">
                        <img class="myImg" src="/media/images/pic9.jpg" style={{width:"100%"}} />
                    </div>
                    <div class="column_2">
                        <h1>About me</h1>
                        <p id="me_content">{"Highly skilled and detail-oriented IT professional with hands-on practicum and experience in computer architecture, \
                                computer security , computer networking, software development lifecycle (SDLC),\
                                machine learning, and web development. Key focus includes analytics, teamwork,\
                                and creative approach in problem-solving to satisfy corporate objectives, \
                                identify new opportunities, analyze codes, and develop effective solutions. \
                                An avid learner seeking admission in Computer Engineering Program to bolster \
                                technical and leadership skills in a tech-savvy environment."}</p>
                    </div>
                    
                </div>
        );
    }
}

export default Text;