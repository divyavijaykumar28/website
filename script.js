const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Your trip search has been completed! We will show the best options for you.");

});


const signup = document.querySelector(".signup");


signup.addEventListener("click", function(){

    alert("Welcome to Book My Trip! Sign up page opening...");

});
const account = document.querySelector(".account");


account.addEventListener("click", function(){

    alert("Please login to access your account.");

});
const bookButtons = document.querySelectorAll(".hotel-details button");


bookButtons.forEach(function(button){

    button.addEventListener("click",function(){

        alert("Hotel selected successfully! Continue your booking.");

    });

});

const searchButton = document.querySelector(".search-box button");
searchButton.addEventListener("click",function(){
   let searchValue = document.querySelector(".search-box input").value;
          if(searchValue === ""){
              alert("Please enter your search destination");

    }

    else{
        alert("Searching for : " + searchValue);

    }

});
document.querySelectorAll("a").forEach(function(link){

    link.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});