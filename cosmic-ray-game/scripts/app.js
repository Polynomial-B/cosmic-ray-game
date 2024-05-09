const grid = document.querySelector('.grid')
const cells = []

const width = 20
const height = 20
const gridCellCount = width * height

let isGameOver = false
let isWin = false

let mantaEnergy = 3
const mantaEnergyValue = document.getElementById('manta-energy')

function showEnergyValue() {
    mantaEnergyValue.innerText = `Energy remaining: ${mantaEnergy}`
}


function createGrid() {
    for(let i = 0; i < gridCellCount; i++) {
        const cell = document.createElement('div')
        cell.setAttribute('data-index', i)
        cells.push(cell)
        grid.appendChild(cell)


// * GRID REFERENCE COMMENT IN/OUT ---------------------------------------------------     
// ? ---------------------------------------------------------------------------------
// * ---------------------------------------------------------------------------------
// ? ---------------------------------------------------------------------------------
        // cell.innerText = i     
// ? ---------------------------------------------------------------------------------
// * ---------------------------------------------------------------------------------
// ? ---------------------------------------------------------------------------------

    }
}

function createWall() {
    
    if (!isGameOver) {
        // Create main side walls
        for(let i = 0; i < gridCellCount; i = i + 20) {
            cells[i].classList.add('wall')
            cells[i + (width - 1)].classList.add('wall')
        }
        for(let i = 1; i < width; i ++) {
            if(i !== 9 & i !== 10) {
                cells[i].classList.add('wall')
            }
    
        }
        cells[9].classList.add('end')
        cells[10].classList.add('end')

        // Create internal walls
        let blockIndex = [161, 162, 163, 176, 177, 178, 181, 182, 183, 196, 197, 198, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398]
        
        blockIndex.forEach((cell) => {
            cells[cell].classList.add('wall')
        
        })
    }
}



// ! Manta Ray


let startingPosition = 369

let mantaIndex = startingPosition

function renderManta() {
    cells[mantaIndex].classList.add('manta-ray')
}


// * RENDER ------------------------------------------------------------------


function render() {
    mantaIndex = startingPosition
    isGameOver = false
    isWin = false
    createGrid()
    createWall()
    showEnergyValue()
    renderManta()
}

render()






// ? Planet One Movement -------------------------------------------------------


let planetOneIndex = [301, 303, 306, 308, 310, 312, 314, 317]
const planetOne = document.createElement('div')



function renderPlanet(planet) {
    if (!isGameOver && !isWin) {
        planet.forEach((element) => {
        cells[element].classList.add('planet-one')
        })
    }
} 

function removePlanetOne() {
    cells.forEach((cell) => {
        cell.classList.remove('planet-one')
    })
}



function movePlanetOne() {
    // ASYNC TIMING 
    setInterval(()=>{

        // REMOVE PLANETS
        removePlanetOne()
        
        // UPDATE PLANET INDEX 

        planetOneIndex = planetOneIndex.map((planet, i) => {
            if(planet >= 318) {
                return planet -= 17
            } else {
                return planet += 1
            }
            
        })          
        // RE-ADD PLANET WITH NEW INDEX    
            
        renderPlanet(planetOneIndex)
        checkCollision()
    }, 700)

}
        

movePlanetOne()



// ? Planet Two Movement -------------------------------------------------------


let planetTwoIndex = [241, 244, 247, 249, 252, 255, 257]
const planetTwo = document.createElement('div')


function renderPlanetTwo(planet) {
    if (!isGameOver && !isWin) {
        planet.forEach((element) => {
            cells[element].classList.add('planet-two')
        })
}
} 

function removePlanetTwo() {
    cells.forEach((cell) => {
        cell.classList.remove('planet-two')
    })
}



function movePlanetTwo() {
    // ASYNC TIMING 
    setInterval(()=>{

        // REMOVE PLANETS
        removePlanetTwo()
        
        // UPDATE PLANET INDEX 

        planetTwoIndex = planetTwoIndex.map((planet, i) => {
            if(planet <= 241) {
                return planet += 17
            } else {
                return planet -= 1
            }
            
        })          
        // RE-ADD PLANET WITH NEW INDEX    
            
        renderPlanetTwo(planetTwoIndex)
        checkCollision()
        
    }, 990)

}
        

movePlanetTwo()




// ? Planet Three Movement -------------------------------------------------------




let planetThreeIndex = [344, 349, 352, 354, 359]
const planetThree = document.createElement('div')


function renderPlanetThree(planet) {
    if (!isGameOver && !isWin) {
        planet.forEach((element) => {
        cells[element].classList.add('planet-three')
        })
    }
} 

function removePlanetThree() {
    cells.forEach((cell) => {
        cell.classList.remove('planet-three')
    })
}



