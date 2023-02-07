document.getElementById('formulario').addEventListener('submit', function () {

    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var tel = this.querySelector('input[name=tel]'), tel= tel.value;

    var texto = 'Olá Sr. Renato, \nMeu nome é '+ nome +'\nMeu email é '+ email + '\nEntre em contato comigo pelo número ' + tel + '\n';
    this.querySelector('input[name=mensagem]').setAttribute('value', texto);
});