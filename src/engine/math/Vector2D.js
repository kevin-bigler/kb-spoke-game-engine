export default class Vector2D {
    constructor(x, y) {

    }
}

export const randomVector2D = () => {
    return new Vector2D(random(min, max), random(min, max));
}