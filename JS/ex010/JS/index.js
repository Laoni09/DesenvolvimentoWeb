nome1=window.prompt("What's your name?")
    if (nome1 != null && nome1 != ""){
        document.write("Olá, " + nome1 +"!")
    } else{
        document.write("Olá, visitante!")
    }

    function validar(){
        if (document.cadastro.nome.value == ""){
            window.alert("Você deve preencher o campo nome!")
            document.cadastro.nome.focus()
            return false;
        }
        if (document.cadastro.observacoes.value == ""){
            window.alert("Você deve colocar alguma observação!")
            document.cadastro.observacoes.focus()
            return false;
        }
    }