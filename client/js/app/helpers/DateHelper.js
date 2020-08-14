class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    }

    static textoParaData(texto) {

        // ... dismenbrando o array , Split >> transforma a String em array
        // => flecha , forma menos verbosa de declarar funções ES2015
        // arrow function já faz o return da operação 

        //Regex()
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }


}