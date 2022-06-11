class Negociacao {

    // CONSTRUTOR
    constructor(_data, _quantidade, _valor) { // O construtor recebe parâmetros
        // Propriedade = valor/parâmetros
        // Cada parâmetro recebido será atribuído às propriedades da classe
        
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    // MÉTODOS ACESSADORES (ENCAPSULAMENTO)
    // A sintaxe get vem antes do nome do método
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}