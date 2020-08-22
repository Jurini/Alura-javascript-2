class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
       
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        this._armadilha(this);
        

    }

    get negociacoes() {
        //blindando as negociações retornando um array vazio seguido
        //do método concat, impedindo alterações como :
        // >>>> this._listaNegociacoes.negociacoes.length = 0;
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
        
    }


}