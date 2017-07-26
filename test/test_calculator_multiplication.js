"use strict";

const { assert } = require("chai");
const { multiply } = require('../');

describe("multiply()", () => {
  it("should multiply positive numbers together", () => {
    assert.equal(multiply(1, 3), 3);
    assert.equal(multiply(5, 100), 500);
  });

  it("should multiply positive and negative numbers together");

  it("should multiply negative numbers together");
});