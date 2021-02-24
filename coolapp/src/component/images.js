import React, {Component} from 'react'

class Images extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
        // top btn
        this.topbtndisplay();
        // Get the modal
        var modal = document.getElementById("myModal");
                    
        var divs = document.getElementsByClassName('myImg');
        for (var i = 0; i < divs.length; i++) {
            var img = divs[i];

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var modalImg = document.getElementById("img01");
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                // captionText.innerHTML = this.alt;
            }
            
            // When the user clicks on <span> (x), close the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }

    topbtndisplay = () =>{
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }
    }

    topFunction =()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    

    render() {
        
        return (
            <div>
                <br />
                <div class="row"> 
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src={process.env.PUBLIC_URL +"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>  
                    
                </div>
                <button onClick={this.topFunction} id="myBtn" title="Go to top">Top</button>
                <div id="myModal" class="modal">
                    <img class="modal-content" id="img01" />
                </div>
          </div>
        );
    }
}

export default Images;