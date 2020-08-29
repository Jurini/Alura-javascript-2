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

    esvazia() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}