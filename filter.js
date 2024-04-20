function filter(elements, cb) {
    const newArray = [];
    each(elements, (element) => {
        if (cb(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}