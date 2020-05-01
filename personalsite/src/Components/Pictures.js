import React, { Component } from 'react';

function showPic(gallery, picture){
    var background = document.getElementById("background");
    var pic = document.createElement("img");
    background.style.display = "flex"
    background.style.flexDirection = "row"
    var child = background.lastElementChild;
    while (child){
        background.removeChild(child);
        var child = background.lastElementChild;
    }

    if (gallery == 'f'){
        switch(picture){
            case 1:
                pic.src = "photos/noodles.JPG";
                break;
            default:
                console.log("No img found for food category")
                break;
        }
    }
    else if (gallery == 't'){
        switch(picture){
            case 1:
                pic.src = "photos/IMG_7248.JPG";
                break;
            case 2:
                pic.src = "photos/IMG_7253.JPG";
                break;
            case 3:
                pic.src = "photos/IMG_7252.JPG";
                break;
            case 4:
                pic.src = "photos/IMG_7331.JPG";
                break;   
            case 5:
                pic.src = "photos/IMG_7298.JPG";
                break;
            case 6:
                pic.src = "photos/IMG_7312.JPG";
                break;
            case 7:
                pic.src = "photos/IMG_7336.JPG";
                break;
            case 8:
                pic.src = "photos/IMG_7337.JPG";
                break;  
            default:
                console.log("No img found for trip category")
                break;
        }
    }
    pic.className = "center"
    background.appendChild(pic);
    
}

function exitBigPicture(){
    if (document.getElementById("background").style.display == "flex"){
        document.getElementById("background").style.display = "none"
    }
}

export class Images extends Component {
    render() {
        return (
            <div>
                <div class="galSections">
                    <h4>Cool Food</h4>
                    <div class="gallery">
                        <div class="expand"><img src="photos/noodles.JPG" id="f1" alt="Bun Bo Hue" onClick={() => showPic('f',1)}></img></div>
                    </div>
                    <h4>Trip to Santa Cruz</h4>
                    <div class="gallery">
                        <div class="expand"><img src="photos/IMG_7248.JPG" id="t1" alt="pic of trip!" onClick={() => showPic('t',1)}
                            title="Stay hydrated everyone!!"></img></div>
                        <div class="expand"><img src="photos/IMG_7253.JPG" id="t2" alt="pic of trip!" onClick={() => showPic('t',2)}
                            title="This was actually a candid!"></img></div>
                        <div class="expand"><img src="photos/IMG_7252.JPG" id="t3" alt="pic of trip!" onClick={() => showPic('t',3)}></img></div>
                        <div class="expand"><img src="photos/IMG_7331.JPG" id="t4" alt="pic of trip!" onClick={() => showPic('t',4)}></img></div>
                        <div class="expand"><img src="photos/IMG_7298.JPG" id="t5" alt="pic of trip!" onClick={() => showPic('t',5)}></img></div>
                        <div class="expand"><img src="photos/IMG_7312.JPG" id="t6" alt="pic of trip!" onClick={() => showPic('t',6)}></img></div>
                        <div class="expand"><img src="photos/IMG_7336.JPG" id="t7" alt="pic of trip!" onClick={() => showPic('t',7)}></img></div>
                        <div class="expand"><img src="photos/IMG_7337.JPG" id="t8" alt="pic of trip!" onClick={() => showPic('t',8)}></img></div>
                    </div>
                </div>
                <div class="bigBackground" id="background" onClick={exitBigPicture}>
                    <div class="bigPicture" id="pict">
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;