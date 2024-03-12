// base types
const number: number = 2;
const namme: string = "João";
const boolean: boolean = true;
let idontknow: any = "sss";

// arrays
const numbers: number[] = [1, 2, 3];
const booleans: boolean[] = [true, false, true];

// tuple: usada para garantir a ordem e tipo de valores especificos
const person: [number, string] = [7, "joão"];
const macarrao: [string, number] = ["alho", 4];

// array of tuples: bizarro
const persons: [number, string][] = [
  [7, "jõao"],
  [19, "vitor"],
  [20, "rafael"],
];

// ...

// intersection
// tipo mais dinâmica em que pode inserir mais de um tipo de dado
const exemple: number | string = "joker"; // or 3, for exemple;

// enum:
// É tipo um objeto, porém ele caracteriza-se mais como um conjunto de variáveis e tem função incremental a cada item caso nn ponha valor.
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

console.log(StatusCode.Unauthorized);
