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


// ! GRID REFERENCE COMMENT IN/OUT ---------------------------------------------------------------      
        // cell.innerText = i
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

function render() {
    createGrid()
    createWall()
}

render()


// ! Manta Ray
const mantaRay = document.createElement('div')
mantaRay.setAttribute('class', 'manta-ray')

let mantaIndex = 369
cells[mantaIndex].classList.add('manta-ray')


// ! Obstacles -------------------------------------------------------


let planetOneIndex = [281, 286, 291, 296]
const planetOne = document.createElement('div')
planetOne.setAttribute('class', 'planet-one')

function cyclePlanetOne() {
    planetOneIndex.forEach((element) => {
        element += 5

    })
}


cells[288].classList.add('planet-one')


// cells[setInterval(cyclePlanetOne, 100)].classList.add('planet-one')


// ! Obstacles -------------------------------------------------------



function renderMove() {
    cells.forEach((cell, index) => {
        cells[index].classList.remove('manta-ray')
    })
    cells[mantaIndex].classList.add('manta-ray')
}



const moveMantaRay = (event) => {
    if (event.key === "w" && !cells[mantaIndex-width].classList.contains('wall')) {
        mantaIndex = mantaIndex - width;
    } else if (event.key === "a" && !cells[mantaIndex-1].classList.contains('wall')) {
        mantaIndex = mantaIndex - 1;
    } else if (event.key === "s" && !cells[mantaIndex+width].classList.contains('wall')) {
        mantaIndex = mantaIndex + width;
    } else if (event.key === "d" && !cells[mantaIndex+1].classList.contains('wall')) {
        mantaIndex = mantaIndex + 1;
    } else {
        //console.log("pressed")
    }
    renderMove()
}

document.addEventListener('keydown', moveMantaRay)



