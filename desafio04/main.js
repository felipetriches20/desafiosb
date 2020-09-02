
let numPares = document.getElementById("valor");
let exibirPares = document.getElementById("btnClique");

function numeroPares(){
    document.getElementById('resultado').innerHTML =" ";
        for(let i=0; i<= Number(numPares.value); i++ ){
            if(i%2==0){
                //document.writeln(i); 
                document.getElementById('resultado').innerHTML += i+"<br>";
        }
    }
}
exibirPares.onclick = numeroPares;
