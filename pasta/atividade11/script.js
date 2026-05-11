 function verificarIdade(){
      let idade = Number(document.getElementById("idade").value);
      if(idade >= 18){
        document.getElementById("mensagem").innerHTML =
        "Você é maior de idade.";

      }else{

        document.getElementById("mensagem").innerHTML =
        "Você é menor de idade.";

      }

    }
