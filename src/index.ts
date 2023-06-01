console.log('index.ts, started:', new Date());

import { Game } from './engine/Game';
import BouncyBall from './BouncyBall';
import { ELEMENT_NAMES, findElement } from './engine/initRenderer';

const canvasWidth = 200;
const canvasHeight = 150;

const bouncyBall = new BouncyBall(canvasWidth, canvasHeight);

const formatFps = (fpsCounter) => 
    ''+Math.round(fpsCounter.currentFps) + ' | ' + Math.round(fpsCounter.currentDtsFps) + ' | ' + Math.round(fpsCounter.highestDt);

const update = (dt) => {
    bouncyBall.update(dt);
};

const draw = (stage) => {
    bouncyBall.draw(stage);
    document.getElementById('fps').innerText = formatFps(game.fpsCounter);
};


findElement(document.body, ELEMENT_NAMES.FPS_DISPLAY)

// const fpsDiv = document.createElement("div")
// fpsDiv.id = "fps"
// document.body.appendChild(fpsDiv)
// const canvasDiv = document.createElement("div")
// canvasDiv.id = "canvas"
// document.body.appendChild(canvasDiv)

const game = new Game({
    width: canvasWidth, 
    height: canvasHeight, 
    // setup, 
    update, 
    draw, 
    // framerate: 10,
    backgroundColor: 0x333333,
});
game.start();
