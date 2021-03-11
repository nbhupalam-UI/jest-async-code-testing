jest.mock("./http");
const { loadTitle, add } = require("./util");

test("should print upper case text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEMM");
  });
});

test("Should add 2 numbers", () => {
  expect(add(2, 3)).toBe(5);
});
