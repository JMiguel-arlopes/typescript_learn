const returnNumber = <Type>(var: Type) => {
    
}


interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = { first: 1, second: "two" };
console.log(pair); // Output: { first: 1, second: 'two' }