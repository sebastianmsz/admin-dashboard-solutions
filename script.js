const likeButton = document.querySelectorAll('.heart-icon')
likeButton.forEach(button => {
let likeButtonActive = false;
    button.addEventListener('click', ()=>{
        if (likeButtonActive){
            likeButtonActive = false;
            button.style.fill = ('none');
        } else {
            likeButtonActive = true;
            button.style.fill = ('red');
        }
    })
});
