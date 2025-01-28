document.addEventListener("DOMContentLoaded" , function(){
    const images=document.querySelectorall("img");
    images.forEach(image => {                 
        image.addEventListener("mouseenter",function(){
            this.style.transform="scale(1.1)translateY(-15px)";
            this.style.boxShadow="20px 30px 30px rgba(0,0,0,0.2)";
        });
        image.addEventListener("mouseleave" , function(){
            this.style.transform="scale(1.0)translateY(-9px)";
            this.style.boxShadow="none";
        });
    });
});

function openmodel(imagesrc){
    let model=document.getElementById("mymodel");
    let modelimg=document.getElementById("modelimage");
    model.style.display="block";
    modelimage.src=imagesrc;
}

function closemodel(){
    let model=document.getElementById("mymodel");
    model.style.display="none";
}