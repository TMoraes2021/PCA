function Acessar(){
    var campoLogin = document.getElementById("campoLogin").value;
    var quantVet = parseInt(campoLogin.length);

    var nomeCompletoFuncionario = document.getElementById("nomeCompletoFuncionario");
    var idadeFuncionario = document.getElementById("idadeFuncionario");
    var grupoSanguineoFuncionario = document.getElementById("grupoSanguineoFuncionario");
    var problemasSaudeFuncionario = document.getElementById("problemasSaudeFuncionario");
    var alergiaFuncionario = document.getElementById("alergiaFuncionario");
    var pesoFuncionario = document.getElementById("pesoFuncionario");
    var alturaFuncionario = document.getElementById("alturaFuncionario");

    var nomeCompletoPaciente = document.getElementById("nomeCompletoPaciente");
    var idadePaciente = document.getElementById("idadePaciente");
    var grupoSanguineoPaciente = document.getElementById("grupoSanguineoPaciente");
    var problemasSaudePaciente = document.getElementById("problemasSaudePaciente");
    var alergiaPaciente = document.getElementById("alergiaPaciente");
    var pesoPaciente = document.getElementById("pesoPaciente");
    var alturaPaciente = document.getElementById("alturaPaciente");

    
    var autenticacao = document.getElementById("autenticacao");
    var acessoFuncionario = document.getElementById("acessoFuncionario");

    if(campoLogin == "12345"){
        nomeCompletoFuncionario.value = "Alcimar";
        idadeFuncionario.value = "52";
        grupoSanguineoFuncionario.value = "O+";
        problemasSaudeFuncionario.value = "Diabético";
        alergiaFuncionario.value = "Novalgina";
        pesoFuncionario.value = "75 kg";
        alturaFuncionario.value = "1,60 m";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(campoLogin == "00123456789"){
        nomeCompletoPaciente.value = "Lucas";
        idadePaciente.value = "20";
        grupoSanguineoPaciente.value = "O-";
        problemasSaudePaciente.value = "hipertenso";
        alergiaPaciente.value = "Novalgina";
        pesoPaciente.value = "80 kg";
        alturaPaciente.value = "1,80 m";
        acessoPaciente.className = "acessoPacienteMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(quantVet == 5){
        nomeCompletoFuncionario.value = "Funcionário";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(quantVet == 11){
        nomeCompletoPaciente.value = "Paciente";
        acessoPaciente.className = "acessoPacienteMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
}