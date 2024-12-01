function turnBlue(element){
    element.style.backgroundColor = "var(--primary-color)";

}

function turnBlack(element){
    element.style.color = "white"
    element.style.backgroundColor = "var(--black)";

}

function turnGrey(element){
    element.style.backgroundColor = "";

}

function hoverNavLink(element){
    element.style.color = "var(--primary-color)";
    element.style.fontSize = "large";
}

function unhoverNavLink(element){
    element.style.color = "white";
    element.style.fontSize = "medium";
    
}

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#hero_nav').offset().top + $('#hero_nav').height();

window.onload = function() {
    // Select the element by its ID (or class, tag, etc.)
    document.getElementById("nav").style.display = "none";
};

// on scroll, 
$(window).on('scroll',function(){
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop < mainbottom) {
        document.getElementById("nav").style.display = "flex";
        $('#nav').addClass('nav');
    } else {
        $('#nav').removeClass('nav');
   }

});