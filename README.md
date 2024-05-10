# COSMIC RAY

A simple game where you have to avoid obstacles and reach the destination at the top of the grid. The player's character, the manta ray, is controllable using the WASD keys. The game can then be reset by using the middle button at the top of the screen (the looping arrow button).

I wanted to create a game that didn't focus on violence or death, as most game endings seem to be about dying. In this game, you play as Ray who is travelling through space. In the loss scenario, she is resting rather than dead.

I particularly enjoyed implementing the 'hidden game', which isn't so much as a game but allows the player to move over the 'game over' screen and paint the grid squares once either a 'win' or 'loss' has occured.

## Languages Used

HTML

CSS

Javascript


## Screenshots

### Game

![](./readme-assets/cosmic-ray-screenshot.png)

Additional features include a 'high contrast' mode and a soundtrack.

![](./readme-assets/cosmic-ray-screenshot-high-contrast.png)



Or copying the link here [https://polynomial-b.github.io/cosmic-ray-game/](https://polynomial-b.github.io/cosmic-ray-game/)



### Planning

#### Game Plan

![](readme-assets/game-plan-screenshot.png)

#### Logic Diagram

![](readme-assets/game-plan-logic-screenshot.png)





## Asset Sources

I have used all image sources from https://www.freepik.com/

The song used as the soundtrack is 'Diving Faces (Club Mix)' by 'Liquid Child' from 'Diving Faces'. Published by Reef Recordings (2007).





## Improvements for the future:

Game over / game win animations and sounds to be added.

'Free mode' - remove collision and add toggle button.

'Less flashing mode' - less flashing, slower moving objects -- for accessibility.

Addition of my own music to replace current soundtrack.





## Code Examples

### Basic grid creation

```
const width = 20;
const height = 20;
const gridCellCount = width * height;

function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement("div");

    cells.push(cell);
    grid.appendChild(cell);

    cell.setAttribute('data-index', i)
    cell.innerText = i
  }
}
```

These two lines of code below, which are included in the grid set up (above) are for the purpose of counting each div within the grid:

```
    // cell.setAttribute('data-index', i)
    // cell.innerText = i
```



### Border creation

```
function createWall() {
  if (!isGameOver) {
    // Create main side walls
    for (let i = 0; i < gridCellCount; i = i + 20) {
      cells[i].classList.add("wall");
      cells[i + (width - 1)].classList.add("wall");
    }
    for (let i = 1; i < width; i++) {
      if ((i !== 9) & (i !== 10)) {
        cells[i].classList.add("wall");
      }
    }
    cells[9].classList.add("end");
    cells[10].classList.add("end");

    // Create internal walls
    let blockIndex = [
      161, 162, 163, 168, 169, 170, 171, 176, 177, 178, 181, 182, 183, 188, 189, 190, 191, 196, 197, 198, 381, 382, 383,
      384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398,
    ];

    blockIndex.forEach((cell) => {
      cells[cell].classList.add("wall");
    });
  }
}
```




## Ray would like to say...

```

           /\
         ///\\\     
       ///0/\0\\\
    ////////\\\\\\\\
        \\\\////
           ||
           ||
           /

Thanks for reading and playing!

```