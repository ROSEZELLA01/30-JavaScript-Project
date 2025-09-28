const image = document.querySelector('.img');
const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");



 const imageSrc = [
   "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1506355683710-bd071c0a5828?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cml2ZXJ8ZW58MHx8MHx8fDA%3D",
   "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cml2ZXJ8ZW58MHx8MHx8fDA%3D",
 ];
 let index = 0
  image.setAttribute("src", imageSrc[index]);

 next.addEventListener("click",() => {
    
      if (index< imageSrc.length -1) {
        index++;
        image.setAttribute("src", imageSrc[index]);
        console.log(index);
      }

 });
 prev.addEventListener("click",() => {
    if(index>0){
        index--;
        image.setAttribute("src", imageSrc[index]); 
        console.log(index);
    }

 });