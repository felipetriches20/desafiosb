const photoContainer = document.getElementById('photoContainer');

let cats = [
    {
        photo: "foto1.jpeg",
        likes: 0,
    }, 
    {
        photo: "foto1.jpeg",
        likes: 0,
    },
];

function photoRender(photo, key){
    return  `<section class="cat-box">
    <div class="cat-box__photo">
        <img src="img/${photo.photo}" alt="">
    </div>
    
        <button type="button" class="btn btn__primary" data-btn-like="${key}"> 
            Like!  
        </button>
    
    <div class="cat-box__like-count">
        Essa foto já foi curtida ${photo.likes} vezes!
    </div>
    </section>`;
};

function allPhotoRender(){
    let html = "";

    for(let i =0; i<cats.length; i++){
       html += photoRender(cats[i],i);
    }

    photoContainer.innerHTML = html;
    configButtonLike();

}

function configButtonLike(){
    let allBtnLike = document.querySelectorAll('[data-btn-like]');

    allBtnLike.forEach((obj) => {
        obj.onclick = function(){
            const arrayKey = Number(this.getAttribute("data-btn-like"));
           cats[arrayKey].likes +=1;
           allPhotoRender();
        }
    });
};

