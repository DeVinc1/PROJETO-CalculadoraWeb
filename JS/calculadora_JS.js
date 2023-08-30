var conta = ""
var resultado = ""
var conta2 = ""

//------------Funções indiretas-------------
function reduzirFonte(){
   if(conta.length > 9){
      document.getElementById("textoBaixo").style.fontSize = "35px";
      document.getElementById("textoBaixo").style.marginTop = "85px";
   }
   else{
      document.getElementById("textoBaixo").style.fontSize = "96px"
      document.getElementById("textoBaixo").style.marginTop = "45px";
   }
}

function reduzirTamanho(){
   var solucao
   var solucaoString
   solucao = eval(conta)
   solucaoString = solucao.toString()

   if(solucaoString.length > 9 ){
      document.getElementById("textoBaixo").style.fontSize = "35px";
      document.getElementById("textoBaixo").style.marginTop = "65px";
   }
   else{
      document.getElementById("textoBaixo").style.fontSize = "96px"
      document.getElementById("textoBaixo").style.marginTop = "45px";
   }
}

var permitirDualidade

//------------------------------------------


function adUm(){
   conta = conta + "1"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adDois(){
   conta = conta + "2"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adTres(){
   conta = conta + "3"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adQuatro(){
   conta = conta + "4"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adCinco(){
   conta = conta + "5"
   reduzirFonte();
   document.getElementById("textoBaixo").innerHTML = conta;
   permitirDualidade = true
}

function adSeis(){
   conta = conta + "6"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adSete(){
   conta = conta + "7"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adOito(){
   conta = conta + "8"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adNove(){
   conta = conta + "9"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function adZero(){
   conta = conta + "0"
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function mais(){
   conta = conta + " + "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function menos(){
   conta = conta + " - "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function vezes(){
   conta = conta + " * "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = false
}

function divisão(){
   conta = conta + " / "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = false
}

function ponto(){
   conta = conta + "."
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = false
}

function negativo(){
   conta =  conta + " - "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}

function porcentagem(){
   conta =  conta + " / 100 * "
   document.getElementById("textoBaixo").innerHTML = conta;
   reduzirFonte();
   permitirDualidade = true
}


function apagar(){
   conta = ""
   document.getElementById("textoCima").innerHTML = " ";
   document.getElementById("textoBaixo").innerHTML = " ";
   reduzirFonte();
}


function igual(){
   document.getElementById("textoCima").innerHTML = conta;
   document.getElementById("textoBaixo").innerHTML = eval(conta);
   reduzirTamanho();
}

