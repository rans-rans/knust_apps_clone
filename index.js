const hambuger = document.querySelector(".navbar__toggle");
const nav_container = document.querySelector(".nav__container");
const drop_options = document.querySelector(".drop__options");
const sign_in  = document.querySelector("#sign__in");
let isDropDown = false;


//function to be triggered when you click the hamburger icon
hambuger.addEventListener("click", () => {
    if (drop_options.style.display == "none") {
        isDropDown = true;
        drop_options.style.display = "flex";
        nav_container.style.height = "18rem";
    } else {
        drop_options.style.display = "none";
        nav_container.style.height = "3.5rem";
        isDropDown = false;
    }
});

//function to be trigger when the window is resized
const min_width = 715;

window.addEventListener("resize",()=>{
    if (window.innerWidth > min_width) {
        drop_options.style.display = "flex";
        nav_container.style.height = "3.5rem";
    }else{
        if(isDropDown == true ){
            drop_options.style.display = "flex";
            nav_container.style.height = "18rem";
        }else{
        drop_options.style.display = "none";
        nav_container.style.height = "3.5rem";
        }
    }
});

//function to be triggered when the sign-in button is pressed
sign_in.addEventListener("click", ()=>{
    console.log("worked")
    window.location = "homepage.html";
});


