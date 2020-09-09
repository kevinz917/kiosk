// food schema

const Main = [
  {
    name: "Burger",
    type: "Main",
    price: 5.99,
    options: ["Ketchup", "Mayo"],
    image: "www.google.com",
    count: 0,
  },
  {
    name: "Sandwich",
    type: "Main",
    price: 5.99,
    options: ["Mayo", "Lettuce"],
    image: "www.google.com",
    count: 0,
  },
  {
    name: "Linguini Pasta",
    type: "Main",
    price: 10.99,
    options: ["Truffle"],
    image: "www.google.com",
    count: 0,
  },

  {
    name: "Squid Ink Pasta",
    type: "Main",
    price: 15.99,
    options: ["Truffle"],
    image: "www.google.com",
    count: 0,
  },
];

const Drink = [
  {
    name: "Coke",
    type: "Drinks",
    price: 2.99,
    options: ["Straw"],
    image: null,
    count: 0,
  },
];

const Foodmaster = [].concat(Main, Drink);

export { Foodmaster };
