console.log('hello')

window.addEventListener('DOMContentLoaded', () => {


  const gridElement = document.querySelector('.grid')
  const red = document.querySelector('.red')
  const yellow = document.querySelector('.yellow')
  const winner1 = document.querySelector('.winner-p1')
  const winner2 = document.querySelector('.winner-p2')
  const welcome = document.querySelector('.welcome')
  const p1PlayAgain = document.querySelector('#p1-play-again')
  const p2PlayAgain = document.querySelector('#p2-play-again')
  let clicks = 0

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
        console.log(clicks)
        validMove(e)
        checkWonHorizontally(e)
        checkWonVertically(e)
        findDiagonalRight(e)
        findDiagonalLeft(e)
        console.log(grid)
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
        player(e)
        return clicks++
      } else {
        //check if there are divs below with the class of red or yellow
        const dataRowString = e.target.getAttribute('data-row')
        const dataRow = parseInt(dataRowString)
        const dataColumnString = e.target.getAttribute('data-column')
        const dataColumn = parseInt(dataColumnString)
        const boxBelow = grid[dataRow + 1][dataColumn]
        if (boxBelow.classList.contains('red') || boxBelow.classList.contains('yellow')) {
          player(e)
          return clicks++
        } else {
          alert('This is not a valid move. Please click an alternative white space.')
        }
      }
    } else {
      alert('This is not a valid move. Please click an alternative white space.')
    }
  }


//...........................COUNTER COLOUR................................

// I have created a counter for 'clicks' so that for every even number of clicks, the class changes to red and every odd number to yellow.

  const player = function(e) {
    if (clicks % 2 === 0) {
      e.target.classList.remove('white')
      e.target.classList.add('red')
    } else {
      e.target.classList.remove('white')
      e.target.classList.add('yellow')
    }
  }

//  ..............................LAST MOVE......................................



//  .........................CHECK VERTICAL..................................

//loop through the grid and check for consecutive i values with x not changing

const checkHasWon = function() {

}

//...........................CHECK HORIZONTAL.........................................

  //get the clicked row value as an integer
  //loop through the row
  //create a variable to count the number of consecutive boxes with the same class
  //when it reaches the same class value as the one thats been clicked, add 1 to the counter
  //when it reaches on that isn't the same class value it returns the counter to 0.
  //if the result is less than 4, then it is not a win.

  const checkWonHorizontally = function(e) {
    const clickedRowString = e.target.getAttribute('data-row')
    const clickedRow = parseInt(clickedRowString)
    const classOfClicked1 = e.target.getAttribute('class').replace('box ', '')

    let counter = 0
    for (let i=0; i<grid[clickedRow].length; i++) {
      if (grid[clickedRow][i].classList.contains(classOfClicked1) === true) {
        counter = counter + 1
      } else {
        counter = 0
      }
      if (counter === 4) {
        if (classOfClicked1 === 'red') {
          gridElement.style.display = 'none'
          welcome.style.display = 'none'
          winner1.style.display = 'flex'
        } if (classOfClicked1 === 'yellow') {
          gridElement.style.display = 'none'
          welcome.style.display = 'none'
          winner2.style.display = 'flex'
        }
      }
    }
  }


// ..........................CHECK VERTICAL......................................

  const checkWonVertically = function(e) {
    const clickedColumnString = e.target.getAttribute('data-column')
    const clickedColumn = parseInt(clickedColumnString)
    const classOfClicked2 = e.target.getAttribute('class').replace('box ', '')

    let counter = 0
    for (let x=0; x<grid.length; x++) {
      if (grid[x][clickedColumn].classList.contains(classOfClicked2) === true) {
        counter = counter + 1
      } else {
        counter = 0
      }
      if (counter === 4) {
        if (classOfClicked2 === 'red') {
          gridElement.style.display = 'none'
          welcome.style.display = 'none'
          winner1.style.display = 'flex'
        } if (classOfClicked2 === 'yellow') {
          gridElement.style.display = 'none'
          welcome.style.display = 'none'
          winner2.style.display = 'flex'
        }
      }
    }
  }


// ........................CHECK DIAGONAL RIGHT..................................

  const findDiagonalRight = function(e) {
    const classOfClickedBox = e.target.getAttribute('class').replace('box ', '')

    const width = grid[0].length
    // 7
    const height = grid.length
    // 6

    for (let i=0; i<=width + height; i++) {
      let counter = 0
      for (let x=0; x<=i; x++) {
        const y = i - x
        if (y < height && x < width) {
          const cell = grid[y][x]
          if (cell.classList.contains(classOfClickedBox) === true) {
            counter = counter + 1
          } else {
            counter = 0
          }
          if (counter === 4) {
            if (classOfClickedBox === 'red') {
              gridElement.style.display = 'none'
              welcome.style.display = 'none'
              winner1.style.display = 'flex'
            } if (classOfClickedBox === 'yellow') {
              gridElement.style.display = 'none'
              welcome.style.display = 'none'
              winner2.style.display = 'flex'
            }
          }
        }
      }
    }
  }



