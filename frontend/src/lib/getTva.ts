const categories = [
  {
    id: 1,
    label: "Clothes",
    taxRate: 19.6,
  },
  {
    id: 2,
    label: "Food",
    taxRate: 5.5,
  },
];

const getTva = (cart: Array<any>) => {
  return cart.reduce((acc: number, item) => {
    const category = categories.find((cat) => cat.id === item.category);
    const taxRate = category?.taxRate || 19.6;
    const res = acc + (item.price / 100) * taxRate;
    return Number(res.toFixed(2));
  }, 0);
};

export { getTva };