function movePlanetThree() {
    // ASYNC TIMING 
    setInterval(()=>{

        // REMOVE PLANETS
        removePlanetThree()
        
        // UPDATE PLANET INDEX 

        planetThreeIndex = planetThreeIndex.map((planet, i) => {
            if(planet >= 358) {
                return planet -= 17
            } else {
                return planet += 1
            }
            
        })          
        // RE-ADD PLANET WITH NEW INDEX    
            
        renderPlanetThree(planetThreeIndex)
        checkCollision()
        
    }, 1100)

}
        

movePlanetThree()









// * --------------------------------------------------------------------------
// * --------------------------------------------------------------------------
// * --------------------------------------------------------------------------
// * --------------------------------------------------------------------------




// PLAYER MOVE RENDER

function removeMantaRay() {
    cells.forEach((cell) => {
        cell.classList.remove('manta-ray')
        cell.removeAttribute('id')
    })
}



// COLLISION CHECK
function checkCollision() {
        if((planetOneIndex.includes(mantaIndex) || planetTwoIndex.includes(mantaIndex) || planetThreeIndex.includes(mantaIndex)) && (!isWin && !isGameOver)) {
            removeMantaRay()
            
            mantaIndex = 369
            renderManta()
            if (mantaEnergy > 1) {
                mantaEnergy --
                showEnergyValue()
            } else {
                mantaEnergy --
                showEnergyValue()
                console.log('game over')
                isGameOver = true
                gameOver()
            }
        } 
}


function removeAllGridItems() {
    cells.forEach((cell) => {
        cell.removeAttribute('id')
        cell.removeAttribute('class')
    })
    
}

function mantaEndStateCheck() {
    if((isWin || isGameOver) && mantaIndex.innerText !== " ") {
        cells[mantaIndex].classList.add("end-game")
    }
}


function gameOver() {
    removeAllGridItems()
    const gameOverMessage = ` Ray has stopped      at a               hospitable                                planet to  rest.            However,                       as Ray    is a     space-time                anomaly  she    will have to        restart her                             journey...                            Reset to try again`


    cells.forEach((cell, index) => {
        if(index >= 20 && index < 20 + gameOverMessage.length && index !== 50) {
            let letterIndex = index - 20
            cell.innerText = gameOverMessage[letterIndex].toUpperCase()
            
        }
    })

}



function gameWin() {
    isWin = true
    removeAllGridItems()
    const gameOverMessage = ` Ray has arrived                          safely                                    back at her      destination.                               She thanks you    for your                                  company  and      invites                                  you to travel                                  again,                            or whatever...`


    cells.forEach((cell, index) => {
        if(index >= 20 && index < 20 + gameOverMessage.length && index !== 50) {
            let letterIndex = index - 20
            cell.innerText = gameOverMessage[letterIndex].toUpperCase()
            
        }
    })

}



// CHECK WIN
function checkWin() {
    if(mantaIndex === 9 || mantaIndex === 10) {
        gameWin()
    }
}



// PLAYER MOVEMENT
const moveMantaRay = (event) => {
    if (event.key === "w" && !cells[mantaIndex-width].classList.contains('wall')) {
        mantaIndex = mantaIndex - width;
        removeMantaRay()
        
        cells[mantaIndex].setAttribute('id', 'manta-ray-up')
        
    } else if (event.key === "a" && !cells[mantaIndex-1].classList.contains('wall')) {
        mantaIndex = mantaIndex - 1;
        removeMantaRay()
        
        cells[mantaIndex].setAttribute('id', 'manta-ray-left')

    } else if (event.key === "s" && !cells[mantaIndex+width].classList.contains('wall')) {
        mantaIndex = mantaIndex + width;
        removeMantaRay()
        
        cells[mantaIndex].setAttribute('id', 'manta-ray-down')

    } else if (event.key === "d" && !cells[mantaIndex+1].classList.contains('wall')) {
        mantaIndex = mantaIndex + 1;
        removeMantaRay()
        cells[mantaIndex].setAttribute('id', 'manta-ray-right')
        
    }
    
    
    checkCollision()
    checkWin()
    mantaEndStateCheck()
}

// EVENT LISTENER -- KEYDOWN
document.addEventListener('keydown', moveMantaRay)

// ! EVENT LISTENER -- BUTTONS


const resetGame = document.getElementById('reset-game')
resetGame.addEventListener('click', () => {
    window.location.reload()
} )


const body = document.querySelector('body')

const toggleContrast = document.getElementById('toggle-contrast')
toggleContrast.addEventListener('click', () => {
    body.classList.toggle('high-contrast-theme')

} )







// const toggleMusic = document.getElementById('toggle-music')
// toggleMusic.addEventListener('toggle', () => {
//     console.log(toggleMusic)
//     toggleMusic.src.innerText ="../assets/music-on.png"

// })

