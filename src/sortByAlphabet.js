function sortByAlphabet(array) {
    const sortedArr = array.sort(function (a, b) {
        return a.item.localeCompare(b.item);
    });

    return sortedArr;
}

module.exports = {
    sortByAlphabet,
};
