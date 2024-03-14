"use strict";
// ATENÇÃO:
// Agora entraremos na parte dificil do TS (que não é tão dificil assim)
// agora você irá construir um OBJETO que siga a tipagem estruturada que você criou:
const professor = {
    name: "João Miguel",
    age: 20,
    email: "jmiguelarlopes@gmail.com",
    // password nn irei colocar por ser opcional, ficando então com tipo "undefined" ao ser chamado.
    // obs: caso queira chamar um item que é opcional, ele vai vim com a tipagem que você deu + 'undefined'
    // então caso queira retirar esse 'undefined' pela certeza que ele foi definido, coloque "!" que irá permanecer apenas a tipagem estipulada.
    docs: [
        { name: "vitor", years: 23 },
        { name: "rafael", years: 34 },
    ],
    register(x) {
        return "a";
    },
};
// OBS Final:
// INTERFACES para funções projetam funções anônimas tipagens e nomeando os parâmetros e tipando o retorno
// INTERFACES em objetos deve nomear, dizer os parametros e o que retorna. Quando for chamada, apenas abra chaves e faça oq a função deve fazer
// pronto
