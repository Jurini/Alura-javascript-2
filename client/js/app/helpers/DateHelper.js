class DateHelper {

    dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();

    }

    textoParaData(texto) {

        // ... dismenbrando o array , Split >> transforma a String em array
        // => flecha , forma menos verbosa de declarar funções ES2015
        // arrow function já faz o return da operação   

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }


}