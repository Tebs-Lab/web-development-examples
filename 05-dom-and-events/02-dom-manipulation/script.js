window.onload = function() {
    // Create the thing to hold our 100 elements. 
    let container = document.createElement('div');
    
    // Set the hieght, width, and background color of our container
    // center it horizontally with margin = auto
    // and use grid layout to make the boxes nice. 
    container.style.height = '120px';
    container.style.width = '120px';
    container.style.backgroundColor = 'gray';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)'
  
    for(let i = 0; i < 100; i++) {
      let box = document.createElement('span');
      box.style.border = '1px solid black';
      box.style.backgroundColor = 'blue';
  
      container.appendChild(box);
    }
  
    document.body.appendChild(container);

    // Micro-exercise: add an if statement inside the for loop such that
    // the grid becomes a checkerboard of blue and red squares... 
    // (hint: i % 2 === 0 will tell you if the variable i is odd or even)
}