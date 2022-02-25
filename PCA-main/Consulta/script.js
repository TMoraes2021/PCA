function Acessar(){
    var campoLogin = document.getElementById("campoLogin").value;
    var quantVet = parseInt(campoLogin.length);

    var nomeCompletoFuncionario = document.getElementById("nomeCompletoFuncionario");
    var nomeCompletoPaciente = document.getElementById("nomeCompletoPaciente");

    
    var autenticacao = document.getElementById("autenticacao");
    var acessoFuncionario = document.getElementById("acessoFuncionario");

    if(campoLogin == "12345"){
        nomeCompletoFuncionario.value = "Alcimar";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(campoLogin == "00123456789"){
        nomeCompletoPaciente.value = "Lucas";
    }
    else if(quantVet == 5){
        nomeCompletoFuncionario.value = "Funcionário";
    }
    else if(quantVet == 11){
        nomeCompletoPaciente.value = "Paciente";
    }
}