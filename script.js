let menuBar = document.querySelector("#menuBar");
let closeMenu = document.querySelector("#closeMenu");
let menuContainer = document.querySelector("#menuContainer");

menuBar.addEventListener("click", () => {
    menuContainer.classList.remove('hidden');
    menuBar.classList.add("hidden"); 
    closeMenu.classList.remove('hidden');
    
});

closeMenu.addEventListener("click",  () => {
    menuContainer.classList.add('hidden'); 
    menuBar.classList.remove("hidden");
    closeMenu.classList.add('hidden');
});


let headerImage = ['./image/first header.jpg', './image/foods header.jpg', './image/iphone header.jpg', './image/pad header.jpg'];
let count = 0;
let imageFolder = document.querySelector("#headerImage");

let rightMove = document.querySelector("#rightMove");
let leftMove = document.querySelector('#leftMove');

rightMove.addEventListener("click", () => {
    setTimeout(() => {
        count++;
                if(count >= headerImage.length) {
                    count = 0;
                     imageFolder.src = headerImage[count];
                }
                else{
                    imageFolder.src = headerImage[count];
                }
    }, 200);
});
leftMove.addEventListener("click", () => {
    setTimeout(() => {
        count--;
                if(count < 0) {
                    count = headerImage.length-1;
                    imageFolder.src = headerImage[count]
                }
                else{
                    imageFolder.src = headerImage[count];
                }
    }, 200);
});
