const grid = document.querySelector('.grid')
const cells = []

const width = 20
const height = 20
const gridCellCount = width * height



function createGrid() {
    for(let i = 0; i < gridCellCount; i++) {
        const cell = document.createElement('div')
        cell.setAttribute('data-index', i)
        // cell.innerText = i
        cells.push(cell)
        grid.appendChild(cell)
    }
}

function createWall() {
    // Create main side walls
    for(let i = 0; i < gridCellCount; i = i + 20) {
        cells[i].classList.add('wall')
        cells[i + (width - 1)].classList.add('wall')
    }

    // Create internal walls
    let blockIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 161, 162, 163, 176, 177, 178, 181, 182, 183, 196, 197, 198, 201, 202, 203, 216, 217, 218, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398]
    
    blockIndex.forEach((cell) => {
        cells[cell].classList.add('wall')
    
    })
}

function render() {
    createGrid()
    createWall()
}

render()


const mantaRay = document.createElement('div')
mantaRay.setAttribute('class', 'manta-ray')


// Manta Ray Start Position
let mantaIndex = 369

cells[mantaIndex].classList.add('manta-ray')







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