let btnCurtir = document.getElementById("btnLike");
let vezesClick =0;

function qtdLikes(){
    vezesClick++;
    //console.log(vezesClick);
    document.getElementById('vezesClick').innerHTML = "Essa foto ja foi curtida "+vezesClick+" veze(s)";
}
btnCurtir.onclick = qtdLikes;

let btnCurtirtwo = document.getElementById("btnLiketwo");
let vezesClicktwo =0;

function qtdLikestwo(){
    vezesClicktwo++;
    //console.log(vezesClicktwo);
    document.getElementById('vezesClicktwo').innerHTML = "Essa foto ja foi curtida "+vezesClicktwo+" veze(s)";
}
btnCurtirtwo.onclick = qtdLikestwo;

