"use strict";

exports.fizzbuzz = function (param) {
    let arr = [];
    for (let j = 1; j <= param; j++) {
        if (j % 3 === 0) {
            arr.push("fizz");
        } else if (j % 5 === 0) {
            arr.push("buzz");
        } else {
            arr.push(j);
        }
    }
    return arr;
};