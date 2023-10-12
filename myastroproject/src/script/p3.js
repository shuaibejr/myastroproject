
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');

function toggleMode() {
  body.classList.toggle('dark-mode');


    let modeMessage = "";
    if (body.classList.contains('dark-mode')){
        modeMessage = "Dark Mode";

    } else{
        modeMessage = "Light Mode";
    }



}

modeToggle.addEventListener('click', toggleMode);

/* slide fade in */

// Write your code below
const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } 
    //for extra practice slide out when ratio becomes 0.
    else{
      entry.target.classList.remove('slide-in');
    }
   
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})

items.forEach(item => {
  observer.observe(item);
})