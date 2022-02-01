import { expect, it } from "@jest/globals";
import { executeAddSan } from "../index";

const demoArray = [["demo1", "demo2", "demo3"], ["demo1", "demo2", "demo3"]];
const demoEmptyArray = [];

describe("index tests", () => {
  it("executeAddSan function test", () => {
    executeAddSan(demoArray).forEach(ele => demoEmptyArray.push(...ele));
    demoEmptyArray.forEach(a => {
      expect(a).toMatch(/.*san$/);
    })
  })
})
