"use strict";
// base types
const number = 2;
const namme = "João";
const boolean = true;
let idontknow = "sss";
// arrays
const numbers = [1, 2, 3];
const booleans = [true, false, true];
// tuple: usada para garantir a ordem e tipo de valores especificos
const person = [7, "joão"];
const macarrao = ["alho", 4];
// array of tuples: bizarro
const persons = [
    [7, "jõao"],
    [19, "vitor"],
    [20, "rafael"],
];
// ...
// intersection
// tipo mais dinâmica em que pode inserir mais de um tipo de dado
const exemple = "joker"; // or 3, for exemple;
// enum:
// É tipo um objeto, porém ele caracteriza-se mais como um conjunto de variáveis e tem função incremental a cada item caso nn ponha valor.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Unauthorized);
