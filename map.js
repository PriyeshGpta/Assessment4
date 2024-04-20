function map(elements, cb) {
    const newArray = [];
    each(elements, (element, index) => {
        newArray.push(cb(element, index));
    });
    return newArray;
}