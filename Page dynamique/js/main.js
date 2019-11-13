
var menu = document.getElementById('menu');
var dropdown = document.getElementById('dropbutton');
var visible = false;
var espace = false;


/*Menu hamburger*/
if(visible == false){
    menu.addEventListener('click', function button(){
        if(visible == false){
        visible = true;
        document.getElementById("hamburger").style.display = "block";
        document.getElementById("content_section").classList.add("deplacement"); 
         
    }
        else{
            visible = false;
            document.getElementById("hamburger").style.display = "none";
            document.getElementById("content_section").classList.remove("deplacement"); 
            

        }
})};




/*Dropdown*/ 
if(espace == false){
        dropdown.addEventListener("click", function button_espace(){
        if(espace == false){
        espace = true;
        document.getElementById("dropcontent").style.display ="block";

    }
        else{
            espace = false;
            document.getElementById("dropcontent").style.display = "none";
        }
})};


/*Animation scroll/navbar */ 

window.onscroll = function(){

    var scroll = window.scrollY;
    console.log(scroll);
    if(scroll >= 15){
        document.getElementById("barre-nav").classList.add("fade-out");
        console.log('hello');
    }
    else{
        document.getElementById("barre-nav").classList.add("fade-in");
        document.getElementById("barre-nav").classList.remove("fade-out");
        console.log('hello2');
    }
    /* Animation image + titres */ 

    if(scroll >= 150){
        document.getElementById("anim").classList.remove("fade-out");
        document.getElementById("anim").classList.add("fade-in");
        document.getElementById("anim2").classList.remove("fade-out");
        document.getElementById("anim2").classList.add("fade-in");
        document.getElementById("anim3").classList.remove("fade-out");
        document.getElementById("anim3").classList.add("fade-in");
    }
    else{
        document.getElementById("anim").classList.add("fade-out");
        document.getElementById("anim2").classList.add("fade-out");
        document.getElementById("anim3").classList.add("fade-out");
}};

/* Animation appartion Titre*/ 

document.getElementById("Hello").classList.add("fade-in");

/* Animation Titre dynamique*/ 


