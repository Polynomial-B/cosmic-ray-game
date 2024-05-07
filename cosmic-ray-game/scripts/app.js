const grid = document.querySelector('.grid')
const cells = []

const width = 20
const height = 20
const gridCellCount = width * height




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
        cell.innerText = i     
// ? ---------------------------------------------------------------------------------
// * ---------------------------------------------------------------------------------
// ? ---------------------------------------------------------------------------------

    }
}

function createWall() {
    // Create main side walls
    for(let i = 0; i < gridCellCount; i = i + 20) {
        cells[i].classList.add('wall')
        cells[i + (width - 1)].classList.add('wall')
    }
    for(let i = 1; i < width; i ++) {
        cells[i].classList.add('wall')
    }

    // Create internal walls
    let blockIndex = [161, 162, 163, 176, 177, 178, 181, 182, 183, 196, 197, 198, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398]
    
    blockIndex.forEach((cell) => {
        cells[cell].classList.add('wall')
    
    })
}




// ! Manta Ray
const mantaRay = document.createElement('div')
mantaRay.setAttribute('class', 'manta-ray')

let mantaIndex = 369
function renderManta() {
    cells[mantaIndex].classList.add('manta-ray')
}


function render() {
    createGrid()
    createWall()
    
}

render()
renderManta()



// ? Planet One Movement -------------------------------------------------------


let planetOneIndex = [301, 303, 309, 311, 314, 317]
const planetOne = document.createElement('div')



function renderPlanet(planet) {
    planet.forEach((element) => {
        cells[element].classList.add('planet-one')
    })
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


let planetTwoIndex = [241, 243, 245, 249, 251, 253, 255, 257]
const planetTwo = document.createElement('div')


function renderPlanetTwo(planet) {
    planet.forEach((element) => {
        cells[element].classList.add('planet-two')
    })
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
            if(planet >= 258) {
                return planet -= 17
            } else {
                return planet += 1
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
    planet.forEach((element) => {
        cells[element].classList.add('planet-three')
    })
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
function renderMove() {
    cells.forEach((cell, index) => {
        cells[index].classList.remove('manta-ray')
    })
    cells[mantaIndex].classList.add('manta-ray')
}
// COLLISION CHECK
function checkCollision() {
    if(planetOneIndex.includes(mantaIndex) || planetTwoIndex.includes(mantaIndex)) {
        console.log('collision');
        
    } 
}



// PLAYER MOVEMENT
const moveMantaRay = (event) => {
    if (event.key === "w" && !cells[mantaIndex-width].classList.contains('wall')) {
        mantaIndex = mantaIndex - width;
        mantaRay.removeAttribute('id', 'manta-ray-left')
        mantaRay.removeAttribute('id', 'manta-ray-down')
        mantaRay.removeAttribute('id', 'manta-ray-right')
        mantaRay.setAttribute('id', 'manta-ray-up')
        // console.log(mantaRay.id);
    } else if (event.key === "a" && !cells[mantaIndex-1].classList.contains('wall')) {
        mantaIndex = mantaIndex - 1;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-down')
        mantaRay.removeAttribute('id', 'manta-ray-right')
        mantaRay.setAttribute('id', 'manta-ray-left')
        // console.log(mantaRay.id);
    } else if (event.key === "s" && !cells[mantaIndex+width].classList.contains('wall')) {
        mantaIndex = mantaIndex + width;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-left')
        mantaRay.removeAttribute('id', 'manta-ray-right')
        mantaRay.setAttribute('id', 'manta-ray-down')
        // console.log(mantaRay.id);
    } else if (event.key === "d" && !cells[mantaIndex+1].classList.contains('wall')) {
        mantaIndex = mantaIndex + 1;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-down')
        mantaRay.removeAttribute('id', 'manta-ray-left')
        mantaRay.setAttribute('id', 'manta-ray-right')
        // console.log(mantaRay.id);
    }
    renderMove()
    checkCollision()
}
// EVENT LISTENER -- KEYDOWN
document.addEventListener('keydown', moveMantaRay)



