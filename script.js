$(document).ready(() => {

  // Validação de CPF
  // Verifica o primeiro dígito

  function verificaPrimeiroDigito(array){
    
    let n = 10;
    let soma = 0;

    for (let i = 0; i < 9; i++) {
      let mult = array[i] * n;
      soma += mult;
      n--;      
    }

    let resto = (soma * 10)%11;

    if(resto == 10){
      resto = 0;
    }
    return resto;

  }

  // Verifica o segundo digito

  function verificaSegundoDigito(array){

    let n = 11;
    let soma = 0;

    for (let i = 0; i < 10; i++) {
      let mult = array[i] * n;
      soma += mult;
      n--;      
    }

    let resto = (soma * 10)%11;

    if(resto == 10){
      resto = 0;
    }

    return resto;

  }

  // Função principal para a validação do CPF
  function validacaoCPF(array){

    // Verifica se os caracteres são repetidos
    switch (array.join('')) {
      case '00000000000':
      case '11111111111': 
      case '22222222222':
      case '33333333333':
      case '44444444444':
      case '55555555555':
      case '66666666666':
      case '77777777777':
      case '88888888888':
      case '99999999999':
      case '00000000000':
        return false;
    }

    // Retorno das funções de verificação do primeiro e segundo dígito
    let primeiroDigito = verificaPrimeiroDigito(array);
    let segundoDigito = verificaSegundoDigito(array);

    // Verifica se os digitos retornados são diferentes dos contidos no CPF digitado pelo usuário
    if(primeiroDigito != array[9] && segundoDigito != array[10]){
      return false;
    }

    return true;

  }

  $('#btnForm').on('click', () => {

    let cpf_cnpjInput = $('#cpf_cnpj').val().replace(/[^0-9]/g, '').split('');
    
    if(cpf_cnpjInput.length == 11){

      $('#cpf_cnpj').mask('999.999.999-99');
      let resultadoValidacaoCPF = validacaoCPF(cpf_cnpjInput);

      if(resultadoValidacaoCPF){
        $('$res').addClass('text-success');
        $('$res').addClass('O CPF');

      }

    }
    
    /*  
    

    
    
    if(!resultadoValidacaoCPF){
      $(e.target).addClass('is-invalid');
      $('#msg').html('CPF inválido');
    } else {
      $(e.target).removeClass('is-invalid');
      $('#msg').html('');
    }

    let resultadoCPFCadastrado = verificaCPFCadastrados(cpfInput.join(''));

    console.log(resultadoCPFCadastrado);

    function verificaPrimeiroDigito(array){

      let soma = 0;
      let n = 5;
      let resto = 0;
      let primeiroDigito = 0;
  
      for (let i = 0; i < array.slice(0, -2).length; i++) {
        if(n == 1){
          n = 9;
        }
        let mult = array[i] * n;
        soma += mult;
        n--;
      }
  
      resto = soma % 11;
  
      if(resto == 0 || resto == 1){
        primeiroDigito = 0;
      } else {
        primeiroDigito = 11- resto;
      }
  
      return primeiroDigito;
  
    }
  
    function verificaSegundoDigito(array){
  
      let soma = 0;
      let n = 6;
      let resto = 0;
      let segundoDigito = 0;
  
      for (let i = 0; i < array.slice(0, -1).length; i++) {
        if(n == 1){
          n = 9;
        }
        let mult = array[i] * n;
        soma += mult;
        n--;
      }
  
      resto = soma % 11;
  
      if(resto == 0 || resto == 1){
        segundoDigito = 0;
      } else {
        segundoDigito = 11- resto;
      }
  
      return segundoDigito;
  
    }
  
    function validacaoCNPJ(array){
  
      if(array.join('') == '00000000000000'){
        return false;
      }
  
      let primeiroDigito = verificaPrimeiroDigito(array);
      let segundoDigito = verificaSegundoDigito(array);
  
      if(primeiroDigito != array[12] && segundoDigito != array[13]){
        return false;
      } 
  
      return true;
  
    }
  
    $('#cpf').blur((e) => {
  
      let cnpjInput = $(e.target).val().replace(/[^0-9]/g, '').split('');
  
      $(e.target).mask('99.999.999/9999-99');
  
      let resultadoValidacao = validacaoCNPJ(cnpjInput);
  
      if (!resultadoValidacao) {
        $(e.target).addClass('is-invalid');
        $('#msg').html('CNPJ inválido');
      } else {
        $(e.target).removeClass('is-invalid');
        $('#msg').html('');
      }
  
      
  
    })

  })

  $('.hideModal').on('click', () => {
    $('.modal').hide();
  })
  
  */

  })
})