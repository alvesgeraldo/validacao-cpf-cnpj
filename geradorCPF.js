$(document).ready(() => {

  function geraPrimeiroDigito(array){
    
    let n = 10;
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
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

  function geraSegundoDigito(array){

    let n = 11;
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
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

  
  
  $('#btnGerador').on('click', () => {

      let novoCPF = [];

      for (let i = 0; i < 9; i++) {
        let novoDigito = Math.floor(Math.random() * 10);
        novoCPF.push(novoDigito);
      }

      let primeiroDigitoVerificador = geraPrimeiroDigito(novoCPF);
      novoCPF.push(primeiroDigitoVerificador);

      let segundoDigitoVerificador = geraSegundoDigito(novoCPF);
      novoCPF.push(segundoDigitoVerificador);

      $('#cpf_cnpj').val(novoCPF.join(''))

  }) 
  
  $('#btnCopiar').on('click', () => {

    let txt = document.getElementById('cpf_cnpj');
    txt.select();
    navigator.clipboard.writeText(txt.value);

  })

  


})
