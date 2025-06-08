function reverseString(str) {
    return [...str].reverse().join("");
}

module.exports = {
    reverseString,
    concatenateString: function(str) {
        return str + str;
    }
};