// ........................CHECK DIAGONAL LEFT..................................



  const findDiagonalLeft = function(e) {
    const classOfClickedBox = e.target.getAttribute('class').replace('box ', '')
    const width = grid[0].length
    const height = grid.length

    for (let i = 0; i < height; i++) {
      for (let x = 0; x < width; x++) {
        if (grid[i][x].classList.contains(classOfClickedBox)) {
          let counter = 0
          for (let y = 0; y < 4; y++) {
            if (i - y >= 0 && x - y >= 0) {
              const cell = grid[i - y][x - y]

              if (cell.classList.contains(classOfClickedBox)) {
                counter = counter + 1
              } else {
                counter = 0
              }
              if (counter === 4) {
                if (classOfClickedBox === 'red') {
                  gridElement.style.display = 'none'
                  welcome.style.display = 'none'
                  winner1.style.display = 'flex'
                } if (classOfClickedBox === 'yellow') {
                  gridElement.style.display = 'none'
                  welcome.style.display = 'none'
                  winner2.style.display = 'flex'
                }
              }
            }
          }
        }
      }
    }
  }

  // const findDiagonalLeft = function(e) {
  //   const classOfClickedBox = e.target.getAttribute('class').replace('box ', '')
  //
  //   const width = grid[0].length
  //   // 7
  //   const height = grid.length
  //   // 6
  //
  //   for (let i=height; i>=0; i--) {
  //     let counter = 0
  //     for (let x=0; x<=i; x++) {
  //       const y = i
  //       console.log(x, 'is x')
  //       console.log('incorect y', y)
  //       console.log('this is i', i)
  //       if (y < height && x < width) {
  //         const cell = grid[y][x]
  //         if (cell.classList.contains(classOfClickedBox) === true) {
  //           counter = counter + 1
  //         } else {
  //           counter = 0
  //         }
  //         if (counter === 4) {
  //           if (classOfClickedBox === 'red') {
  //             gridElement.style.display = 'none'
  //             welcome.style.display = 'none'
  //             winner1.style.display = 'flex'
  //           } if (classOfClickedBox === 'yellow') {
  //             gridElement.style.display = 'none'
  //             welcome.style.display = 'none'
  //             winner2.style.display = 'flex'
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

//SECOND EFFORT AT DIAGONAL LEFT

  //
  // const findDiagonalLeft = function(e) {
  //   const classOfClickedBox = e.target.getAttribute('class').replace('box ', '')
  //
  //   const width = grid[0].length
  //   // 7
  //   const height = grid.length
  //   // 6
  //
  //   for (let x=0; x<3; x++) {
  //     let counter = 0
  //     for (let i=0; i<=x; i++) {
  //       console.log('i is ' + i)
  //       console.log('x is ' + i)
  //       const y = x
  //       console.log('y is ' + y)
  //       if (y < height && x < width) {
  //         const cell = grid[y][x]
  //         if (cell.classList.contains(classOfClickedBox) === true) {
  //           counter = counter + 1
  //         } else {
  //           counter = 0
  //         }
  //         if (counter === 4) {
  //           if (classOfClickedBox === 'red') {
  //             gridElement.style.display = 'none'
  //             welcome.style.display = 'none'
  //             winner1.style.display = 'flex'
  //           } if (classOfClickedBox === 'yellow') {
  //             gridElement.style.display = 'none'
  //             welcome.style.display = 'none'
  //             winner2.style.display = 'flex'
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  //................................3RD EFFORT .............................

  //
  // const findDiagonalLeft = function(e) {
  //   const clickedColumnString = e.target.getAttribute('data-column')
  //   const clickedColumn = parseInt(clickedColumnString)
  //   const classOfClicked2 = e.target.getAttribute('class').replace('box ', '')
  //   const clickedRowString = e.target.getAttribute('data-row')
  //   const clickedRow = parseInt(clickedRowString)
  //
  //   let counter = 0
  //   for (let position = -3; position<= 3; position++){
  //     console.log(position)
  //     console.log(`grid[${clickedRow + position}][${clickedColumn - position}]`)
  //     if (grid[clickedRow + position][clickedColumn - position].classList.contains(classOfClicked2) === true) {
  //
  //       counter = counter + 1
  //     } else {
  //       counter = 0
  //     }
  //   }
  //
  //
  //   for (let x=0; x<grid.length; x++) {
  //     if (grid[x][clickedColumn].classList.contains(classOfClicked2) === true) {
  //       counter = counter + 1
  //     } else {
  //       counter = 0
  //     }
  //     if (counter === 4) {
  //       if (classOfClicked2 === 'red') {
  //         gridElement.style.display = 'none'
  //         welcome.style.display = 'none'
  //         winner1.style.display = 'flex'
  //       } if (classOfClicked2 === 'yellow') {
  //         gridElement.style.display = 'none'
  //         welcome.style.display = 'none'
  //         winner2.style.display = 'flex'
  //       }
  //     }
  //   }
  // }


// ................................PLAY AGAIN.......................................

  p1PlayAgain.addEventListener('click', () => {
    location.reload()
  })

  p2PlayAgain.addEventListener('click', () => {
    location.reload()
  })


})
