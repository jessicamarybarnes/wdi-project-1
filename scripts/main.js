console.log('hello')

window.addEventListener('DOMContentLoaded', () => {


  const gridElement = document.querySelector('.grid')
  const player1 = document.querySelector('.player1')
  const player2 = document.querySelector('.player2')

// .........................CREATE THE GRID ............................
// .........................ADD EVENT LISTENER ............................

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
        validMove(e)
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



// .........................CHECK FOR VALID MOVE................................


  //a function that checks that the class of box is white, then checks if the white
  //space is on the last column, else checks if there are divs with the class of red and yellow below it.
  //if not, state that this is not a valid move.

  //call this function when the box is clicked.

  const validMove = function(e) {
    if (e.target.classList.contains('white')) {
      if (e.target.getAttribute('data-row') === '5') {
        e.target.classList.add('red')
      } else {
        //check if there are divs below with the class of red or yellow
        const dataRowString = e.target.getAttribute('data-row')
        const dataRow = parseInt(dataRowString)
        const dataColumnString = e.target.getAttribute('data-column')
        const dataColumn = parseInt(dataColumnString)
        const boxBelow = grid[dataRow + 1][dataColumn]
        if (boxBelow.classList.contains('red' || 'yellow')) {
          e.target.classList.add('red')
        } else {
          alert('This is not a valid move. Please click an alternative white space.')
        }
      }
    } else {
      alert('This is not a valid move. Please click an alternative white space.')
    }
  }






})
