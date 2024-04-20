function reduce(elements, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : elements[0];
    const startIndex = startingValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < elements.length; i++) {
        accumulator = cb(accumulator, elements[i]);
    }
    return accumulator;
}