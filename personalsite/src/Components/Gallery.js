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