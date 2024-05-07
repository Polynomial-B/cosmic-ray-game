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


// ! GRID REFERENCE COMMENT IN/OUT ---------------------------------------------------      
        // cell.innerText = i
// ! GRID REFERENCE COMMENT IN/OUT ---------------------------------------------------         
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
    let blockIndex = [161, 162, 163, 176, 177, 178, 181, 182, 183, 196, 197, 198, 201, 202, 203, 216, 217, 218,  381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398]
    
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



// ! Obstacles -------------------------------------------------------


let planetOneIndex = [281, 284, 287, 290, 293, 296]
const planetOne = document.createElement('div')
planetOne.setAttribute('class', 'planet-one')

// * CODE BELOW


function movePlanets() {
    cells.forEach((cell) => {
        cell.classList.remove('planet-one')
    })
    
    planetOneIndex.forEach((planet, i) => {
        planetOneIndex[i] = planet + 1
    }
    
)}

function renderPlanet() {
    planetOneIndex.forEach((element) => {
        cells[element].classList.add('planet-one')
    })
}    

function loopPlanet() {
    setInterval(
        function loop() {
            for(let i = 1; i < 3; i++) {
                movePlanets()
                renderPlanet()
                console.log(planetOneIndex)
            }
            planetOneIndex = [281, 284, 287, 290, 293, 296]
        }, 750)
        
        
}

renderPlanet()
// console.log(planetOneIndex);

// loopPlanet()






// ! -------------------------------------------------------


// PLAYER MOVE RENDER
function renderMove() {
    cells.forEach((cell, index) => {
        cells[index].classList.remove('manta-ray')
    })
    cells[mantaIndex].classList.add('manta-ray')
}
// COLLISION CHECK
function checkCollision() {
    if(planetOneIndex.includes(mantaIndex)) {
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
        console.log(mantaRay.id);
    } else if (event.key === "a" && !cells[mantaIndex-1].classList.contains('wall')) {
        mantaIndex = mantaIndex - 1;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-down')
        mantaRay.removeAttribute('id', 'manta-ray-right')
        mantaRay.setAttribute('id', 'manta-ray-left')
        console.log(mantaRay.id);
    } else if (event.key === "s" && !cells[mantaIndex+width].classList.contains('wall')) {
        mantaIndex = mantaIndex + width;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-left')
        mantaRay.removeAttribute('id', 'manta-ray-right')
        mantaRay.setAttribute('id', 'manta-ray-down')
        console.log(mantaRay.id);
    } else if (event.key === "d" && !cells[mantaIndex+1].classList.contains('wall')) {
        mantaIndex = mantaIndex + 1;
        mantaRay.removeAttribute('id', 'manta-ray-up')
        mantaRay.removeAttribute('id', 'manta-ray-down')
        mantaRay.removeAttribute('id', 'manta-ray-left')
        mantaRay.setAttribute('id', 'manta-ray-right')
        console.log(mantaRay.id);
    }
    renderMove()
    checkCollision()
}
// EVENT LISTENER -- KEYDOWN
document.addEventListener('keydown', moveMantaRay)



