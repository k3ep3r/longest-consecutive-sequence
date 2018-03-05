module.exports = function longestConsecutiveLength(array) {
    let result = [];
    let temp = array.length > 0 ? 1 : 0;
    result.push(temp);

    array.sort((left, right) => left - right);
    array = array.filter((value, i, array) => value !== array[i+1] );
    array.forEach((value, i, array) => {
        (array[i+1] - value !== 1) ? (result.push(temp) , temp = 1) : temp++;
    });
    return Math.max(...result);
 }
