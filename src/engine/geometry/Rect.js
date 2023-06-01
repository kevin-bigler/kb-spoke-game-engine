export class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    contains({x, y}) {
        return !(x < this.left || x > this.right || y < this.top || y > this.bottom);
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.h;
    }

    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.w;
    }

    get topLeft() {
        return {x: this.x, y: this.y};
    }

    get topRight() {
        return {x: this.x + this.w, y: this.y};
    }

    get bottomLeft() {
        return {x: this.x, y: this.y + this.h};
    }

    get bottomRight() {
        return {x: this.x + this.w, y: this.y + this.h};
    }

    get north() {
        return this.top;
    }

    get south() {
        return this.bottom;
    }

    get east() {
        return this.right;
    }

    get west() {
        return this.left;
    }

    get nw() {
        return this.topLeft;
    }

    get ne() {
        return this.topRight;
    }

    get sw() {
        return this.bottomLeft;
    }

    get se() {
        return this.bottomRight;
    }

    set top(y) {
        this.y = y;
    }

    set bottom(y) {
        this.y = y - this.h;
    }

    set left(x) {
        this.x = x;
    }

    set right(x) {
        this.x = x - this.w;
    }

    set topLeft({x, y}) {
        this.x = x;
        this.y = y;
    }

    set topRight({x, y}) {
        this.x = x + this.w;
        this.y = y;
    }

    set bottomRight({x, y}) {
        this.x = x + this.w;
        this.y = y + this.h;
    }

    set bottomLeft({x, y}) {
        this.x = x;
        this.y = y + this.h;
    }

    set north(y) {
        this.top = y;
    }

    set south(y) {
        this.bottom = y;
    }

    set west(x) {
        this.left = x;
    }

    set east(x) {
        this.right = x;
    }

    set nw({x, y}) {
        this.topLeft = {x, y};
    }

    set ne({x, y}) {
        this.topRight = {x, y};
    }

    set se({x, y}) {
        this.bottomRight = {x, y};
    }

    set sw({x, y}) {
        this.bottomLeft = {x, y};
    }
}
