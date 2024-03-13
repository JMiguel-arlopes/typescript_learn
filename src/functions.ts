let num: number = 0;

// da para voce inserir os tipos dos parametros e a tipagem que queira que a função retorne
const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

// void é para funções que n]ao retornam nada.
const joinNumbers = (): void => {
  console.log(num);
};
