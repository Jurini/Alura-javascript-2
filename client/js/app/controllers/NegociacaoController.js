class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();

        // ... dismenbrando o array , Split >> transforma a String em array

        let data = new Date(...this._inputData.value.split('-')

            // => flecha , forma menos verbosa de declarar funções ES2015
            // arrow function já faz o return da operação 

            .map((item, indice) => item - indice % 2)

        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
}