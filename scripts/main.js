console.log('hello')

window.addEventListener('DOMContentLoaded', () => {


  const gridElement = document.querySelector('.grid')
  const player1 = document.querySelector('.player1')
  const player2 = document.querySelector('.player2')

// .........................CREATE THE GRID ............................

//created a grid array

  const grid = []

  //loop to create 6 rows

  for (let i=0; i<6; i++) {
    const row = []
    //loop to create 7 columns
    for (let x=0; x<7; x++) {
      //create a div element called box after each loop
      const box = document.createElement('div')
      //giving box a classname of white and box
      box.className = 'white box'
      //adding an event listener to each box that changes the class to red
      box.addEventListener('click', (e) => {
        e.target.classList.add('red')
        console.log('row', e.target.getAttribute('data-row'), 'column', e.target.getAttribute('data-column'))
      })
      //adding an attribute of data-row to the box with a value of i
      box.setAttribute('data-row', i)
      //adding an attribute of data-column to the box with a value of x
      box.setAttribute('data-column', x)

      // adding the box to the html one by one - makes it display on the page
      gridElement.append(box)
      //pushing the box element to the the row array
      row.push(box)
    }
    //pushing the row to the grid array
    grid.push(row)
  }
console.log(grid)
// .........................TOKEN DROP CHECK............................


  //a function that checks that the class of box is white and whether the div below is red or black

  const isWhite  = function(e) {
    if (e.classList.contains('white')) {
      //to include... if the div below contains red or black {
      e.classList.remove('white')
      e.classList.add('red')
    } else {
      console.log('Not an available move')
    }
  }


  // add attributes to the grid creation where it returns the x, i values of the boxes

  // in a seperate function when a box is clicked, find the x, i values of that and then use that to find the one below.




})
