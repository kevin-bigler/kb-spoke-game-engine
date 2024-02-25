import * as PIXI from 'pixi.js';

export const ELEMENT_NAMES = {
    STAGE: "stage",
    FPS_DISPLAY: "fps",
}

const initRenderer = (parent, width, height, backgroundColor): PIXI.IRenderer => {
    // const app = new PIXI.Application({width, height, transparent: true}); // 0xff0000});
    const renderer = PIXI.autoDetectRenderer({
        antialias: true,
        // transparent : backgroundColor === undefined,
        preserveDrawingBuffer: true,
        backgroundColor,
        width,
        height,
        autoDensity: true,
        resolution: devicePixelRatio
    });

    const stageElement = findElement(document.body, ELEMENT_NAMES.STAGE)
    const viewElement = findElement(stageElement, "view")
    stageElement.replaceChild(renderer.view as any, stageElement.lastElementChild); // Hack for HMR

    return renderer;
};

/**
 * get existing stage element, or return a new one (that is also appended to the given parent)
 * @param {Element} parent
 * @param {string} id
 * @returns {Element}
 */
export const findElement = (parent, id): Element => {
    const el = parent.children.namedItem(id)
    if (!el) {
        const newEl = createElement(id)
        parent.appendChild(newEl)
        return newEl
    } else {
        return el
    }
}

/**
 * return a new element with the given ID
 * @param {string} id 
 * @returns {Element}
 */
const createElement = (id): Element => {
    const stage = document.createElement("div")
    stage.id = id
    return stage
}

// /**
//  * get existing stage element, or return a new one (that is also appended to the given parent)
//  * @param {Element} parent
//  * @returns {Element}
//  */
// const findStage = (parent) => {
//     const stage = parent.children().namedItem(ELEMENT_NAMES.STAGE)
//     if (!stage) {
//         const newStage = createStage()
//         parent.appendChild(newStage)
//         return newStage
//     } else {
//         return stage
//     }
// }

// /**
//  * @returns {Element}
//  */
// const createStage = () => {
//     const stage = document.createElement()
//     stage.id = ELEMENT_NAMES.STAGE
//     return stage
// }

export default initRenderer;
