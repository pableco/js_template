// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

import { getByText } from "@testing-library/dom";

import { printUsers } from "../src/index";

test("examples of some things", async () => {
  const container = await printUsers();
  document.body.appendChild(container);

  const user = getByText(container, "Current users");

  expect(user).toBeInTheDocument();
});

test("examples of doSometing", () => {
  const doSomething = (param) => {
    return param;
  };

  const parameter = "parameterString";

  expect(doSomething(parameter)).toBe(parameter);
});

test(" check if a function returns factorial", () => {
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  expect(factorial(5)).toBe(120);
  expect(factorial(4)).toBe(24);
});

test(" check if a function returns if a string is a palindrome", () => {
  const isPalindrome = (str) => {
    const string = str.toLowerCase();
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
  };

  expect(isPalindrome("racecar")).toBe(true);
});
