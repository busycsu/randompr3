import React, {Component} from 'react'

class Videos extends Component {

    componentDidMount(){
        var modal = document.getElementById("myModal");
        var v = document.getElementById("test")            
        var divs = document.getElementsByClassName('myImg');
        for (var i = 0; i < divs.length; i++) {
            var img = divs[i];

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            divs[i].addEventListener("click",function(event){
                modal.style.display = "block";
                modalImg.src = this.src;
                event.preventDefault();
            }, false);
            
            // When the user clicks on <span> (x), close the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modalImg.pause();
                    modal.style.display = "none";
                }
            }
        }
    }

    render() {

        return (
            <div>
                <div class="row">
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video1.mp4" type="video/mp4" controls>                           
                        </video>
                    </div>
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video2.mp4" type="video/mp4" controls >               
                        </video>
                    </div>
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video3.mp4" type="video/mp4" controls>
                        </video>
                    </div>
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video3.mp4" type="video/mp4" controls>
                        </video>
                    </div>
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video1.mp4" type="video/mp4" controls>                           
                        </video>
                    </div>
                    <div class="column">
                        <video class="myImg" width="280" height="200" src="/media/videos/video2.mp4" type="video/mp4" controls >               
                        </video>
                    </div>
                    <div id="myModal" class="modal">                
                        <video class="modal-content" id="img01" type="video/mp4" controls /> 
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Videos;