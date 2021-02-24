import React, {Component} from 'react'

class Images extends Component {
    constructor() {
        super();
    }

    onClickHandler = (event) => {
        event.stopPropagation();
    }

    /* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text */
    showImgOverlay = (event) =>{
        var overlay = document.getElementById("overlay");
        var img = document.getElementById("overlay-item");
        
        overlay.style.display = "block";
        img.src = event.target.src;
    }

    hideImgOverlay =()=> {
        var overlay = document.getElementById("overlay");

        overlay.style.display = "none";
    }

    componentDidMount(){
        // Get the modal
        var modal = document.getElementById("myModal");
                    
        var divs = document.getElementsByClassName('myImg');
        for (var i = 0; i < divs.length; i++) {
            var img = divs[i];

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
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


    render() {
        
        return (
            <div>
                <br />
                <div class="row"> 
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic11.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic12.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic11.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic12.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic9.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic11.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic9.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic11.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic10.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic12.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic9.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic11.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic12.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic8.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    <div class="column">
                        <img class="myImg" src={"/media/images/pic8.jpg"} style={{width: "100%"}} />
                    </div>
                    <div class="column">
                        <img class="myImg" src="/media/images/pic10.jpg" style={{width: "100%"}} />
                    </div>  
                    
                </div>

                {/* <div id="overlay" className="overlay" onClick={this.hideImgOverlay}>
                    <img id="overlay-item" className="overlay-item" onClick={this.onClickHandler}/>
                </div> */}
                <div id="myModal" class="modal">
                    <img class="modal-content" id="img01" />
                </div>
          </div>
        );
    }
}

export default Images;