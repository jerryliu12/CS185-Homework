
function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//window.addEventListener("scroll", backToTop())

window.onscroll = function() {backToTop()};

function backToTop(){
    var vpHeight = $(window).height()
    var totalHeight = document.documentElement.scrollHeight
    var currScroll = document.documentElement.scrollTop
    var canTravel = totalHeight - vpHeight
    // console.log("precheck")
    // console.log(vpHeight)
    // console.log(totalHeight)
    // console.log(currScroll)
    // console.log(canTravel)
    // console.log("postcheck")
    var topButton = document.getElementById("topButton");

    if ( (currScroll*1.0)/canTravel >= 0.25){
        //var btn = document.createElement("button")
        //btn.innerHTML = "Return to top"
        //console.log(((currScroll*1.0)/canTravel))
        topButton.style.display = "block";
    }
    else {
        //console.log(((currScroll*1.0)/canTravel))
        //console.log($(document).height())
        topButton.style.display = "none";
    }
}

function showPic(gallery, picture){
    
    var background = document.getElementById("background");
    //var frame = document.createElement("div");
    var pic = document.createElement("img");

    background.style.display = "block"
    var child = background.lastElementChild;
    while (child){
        background.removeChild(child);
        var child = background.lastElementChild;
    }

    if (gallery == 'f'){
        switch(picture){
            case 1:
                pic.src = "photos/noodles.JPG";
                //background.appendChild(pic);
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
                //background.appendChild(pic);
                break;
            case 2:
                pic.src = "photos/IMG_7253.JPG";
                //background.appendChild(pic);
                break;
            case 3:
                pic.src = "photos/IMG_7252.JPG";
                //background.appendChild(pic);
                break;
            case 4:
                pic.src = "photos/IMG_7331.JPG";
                //background.appendChild(pic);
                break;   
            case 5:
                pic.src = "photos/IMG_7298.JPG";
                //background.appendChild(pic);
                break;
            case 6:
                pic.src = "photos/IMG_7312.JPG";
                //background.appendChild(pic);
                break;
            case 7:
                pic.src = "photos/IMG_7336.JPG";
                //background.appendChild(pic);
                break;
            case 8:
                pic.src = "photos/IMG_7337.JPG";
                //background.appendChild(pic);
                break;  
            default:
                console.log("No img found for trip category")
                break;
        }
    }
    //frame.className = "bigPicture"
    //frame.appendChild(pic);
    //pic.style.margin = "0 auto";
    pic.className = "center"
    background.appendChild(pic);
    //document.getElementsByTagName("body")[0].appendChild(pic);
    
}

//window.onclick = function {exitBigPicture};

function exitBigPicture(){
    if (document.getElementById("background").style.display == "block"){
        document.getElementById("background").style.display = "none"
    }
}