
function backToTop(){
    var vpHeight = $(window).height()
    var totalHeight = $(document).height()
    var currScroll = $(window).scrollTop()
    var canTravel = totalHeight - vpHeight

    if (Math.floor(currScroll/canTravel) >= 0.25){
        
    }
}