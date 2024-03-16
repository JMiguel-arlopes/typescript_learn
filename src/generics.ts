const returnNumber = <Type>(vars: Type): Type => {
  return vars;
};

const returnedNumber = returnNumber<number>(20);

interface Pair<Type, Utype> {
  first: Type;
  second: Utype;
}

const pair: Pair<number, string> = {
  first: 1,
  second: "two",
};
console.log(pair); // Output: { first: 1, second: 'two' }
