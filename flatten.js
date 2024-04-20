function flatten(elements) {
    let flattenedArray = [];
    each(elements, (element) => {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(flatten(element));
        } else {
            flattenedArray.push(element);
        }
    });
    return flattenedArray;
}