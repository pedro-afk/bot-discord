const callError = require("./callError");
const getArticlesByAuthor = require("./getArticlesByAuthor");
const getArticlesByTheme = require("./getArticlesByTheme");

//Deve receber o conteúdo da mensagem e retornar o comando que deve ser executado
async function checkUserInput(message) {
    let command = message.split(" ");
    if ((command[0] = "!gs")) {
        if (command[1] == "-t") {
            let theme_results = await getArticlesByTheme(command.slice(2));
            return theme_results;
        } else if (command[1] == "-a") {
            let author_results = await getArticlesByAuthor(command.slice(2));
            return author_results;
        } else {
            callError("Nenhuma opção válida foi fornecida");
        }
    }
}

module.exports = checkUserInput;