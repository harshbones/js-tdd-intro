function capitalizeFirstLetters(input) {
    if (input.length != 0) {
        return input.split(' ').map(x => x[0].toUpperCase()+x.slice(1)).join(' ')
    } else {
    return input;
    }
}

module.exports = capitalizeFirstLetters;
