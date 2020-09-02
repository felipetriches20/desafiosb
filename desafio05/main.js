let btnCurtir = document.getElementById("btnLike");
let vezesClick =0;

function qtdLikes(){
    vezesClick++;
    //console.log(vezesClick);
    document.getElementById('vezesClick').innerHTML = "Essa foto ja foi curtida "+vezesClick+" veze(s)";
}
btnCurtir.onclick = qtdLikes;