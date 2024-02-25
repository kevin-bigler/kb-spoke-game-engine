import * as PIXI from 'pixi.js';
import initRenderer from './initRenderer';
import Looper from './Looper';
import FpsCounter from './FpsCounter';

const NOOP = () => {};

// combine stuff by providing a setup, update, and draw function
// -- inspiration from p5.js
// start/stop ability (?) maybe noLoop() like p5
// showFps() function
export class Game {
    width: number
    height: number
    setup: Function
    update: Function
    draw: Function
    framerate: number
    backgroundColor: PIXI.ColorSource
    stageElement: Element
    fpsCounter: FpsCounter
    looper: Looper
    renderer: PIXI.IRenderer
    stage: PIXI.Container

    constructor({width, height, setup = NOOP, update, draw, framerate = 60, backgroundColor = undefined, stageElement = document.body}) {
        // const canvasWidth = 640;
        // const canvasHeight = 360;
        this.width = width;
        this.height = height;
        this.setup = setup || NOOP;
        this.update = update || NOOP;
        this.draw = draw || NOOP;
        this.framerate = framerate;
        this.backgroundColor = backgroundColor;
        this.stageElement = stageElement

        // should these go in start()?
        this.fpsCounter = new FpsCounter();
        this.looper = new Looper();
    }
    
    start() {
        this.setup(); // TODO: what args? width, height, framerate? or something -- maybe after stage init? idk
        this.renderer = initRenderer(this.stageElement, this.width, this.height, this.backgroundColor);
        this.stage = new PIXI.Container();
        this.looper.init(this.framerate);
        // this.looper.ticker(dt => console.log('tick:', dt));
        this.looper.ticker(dt => this.fpsCounter.updateFps(dt));
        this.looper.ticker(dt => this.update(dt));
        this.looper.ticker(dt => this.draw(this.stage, dt));
        this.looper.ticker(dt => this.renderer.render(this.stage));
    }

}

// const formatFps = () => 
//     ''+Math.round(fpsCounter.currentFps) + ' | ' + Math.round(fpsCounter.currentDtsFps) + ' | ' + Math.round(fpsCounter.highestDt, 2);
// looper.ticker(dt => document.getElementById('fps').innerText = formatFps());

// // const basicExperiment = new BasicExperiment();
// // looper.ticker(dt => {
// //     basicExperiment.update(dt);
// //     basicExperiment.draw(stage);
// // });
// // const bouncyBall = new BouncyBall(canvasWidth, canvasHeight);
// // looper.ticker(dt => {
// //     bouncyBall.update(dt);
// //     bouncyBall.draw(stage);
// // });

// const aBox = new InputStatusBox('a');
// looper.ticker(dt => {
//     aBox.update(dt);
//     aBox.draw(stage);
// });

