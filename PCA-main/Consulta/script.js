function Autenticacao(){
    var title = document.getElementById("title");
    var body = document.getElementById("body");

    var campoLogin = document.getElementById("campoAutenticacaoUsuario").value;
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
        title.innerHTML = "PCA | Funcionário";
        body.className = "fundoBranco";

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
        title.innerHTML = "PCA | Paciente";
        body.className = "fundoBranco";

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
        title.innerHTML = "PCA | Funcionário";
        body.className = "fundoBranco";

        nomeCompletoFuncionario.value = "Funcionário";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(quantVet == 11){
        title.innerHTML = "PCA | Paciente";
        body.className = "fundoBranco";

        nomeCompletoPaciente.value = "Paciente";
        acessoPaciente.className = "acessoPacienteMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
}


function esqueceuSenha(){
    var title = document.getElementById("title");
    
    var autenticacao = document.getElementById("autenticacao");
    var esqueceuSenha = document.getElementById("esqueceuSenha");

    
    title.innerHTML = "PCA | Esqueceu senha";
    
    autenticacao.className = "autenticacaoOcultar";
    esqueceuSenha.className = "esqueceuSenhaMostrar";

}

function menuConsultarCadastro(){    
    var consultarCadastro = document.getElementById("consultarCadastro");
    
    consultarCadastro.className = "consultarCadastro";
}
function dadoMenuAcessoFuncionarioOver(){
    var dadoMenuAcessoFuncionario = document.getElementById("dadoMenuAcessoFuncionario");
    
    dadoMenuAcessoFuncionario.className = "dadoMenuAcessoFuncionarioOver";
}

function consultarCadastroCriado(){
    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    
    consultarCadastro.className = "consultarCadastroOcultar";
    funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
    funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
}
function menuCadastrarPaciente(){
    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    
    consultarCadastro.className = "consultarCadastroOcultar";
    funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
    funcionarioCadastrarPaciente.className = "funcionarioCadastrarPacienteMostrar";
}
