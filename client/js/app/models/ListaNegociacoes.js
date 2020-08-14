class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);

    }

    get negociacoes() {
        //blindando as negociações retornando um array vazio seguido
        //do método concat, impedindo alterações como :
        // >>>> this._listaNegociacoes.negociacoes.length = 0;
        return [].concat(this._negociacoes);
    }


}