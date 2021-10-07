function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."};
    } else {
      return {valido:true, texto:""};
    }
}

function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72 ){
    return {valido:false, texto:"Senha deve ter 4 e 72 digitos."};
  } else {
    return {valido:true, texto:""};
  }
}

function validarNome(nome){
  if(nome.length < 2 ){
    return {valido:false, texto:"Nome deve ter mais de 2 digitos."};
  } else {
    return {valido:true, texto:""};
  }
}

export {validarSenha, validarCPF, validarNome}