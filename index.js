function iterativeLog(array) {
    array.forEach( (element, index, array) => {
        console.log(`${index}: ${element}`);
    })
    return;
}

function iterate(callback) {
    var array = ["dog", "cat", "squirrel"];
    array.forEach(callback);
    return array;
}

function doToArray(array, callback) {
    array.forEach(callback);
    return;
}
