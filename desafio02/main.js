//é o objeto button
let clique = document.getElementById("btnClique");
//vai armazenar a quantidade de cliques
let exibir=0;
//funcao que quando clicar no botao vai somar mais um na variavel exibir
function contaClique(){
   
    exibir++;  
    //console.log(exibir);

    document.getElementById('resultado').innerHTML = exibir;

}


clique.onclick = contaClique;