const selectImage = require("../Javascripts/excuser/logic");
describe("this function takes a name of category and return a the right link for this category", () => {
  test("should return [../images/family.webp] when the input is family",()=>{
    const actual = selectImage("family");
    const expected = ["../images/family.webp"];
    expect(actual).toEqual(expected);
  });

  test("should return [../images/children.webp] when the input is family",()=>{
    const actual = selectImage("children");
    const expected = ["../images/children.webp"];
    expect(actual).toEqual(expected);
  });
  test("should return [../images/party.gif] when the input is family",()=>{
    const actual = selectImage("party");
    const expected = ["../images/party.gif"];
    expect(actual).toEqual(expected);
  });
});
