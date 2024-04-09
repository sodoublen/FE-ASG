//Navigation bar hiding when scrolled
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").classList.remove("navbar-hide");
    } else {
        document.querySelector(".navbar").classList.add("navbar-hide");
    }
    prevScrollpos = currentScrollPos;
};
//

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

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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