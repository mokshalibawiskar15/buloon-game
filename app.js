
let gallery = document.querySelector('#balloon-gallery');

document.addEventListener('mouseover', function(e){

    if (e.target.className === "balloon"){

                e.target.style.backgroundColor = "#ededed";
                e.target.style.border = "4px dotted black"
                e.target.textContent = "m ";
            
                
    }   
});



