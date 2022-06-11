class Negociacao {

    // CONSTRUTOR
    constructor(data, quantidade, valor) { // O construtor recebe parâmetros
        // Propriedade = valor/parâmetros
        // Cada parâmetro recebido será atribuído às propriedades da classe
        
        Object.assign(this, {
            _data: new Date(data.gettime()),
            _quantidade: quantidade,
            _valor: valor
        })
        
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