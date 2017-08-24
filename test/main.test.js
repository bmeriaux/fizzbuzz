"use strict";
const expect = require("chai").expect;
const main = require("../main");

describe("fizzbuzz", () => {
    it("should return [1,2] when i=2", () => {
        expect(main.fizzbuzz(2)).to.deep.equal([1, 2]);
    });
    it("should return [1,2,fizz] when i=3", () => {
        expect(main.fizzbuzz(3)).to.deep.equal([1, 2, "fizz"]);
    });
    it("should return [1,2,fizz,4,buzz] when i=5", () => {
        expect(main.fizzbuzz(5)).to.deep.equal([1, 2, "fizz", 4, "buzz"]);
    });
});