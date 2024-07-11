import { expect, test } from "vitest";
import { getTva } from "../getTva";

test("is a function", () => {
  const cart1 = [
    {
      id: 15,
      category: 1,
      price: 10,
    },
  ];
  expect(typeof getTva).toBe("function");
  expect(typeof getTva(cart1)).toBe("number");
});

test("works with 1-item carts", () => {
  const cart1 = [
    {
      id: 15,
      category: 1,
      price: 10,
    },
  ];
  const cart2 = [
    {
      id: 1,
      category: 1,
      price: 100,
    },
  ];

  expect(getTva(cart1)).toBe(1.96);
  expect(getTva(cart2)).toBe(19.6);
});

test("works with multi-items carts", () => {
  const cart3 = [
    {
      id: 1,
      category: 1,
      price: 100,
    },
    {
      id: 2,
      category: 1,
      price: 100,
    },
  ];

  expect(getTva(cart3)).toBe(19.6 * 2);
});

test("uses several tax rates", () => {
  const cart3 = [
    {
      id: 1,
      category: 1,
      price: 100,
    },
    {
      id: 2,
      category: 2,
      price: 100,
    },
  ];

  expect(getTva(cart3)).toBe(25.1);
});
