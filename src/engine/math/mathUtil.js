/**
 * usage:
 * - random(max) // 0 to max, exclusive
 * - random(min, max) // min to max, exclusive
 */
export const random = (...args) => {
    if (Array.isArray(args[0])) {
        const [list] = args;
        const randomIndex = floor(random(list.length));
        return list[randomIndex];
    }

    let [min, max] = args;
    if (args.length === 1) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
};

/**
 * return an array of integers from start to end, exclusive
 * start and end are floor'd to ensure they are integers
 * 
 * usage:
 * - range(10, 15) // [10, 11, 12, 13, 14]
 * - range(15, 10) // [15, 14, 13, 12, 11]
 * - range(5) // [0, 1, 2, 3, 4]
 * - range(-5) // [0, -1, -2, -3, -4]
 */
export const range = (...args) => {
    let [start, end] = args;
    if (end === undefined) {
        console.log('doin a thing');
        end = start;
        start = 0;
    }
    let r = [];
    if (start < end) {
        for (let i = Math.floor(start); i < Math.floor(end); i++) {
            r.push(i);
        }
    } else {
        for (let i = Math.floor(start); i > Math.floor(end); i--) {
            r.push(i);
        }
    }
    return r;
}

export const floor = Math.floor.bind(Math);
export const ceil = Math.ceil.bind(Math);
export const round = Math.round.bind(Math);

range(1, 20).forEach(i => {
    console.log('random:', random([10, 15, 20]));
});