//Slider
const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter = 1;
    slidefun(counter);
}
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n) {
    counter= n;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display ="none";
    }
    for(i = 0; i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter -1].classList.add('active');
}

//Number counting transition
const isInViewport = (element) => {// Function to check if element is in viewport
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const startCountingWhenInView = () => {// Function to start counting when element is in viewport
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        if (isInViewport(counter)) {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 1000; // Adjust this value to change the speed of the counter
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        }
    });
};

window.addEventListener('scroll', startCountingWhenInView);// Add event listener for scroll event

startCountingWhenInView();// Call the function initially to check if any counters are already in view
//

// welcome window pop up
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("welcomePopup");
    var closeBtn = document.querySelector(".close-btn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 10 && !popup.classList.contains("shown")) {
            popup.style.display = "block";
            popup.classList.add("shown");
        }
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
//

// Back to the top 
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        document.body.scrollIntoView({behavior: "smooth"}); // Scroll to the top of the body
    });
});
//

//Cookies
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{  

  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "Cookie=iProperty; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("Cookie=iProperty"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
//

