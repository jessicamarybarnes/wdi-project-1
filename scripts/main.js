console.log('hello')

window.addEventListener('DOMContentLoaded', () => {


// .........................CREATE THE GRID ............................

  // const grid = []
  //
  // for (let i=0; i<6; i++) {
  //   const row = []
  //   for (let x=0; x<7; x++) {
  //     const box = document.createElement
  //     box.className = 'white'
  //     row.push(box)
  //   }
  //   grid.push(row)
  // }

// .........................TOKEN DROP CHECK............................

  const box = document.querySelector('.box')
  const grid = document.querySelector('.grid')
  const player1 = document.querySelector('.player1')
  const player2 = document.querySelector('.player2')


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




})
