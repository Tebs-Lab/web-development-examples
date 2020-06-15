window.onload = function() {
    // querySelector gets the FIRST matching element
    // which is safe if we're querying for an id
    let clickBtn = document.querySelector('#click-button');

    // This is an "anonymous function" being passed
    // as an argument to the 'addEventListener' function.
    // Sometimes this confuses people, but it is *very* common in JS
    clickBtn.addEventListener('click', function(event) {
        alert("You clicked the button labeled: " + clickBtn.innerText);
    })

    // querySelectorAll gets ALL the matching elements, not just one
    let unclickables = document.querySelectorAll('.untouchable');
    for(let unclickable of unclickables) {
        unclickable.addEventListener('mouseenter', randomlyMoveElement);
    }
}
  
// We can also write the event handling functions seperately 
// then register them by name
function randomlyMoveElement(event) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let newX = Math.floor(Math.random() * windowWidth);
    let newY = Math.floor(Math.random() * windowHeight);

    event.target.style.left = newX + 'px';
    event.target.style.top = newY + 'px';
    event.target.style.position = 'absolute';
}

/* 
    Micro-exercise: Create a new type of button that toggles its background
    color between black and white. You'll need to: 
     
     * add the button to the HTML.
     * give the button a class or id.
     * select the button using querySelector.
     * add an event listener for the click event on that button.
     * change the css backgroundColor property each time the button is clicked.
*/
